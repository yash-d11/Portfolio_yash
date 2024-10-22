import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
import { motion } from 'framer-motion';
import './Nav.css'; // Import the updated CSS file

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop view remains unchanged */}
      <nav className="fixed top-1/2 transform -translate-y-1/2 p-2 right-0 z-50 rounded-lg hidden md:block">
        <ul className="space-y-6">
          <li className='nav-item'>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              title='Home'
              className="cursor-pointer p-3 rounded-full text-white flex justify-end items-center"
            >
              <FaHome size={24} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              title='About Me'
              className="cursor-pointer p-3 rounded-full text-white flex justify-end items-center"
            >
              <FaUser size={24} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              title='Skills'
              className="cursor-pointer p-3 rounded-full text-white flex justify-end items-center"
            >
              <FaCode size={24} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              title='Projects'
              className="cursor-pointer p-3 rounded-full text-white flex justify-end items-center"
            >
              <GoProjectSymlink size={24} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              title='Contact Me'
              className="cursor-pointer p-3 rounded-full text-white flex justify-end items-center"
            >
              <FaEnvelope size={24} />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile view with Circular/Semi-circular Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 md:hidden z-50 circle-menu">
        <motion.div
          className="flex justify-center items-center relative"
          initial={{ scale: 0,}}
          animate={{ scale: isOpen ? 1 : 0 ,y:5}}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <ul className="relative">
              
              
              

              <li style={{ '--i': 0 }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  title='Contact Me'
                  className="cursor-pointer"
                >
                  <FaEnvelope />
                </Link>
              </li>

              <li style={{ '--i': 1 }}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  title='Projects'
                  className="cursor-pointer"
                >
                  <GoProjectSymlink />
                </Link>
              </li>

              <li style={{ '--i': 2 }}>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  title='Skills'
                  className="cursor-pointer"
                >
                  <FaCode />
                </Link>
              </li>

              <li style={{ '--i': 3 }}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  title='About Me'
                  className="cursor-pointer"
                >
                  <FaUser />
                </Link>
              </li>

              <li style={{ '--i': 4 }}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  title='Home'
                  className="cursor-pointer"
                >
                  <FaHome />
                </Link>
              </li>
              
            </ul>
          </div>
        </motion.div>

        {/* Central Button to Trigger the Navigation */}
        <button
          onClick={toggleMenu}
          className="p-4 rounded-full focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>
    </>
  );
};

export default SideNav;
