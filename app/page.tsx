import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <GithubStats />
      <Contact />
      <Footer />
    </>
  );
}
