import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample projects
const projects = [
  {
    id: 1,
    title: "Task Manager",
    description: "A modern task manager that sorts tasks based on their priority.",
    image: "/task_app.jpg",
    liveUrl: "https://github.com/yash-d11/task-frontend",
    
  },
  {
    id: 2,
    title: "Java Cryptography",
    description: "A java swing application that facilitates image and message encryption.",
    image: "/java_crypto.jpg",
    // liveUrl: "https://example-live.com",
    
  },
  {
    id: 3,
    title: "Online Tiffin Center",
    description: "A fully functional online tiffin center website.",
    image: "/tiffin_center.jpg",
    // githubUrl: "https://github.com/example/project3",
  },
  {
    id: 4,
    title: "ICD Web Clone",
    description: "A simple web clone of ICD website using HTML/CSS & JS.",
    image: "/icd.jpg",
    liveUrl: "https://yash-d11.github.io/icd_clone/",
    
  },
  {
    id: 5,
    title: "Landing page",
    description: "An animated landing page made using shery.js and GSAP.",
    image: "/landing_page.jpg",
    liveUrl: "https://yash-d11.github.io/animated-landingpage/",
    
  },
];

const AdditionalProjects = () => {
  const isMobile = window.innerWidth <= 640; 
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleHideProjects = () => {
    setShowAll(false);
  };
  
  const visibleProjects = showAll ? projects.length : (isMobile ? 0 : 2);

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-12 pr-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[97%]">
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.a
            key={project.id}
            href={project.liveUrl}
            initial={{ opacity: 0,scale:0, right:200}}
            {...(isMobile
              ? { animate: { opacity: 1, scale: 1, right: 0 }, transition: { duration: 0.5 } }
              : { whileInView: { opacity: 1, scale: 1, right: 0 }, transition: { duration: 0.5 } }
            )}
            viewport={{once:true}}
            transition={{ duration: 0.3, }}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Image */}
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
              {/* Overlay for darkening the image, shown only on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-300"
              ></motion.div>
            </div>

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-300   ">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-8">
        {!showAll && (
          <button
            onClick={handleShowMore}
            className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition-all"
          >
            Show More
          </button>
        )}

        {showAll && (
          <button
            onClick={handleHideProjects}
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all"
          >
            Hide Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default AdditionalProjects;
