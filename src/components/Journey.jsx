import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    year: '2020',
    title: 'Started My Journey',
    description: 'I began my journey in software development, focusing on front-end technologies.',
  },
  {
    year: '2021',
    title: 'Learned React',
    description: 'I dived into React.js and created my first interactive web application.',
  },
  {
    year: '2022',
    title: 'Full-Stack Development',
    description: 'Expanded my skills to include back-end development with Node.js and Express.',
  },
  {
    year: '2023',
    title: 'Joined a Tech Team',
    description: 'Became part of a team where I contributed to various projects and learned collaboration skills.',
  },
];

const Journey = () => {
  return (
    <div className="bg-gray-900 py-10">
      <h2 className="text-white text-4xl text-center mb-10 font-poppins">
        My Journey
      </h2>

      {/* Horizontal Timeline Container */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:overflow-x-auto whitespace-nowrap px-6 py-10 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="absolute top-[10%] lg:top-[22%]  left-[9vw] sm:left-[5%] lg:left-[19%] lg:w-[65%] w-1 h-[70%] lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-purple-500 to-indigo-500 z-0 lg:z-auto"></div>
        
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            className="relative text-center mx-auto lg:mx-6 w-full lg:w-auto overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            {/* Year with Circle */}
            <div className="flex flex-row lg:flex-col  items-center mb-4">
              <div className="relative z-10 flex lg:flex-col items-center">
                {/* Circle */}
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-2 lg:mr-0"></div>
                {/* Year */}
                <span className="text-white text-base lg:text-lg font-semibold">
                  {item.year}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="bg-gray-800 text-white p-4 lg:p-6 rounded-lg shadow-lg relative max-w-full lg:w-60">
              <h4 className="text-lg lg:text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm w-full max-w-full break-words overflow-hidden">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
