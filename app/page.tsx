'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Blob from '../components/Blob';
import { styles } from '../styles';
// import StarsCanvas from '../components/canvas/Stars';

export default function Home() {
  return (
    <div className={`relative z-0 ${styles.bgColorLight} dark:${styles.bgColorDark}`}>
      <div className="absolute right-0 top-0 w-full h-screen overflow-y-visible overflow-x-hidden">
        <Blob />
      </div>
        <Navbar />
        <Hero />
      <About idName="about" />
      
      <Experience idName="experience" />
      <Tech idName="tech" />
      <Projects idName="projects" />
      <div className="relative z-0">
        <Contact idName="contact" />
        {/* <StarsCanvas /> */}
      </div>

    </div>
  );
}
