import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiMysql, SiCplusplus, SiFramer, SiGreensock } from 'react-icons/si';

// Skill Icons
const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
  { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
  { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
];

// Animation Variants
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen  flex justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20">
      <div className="container mx-auto text-center w-[94%]">
        {/* Title */}
        <h2 className="text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-teal-400 mb-12">
          TECHNICAL SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              viewport={{ once: true }}
            >
              {/* Icon as circle with gradient and shadow */}
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-xl mb-4 transition-transform transform hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}, #1e1e1e)`,
                }}
              >
                <div className="text-white text-4xl">{skill.icon}</div>
              </div>
              {/* Skill Name */}
              <p className="text-white font-semibold text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
