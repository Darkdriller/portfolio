'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../lib/hoc';
import { technologies } from '../lib/constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../lib/utils/motion';

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>
          My tech stack
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <motion.div 
        className='flex flex-row flex-wrap justify-center gap-10 mt-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25}}
      >
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28 flex flex-col items-center justify-center shadow-lg rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl' 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.55)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.25, transition: { duration: 0.01 } }}
          >
            <div className='w-16 h-16 relative'>
              <img
                src={technology.icon}
                alt={technology.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className='text-slate-800 dark:text-slate-100 text-center mt-2 text-m'>{technology.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");