import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "/recipe.png";
import AdditionalProjects from './Additionalproject';

const projects = [
  {
    id: 1,
    title: "Recipe app",
    description: "Share, discover, and create delicious recipes with our app!",
    image: "/recipe.png", // Background image for the project card
    liveUrl: "https://recipe-app-zeta-gules.vercel.app/",
    githubUrl: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern portfolio website with sleek animations.",
    image: "/portfolio.png",
    liveUrl: "https://example-live.com",
    githubUrl: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Hotel odisej clone",
    description: "A web clone of a famous hotel website made with html/css, js and gsap.",
    image: "/hotel.png",
    liveUrl: "https://yash-d11.github.io/hotel_odisej_clone/",
    githubUrl: "https://github.com/example/project2"
  },
  // Add more projects here
];

const Projects = () => {
  

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-16 px-8 text-white">
      <h2 className="text-4xl font-bold text-center font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-400 mb-16 ">PROJECTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[97%]">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0,scale:0,right:200 }}
            {...(isMobile
              ? { animate: { opacity: 1, scale: 1, right: 0 }, transition: { duration: 0.5 } }
              : { whileInView: { opacity: 1, scale: 1, right: 0 }, transition: { duration: 0.5 } }
            )}
          viewport={{once:true}}
         
            className="relative bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Image */}
            <div className="h-52 w-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
              {/* Overlay for darkening the image */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Buttons */}
              <div className="flex justify-start gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center px-5 py-2 text-sm font-bold text-yellow-600 border-2 border-yellow-600 rounded-full hover:text-white group hover:bg-yellow-600"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-600 opacity-100 rounded-full group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="relative">View Live</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center px-5 py-2 text-sm font-bold text-pink-600 border-2 border-pink-600 rounded-full hover:text-white group hover:bg-pink-600"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-pink-600 opacity-100 rounded-full group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="relative">GitHub Repo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AdditionalProjects />
    </section>
  );
};

export default Projects;
