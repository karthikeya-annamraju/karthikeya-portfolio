export interface LanguageStat {
  name: string;
  pct: number;
  color: string;
}

export interface GithubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  languages: LanguageStat[];
}

// Brand-ish colors for common languages; anything else falls back to slate.
const LANG_COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Dart: "#02569B",
  Java: "#EA2D2E",
  Python: "#3776AB",
  HTML: "#E34C26",
  CSS: "#563D7C",
  "C++": "#F34B7D",
  C: "#555555",
  "C#": "#178600",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Shell: "#89E051",
  "Jupyter Notebook": "#DA5B0B",
};
const FALLBACK_COLOR = "#94A3B8";

// Shown only if the API is unreachable (offline build, rate limit, etc.).
const FALLBACK_STATS: GithubStats = {
  repos: 0,
  followers: 0,
  following: 0,
  stars: 0,
  languages: [],
};

interface GithubRepo {
  fork: boolean;
  language: string | null;
  stargazers_count: number;
}

interface GithubUser {
  public_repos?: number;
  followers?: number;
  following?: number;
}

export async function getGithubStats(username: string): Promise<GithubStats> {
  const opts = {
    headers: { Accept: "application/vnd.github+json" },
    // Cache for 1 hour so we don't exhaust the unauthenticated rate limit.
    next: { revalidate: 3600 },
  } as const;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, opts),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        opts
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

    const user: GithubUser = await userRes.json();
    const repos: GithubRepo[] = await reposRes.json();

    const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    // Tally primary language across the user's own (non-fork) repos.
    const counts: Record<string, number> = {};
    for (const r of repos) {
      if (r.fork || !r.language) continue;
      counts[r.language] = (counts[r.language] || 0) + 1;
    }

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    let languages: LanguageStat[] = [];

    if (total > 0) {
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const top = sorted.slice(0, 4);
      const topCount = top.reduce((a, [, c]) => a + c, 0);

      languages = top.map(([name, c]) => ({
        name,
        pct: Math.round((c / total) * 100),
        color: LANG_COLORS[name] ?? FALLBACK_COLOR,
      }));

      const otherCount = total - topCount;
      if (otherCount > 0) {
        languages.push({
          name: "Other",
          pct: Math.round((otherCount / total) * 100),
          color: FALLBACK_COLOR,
        });
      }
    }

    return {
      repos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      stars,
      languages,
    };
  } catch {
    return FALLBACK_STATS;
  }
}
