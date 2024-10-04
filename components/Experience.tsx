

import React, { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, useInView } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '@/styles';
import { experiences } from '@/lib/constants';
import { SectionWrapper } from '@/lib/hoc';
import { textVariant } from '@/lib/utils/motion';
import { useTheme } from 'next-themes';
import Blob from './Blob';


interface ExperienceType {
  date: string;
  iconBg: string;
  icon: string;
  company_name: string;
  title: string;
  points: string[];
}

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{ background: theme === 'dark' ? '#1d1836' : '#f3f4f6', color: '', border: 'none'}}
      contentArrowStyle={{ borderRight: `7px solid ${theme === 'dark' ? '#1d1836' : '#fff'}`}}
      date={experience.date}
      dateClassName='text-slate-800 dark:text-slate-100 text-[16px] font-bold'
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      visible={isInView}
    >
     <div className="absolute -right-[15%] top-0 w-[600px] h-full rounded-full bg-purple-400 filter blur-[300px] opacity-50 animate-breath" />
      <div ref={cardRef}>
        <h3 className='text-slate-800 dark:text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2' style={{ justifyContent: 'space-around', textAlign: 'justify', textJustify: 'inter-word' }}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className='text-slate-700 dark:text-white text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
      <div className="absolute -right-[15%] top-0 w-[600px] h-full rounded-full bg-purple-400 filter blur-[300px] opacity-50 animate-breath" />
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRefresh(prev => !prev);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");