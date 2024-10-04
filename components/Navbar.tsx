'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { styles } from '../styles';
import { navLinks } from '../lib/constants';
import { logo, linkedin, github, menu, close } from '../public/assets';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const blurVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-sm`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={blurVariants}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2" onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo.src} alt="logo" width={36} height={36} className="object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Dhruvjyoti</p>
          </Link>
        </motion.div>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link: NavLink) => (
            <motion.li
              key={link.id}
              initial="hidden"
              animate="visible"
              variants={blurVariants}
              transition={{ duration: 0.5 }}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
          <motion.li
            initial="hidden"
            animate="visible"
            variants={blurVariants}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="https://www.linkedin.com/in/dhruvjyoti-swain-b28951227/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={linkedin.src} width={24} height={24} className="object-contain" alt="LinkedIn" />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={blurVariants}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="https://www.github.com/adityagoel28/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={github.src} width={24} height={24} className="object-contain" alt="GitHub" />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={blurVariants}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <ThemeToggle />
          </motion.li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close.src : menu.src}
            alt="menu"
            width={28}
            height={28}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <motion.div
            initial="hidden"
            animate={toggle ? "visible" : "hidden"}
            variants={blurVariants}
            transition={{ duration: 0.5 }}
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link: NavLink) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center">
                <a href="https://www.linkedin.com/in/dhruvjyoti-swain-b28951227/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src={linkedin.src} width={24} height={24} className="object-contain" alt="LinkedIn" />
                </a>
              </li>
              <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center">
                <a href="https://www.github.com/adityagoel28/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src={github.src} width={24} height={24} className="object-contain" alt="GitHub" />
                </a>
              </li>
              <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center">
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;