'use client';

import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import  SectionWrapper from "../lib/hoc/SectionWrapper";
import { projects } from "../lib/constants";
import { fadeIn, textVariant } from "../lib/utils/motion";


interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link }) => {
  // return (
  //   <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  //     <Tilt options={{ max: 45, scale: 1, speed: 450 }}
  //       className="bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-full">
  //       <div className="relative w-full h-[230px]">
  //         <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
  //         <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
  //           <div onClick={() => window.open(source_code_link, "_blank")}
  //             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
  //             <img src={github.src} alt="github" className="w-1/2 h-1/2 object-contain" />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="mt-5">
  //         <h3 className="text-white font-bold text-[24px]">{name}</h3>
  //         <p className="mt-2 text-secondary text-[14px]" style={{ justifyContent: 'space-around', textAlign: 'justify', textJustify: 'inter-word' }}>{description}</p>
  //       </div>
        
  //       <div className="mt-4 flex flex-wrap gap-2">
  //         {tags.map((tag) => (
  //           <p key={tag.name} className={`text-[14px] ${tag.color}`}>
  //             #{tag.name}
  //           </p>
  //         ))}
  //       </div>
  //     </Tilt>
  //   </motion.div>
  // )
  return (
    // <motion.div
    //   variants={{
    //     hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    //     visible: { opacity: 1, x: 0 },
    //   }}
    //   initial="hidden"
    //   animate="visible"
    //   transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}

    // >
    <motion.div variants={fadeIn("up", "spring", index * 0.75, 0.75)}>
      <div
        className="w-full transition-transform duration-50 hover:scale-[1.02]"
      >
        <div className="w-full bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={image}
                  alt={`${name} favicon`}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">{description}</p>
              <div className="flex space-x-4">
                <a href={source_code_link} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                  <svg className="w-8 h-8 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-0 md:pt-16 md:pl-2">
              <img
                src={image}
                alt={`${name} preview`}
                width={500}
                height={300}
                className="rounded-tl-3xl object-cover w-[500px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Projects: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-800 dark:text-slate-300 text-[17px] max-w-3xl leading-[30px]"
          style={{ justifyContent: 'space-around', textAlign: 'justify', textJustify: 'inter-word' }}>
            I have worked on a wide range of projects. Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");