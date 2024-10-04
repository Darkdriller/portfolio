import React from 'react';
import { styles } from '../styles';
import JelloText from './JelloText';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`sm:px-20 px-12 absolute inset-0 top-[20%] left-[5%] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" /> 
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <JelloText text="Hi, I'm"/> &nbsp;
            <JelloText text="Dhruv" className="font-bold text-purple-600" />
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            <JelloText text="I am a Python Developer" className="inline-block" />
            <br className="sm:block hdden"/>
            <JelloText text="with a proficiency in Full Stack Development." className="inline-block" />
            <br/><br/>
            <a href="https://drive.google.com/file/d/1hjKocj52VzaWcQANctK9-TKIyUk198Xc/view?usp=drive_link" target="_blank"
            className="relative z-10 text-[#915eff] font-bold">
              My Resume
            </a>
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href='#about'>
        </a>
      </div>
    </section>
  )
}

export default Hero