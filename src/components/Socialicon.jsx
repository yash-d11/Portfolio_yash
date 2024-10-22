import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importing Instagram, LinkedIn, and WhatsApp icons

const SocialIcons = ({ onDragStart, onDragEnd }) => {
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  useEffect(() => {
    // Function to update drag constraints based on screen size
    const updateConstraints = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust constraints based on viewport size (Example values)
      setConstraints({
        left: -width + 200, // Modify these values as needed
        right: 0,
        top: 0,
        bottom: height - 100,
      });
    };

    // Initial constraint calculation
    updateConstraints();

    // Add event listener to update constraints on window resize
    window.addEventListener("resize", updateConstraints);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center p-2 rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 border-transparent bg-clip-border"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      drag // Enable dragging
      dragConstraints={constraints} // Apply dynamic drag constraints
      onDragStart={onDragStart} // Trigger onDragStart when dragging starts
      onDragEnd={onDragEnd}     // Trigger onDragEnd when dragging ends
    >
      {/* Instagram Icon with futuristic gradient background */}
        <motion.a
          href="https://www.instagram.com/yash_d_11/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-3xl p-1 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
        >
          <FaInstagram style={{ color: "#fff" }} /> {/* White icon color */}
        </motion.a>


      {/* LinkedIn Icon with futuristic gradient background */}
      <motion.a
        href="https://www.linkedin.com/in/yash-dudani-9b4b88274/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="text-3xl mx-2 p-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500"
      >
        <FaLinkedin style={{ color: "#fff" }} /> {/* White icon color */}
      </motion.a>

      {/* WhatsApp Icon with futuristic gradient background */}
      <motion.a
        href="https://wa.me/8817779978" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="text-3xl p-1 rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-500"
      >
        <FaWhatsapp style={{ color: "#fff" }} /> {/* White icon color */}
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
