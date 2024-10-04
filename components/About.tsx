'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../lib/constants';
import { fadeIn, textVariant } from '../lib/utils/motion';
import SectionWrapper from '../lib/hoc/SectionWrapper';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          className={`${styles.bgColorLight} dark:${styles.bgColorDark} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-gray-900 dark:text-white font-bold text-center text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {

  return (
    <>
      <div>

      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{ justifyContent: 'space-around', textAlign: 'justify', textJustify: 'inter-word' }}
      >
        Hi, my name is Dhruvjyoti Swain and I have a B.Tech degree in Data Science and Artificial Intelligence. 
        As a full-stack web developer, I have gained extensive experience in a range of tech stacks, including Python (Django), Tkinter, JavaScript, React.js, three.js, SQL, and 
        cloud services such as AWS. I am passionate about both web development and the field of data science and AI, 
        and I am dedicated to continuing my learning and growth in these areas.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
    </>
    
  );
};

export default SectionWrapper(About, "about");