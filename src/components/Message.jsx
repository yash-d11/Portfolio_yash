import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MessageBox = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null; // Return null if not visible

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative bg-white p-10 rounded-lg shadow-lg max-w-lg w-full"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)} // Close the message box
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          &#x2715;
        </button>

        {/* Main Message */}
        <div className="text-center space-y-6">
          <h2
            className="text-4xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
            tracking-wide p-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hurray! You got it!
          </h2>
          <p
            className="text-2xl font-medium bg-clip-text text-transparent 
            bg-gradient-to-r from-green-600 to-blue-800"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Let&apos;s Connect!
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/yash-d11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-black"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/yash-dudani-9b4b88274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-black "
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com/yash_d_11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-black "
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:yashdudani21@gmail.com"
              className="text-4xl text-black "
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MessageBox;
