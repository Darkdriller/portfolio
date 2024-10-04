'use client';

import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '@/styles';
import SectionWrapper from '@/lib/hoc/SectionWrapper';
// import { EarthCanvas } from './canvas';
import { slideIn } from '@/lib/utils/motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
      from_name: form.name,
      to_name: 'Dhruvjyoti',
      from_email: form.email,
      to_email: 'swaindhruv28@gmail.com',
      message: form.message,
      }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!).then(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    }, (error) => {
      setLoading(false);
      console.log(error.text);
      alert("Sorry, your message could not be sent. Please try again later.");
    });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap1- overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent rounded-3xl border border-gray-200 dark:border-gray-700 p-8 rounded-2xl">
        {/* <Blob /> */}
    
        {/* className="flex-[0.75] bg-black-100 p-8 rounded-2xl"> */}

          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-gray-950 dark:text-slate-300 font-medium mb-4">Your Name</span>
                <input
                  type="text" required name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
                  className="bg-gray-300 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-lg outlined-none border-none font-medium" />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-950 dark:text-slate-300 font-medium mb-4">Your Email</span>
                <input
                  type="email" required name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
                  className="bg-gray-300 dark:bg-tertiary placeholder:text-gray-500 dark:placeholder:text-gray-400 py-4 px-6 rounded-lg outlined-none border-none font-medium" />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-950 dark:text-slate-300 font-medium mb-4">Your Message</span>
                <textarea
                  rows={7} required name="message" value={form.message} onChange={handleChange} placeholder="What's your message?"
                  className="bg-gray-300 dark:bg-tertiary placeholder:text-gray-500 dark:placeholder:text-gray-400  py-4 px-6 rounded-lg outlined-none border-none font-medium" />
              </label>

              <button
                type="submit"
                className='bg-gray-300 dark:bg-tertiary text-gray-950 dark:text-slate-300 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl send-btn'>
                {loading ? "Sending..." : "Send Message"}
              </button>
          </form>
      </motion.div>

      {/* <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
         <EarthCanvas />
      </motion.div> */}
    </div> 
  );
};

export default SectionWrapper(Contact, "contact");
