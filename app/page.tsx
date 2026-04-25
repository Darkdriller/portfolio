import { Shell } from "@/components/terminal/Shell";
import { Hero } from "@/components/terminal/Hero";
import {
  Nav,
  About,
  Experience,
  TechStack,
  Projects,
  Contact,
} from "@/components/terminal/Sections";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Nav />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <footer className="mt-16 mb-2 text-[11px] text-term-muted text-center">
        $ echo &quot;© {new Date().getFullYear()} Dhruvjyoti Swain&quot;
      </footer>
    </Shell>
  );
}
