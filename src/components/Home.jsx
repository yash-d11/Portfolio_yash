import React, { useState } from "react";
import { motion } from 'framer-motion';
import "/logo.png";
import "/resume.pdf";


const Home = () => {

  return (
    <>
    <section id="home" className="relative overflow-hidden">
      {/* Logo Section */}
      <img 
        className="absolute top-2 left-2 h-[10vh] lg:h-[13vh] z-50 hover:scale-110 transition-transform duration-300 ease-in-out"
        src="/logo.png" 
        alt="logo" 
      />

      {/* Draggable Social Icons */}
      

      {/* Main Section */}
      <div className="h-screen flex items-center justify-start bg-cover bg-center relative bg-[url('/bg.jpg')]">

        {/* Overlay for futuristic look */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <motion.div 
          className="relative mx-[10vw] md:mx-[20vw] sm:mx-[20vw] w-full sm:w-3/4 md:w-3/4 lg:w-3/4 md:p-6 sm:p-2 font-mono text-white z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Greeting */}
          <h6 className="italic text-xs lg:text-sm text-indigo-100">Hi there, My name is:</h6>

          {/* Main Heading with futuristic gradient and hover effect */}
          <h1 className="text-4xl xl:text-5xl font-bold font-serif bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-indigo-400">
            Yash Dudani
          </h1>

          {/* Subtext with tech-inspired hover effect */}
          <p className="font-sans italic text-sm sm:text-sm md:text-lg lg:text-xl mt-3 mb-8 text-start transition-transform duration-300 ease-in-out hover:scale-105 text-indigo-100 hover:text-indigo-400">
            I develop dynamic web solutions that enhance your digital presence, merging creativity and technology to craft engaging and impactful user experiences.
          </p>

          {/* Button Section */}
          <div className="flex justify-center gap-12">
            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.href = "mailto:yashdudani21@gmail.com"}
              className="relative inline-flex items-center px-5 py-2 lg:px-12 lg:py-3 sm:px-10 sm:py-8 overflow-hidden text-lg font-bold text-yellow-600 border-2 border-yellow-600 rounded-full hover:text-white group hover:bg-yellow-600"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="italic relative">contact me</span>
            </motion.button>

            {/* Resume Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative inline-flex items-center px-5 py-2 lg:px-12 lg:py-3 sm:px-12 sm:py-8 overflow-hidden text-lg font-bold text-yellow-600 border-2 border-yellow-600 rounded-full hover:text-white group hover:bg-yellow-600"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="italic relative">View Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Home;
