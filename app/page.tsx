import {
  Shell,
  Hero,
  Nav,
  About,
  Experience,
  Publications,
  Tech,
  Projects,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Publications />
      <Tech />
      <Projects />
      <Contact />
      <footer className="mt-16 mb-2 text-[11px] text-term-muted text-center">
        $ echo &quot;© {new Date().getFullYear()} Dhruvjyoti Swain&quot;
      </footer>
    </Shell>
  );
}
