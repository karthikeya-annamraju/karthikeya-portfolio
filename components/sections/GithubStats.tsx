import { getGithubStats } from "@/lib/github";
import GithubStatsView from "./GithubStatsView";

const GITHUB_USERNAME = "karthikeya-annamraju";

const GithubStats = async () => {
  const stats = await getGithubStats(GITHUB_USERNAME);
  return <GithubStatsView {...stats} />;
};

export default GithubStats;
