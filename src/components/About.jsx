import React from 'react';
import { motion } from 'framer-motion';
import "/profile.jpg";

const About = () => {
  return (
    <>
      <div id='about' className="flex flex-col items-center justify-center min-h-screen p-8 relative overflow-hidden font-serif bg-gradient-to-r from-gray-900 via-black to-gray-900">
      
        {/* Background Image with futuristic gradient overlay */}
        <div className="absolute inset-0 bg-[url('/bg.jpg')] scale-y-[-1] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 via-transparent to-gray-900 opacity-50"></div>
        
        {/* Container for the image and text */}
        <div className="max-w-6xl lg:h-[85vh] mt-10 text-center p-8 relative z-10 bg-opacity-70 bg-gray-900 text-gray-200 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Circular Image with Animation */}
          <motion.div
            className="rounded-full overflow-hidden w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] lg:w-[30vw] lg:h-[30vw] mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once:true}}
            transition={{ duration: 1 }}
          >
            <img
              src="/profile.jpg"
              alt="Profile image | portfolio yash"
              loading='lazy'
              className="w-full h-full object-cover rounded-full shadow-lg shadow-indigo-500/50"
            />
          </motion.div>

          {/* Text with modern animation and futuristic styling */}
          <motion.div
            className="lg:w-[60%] text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="mb-6 text-5xl font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-400">
              ABOUT ME
            </h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-indigo-00 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-indigo-400">
              Hi, I’m Yash Dudani, a dedicated MERN stack software developer with expertise in Java, C++, and MySQL. I specialize in building full-stack web applications with technologies like MongoDB, Express.js, React, and Node.js, focusing on dynamic, responsive, and user-friendly frontend experiences.
            </p>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-indigo-400">
              I graduated with a B.Tech in Information Technology from LNCT Group of Colleges, Bhopal, where I sharpened my skills in software development, problem-solving, and data structures.
            </p>
            {/* <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-6 text-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-indigo-400">
              I've worked on several projects demonstrating my ability to create intuitive user interfaces. I am passionate about delivering seamless user experiences with clean, efficient code.
            </p> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
