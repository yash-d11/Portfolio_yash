import React, {useState}from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope , FaWhatsapp} from 'react-icons/fa';

const DragArea = () => {
  const [submitted,setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(true);
    console.log('Form submitted!', formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:pr-16 py-12 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden"
    >
      {/* Left Section: Name, Title, Email, and Socials */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center space-y-8 text-white"
      >
        {/* Name and Designation */}
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Yash Dudani
          </h1>
          <p className="text-2xl font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100">
            Software Developer & Designer
          </p>
          
          {/* Email ID */}
          <a
            href="mailto:your.email@example.com"
            className="text-xl text-gray-200 hover:text-white transition-colors"
          >
            yashdudani21@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <p className="text-xl">Connect with me:</p>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/yash-d11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/yash-dudani-9b4b88274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com/yash_d_11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:yashdudani2@gmail.com"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/8817779978"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-white"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Right Section: Contact Form */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder='Your name'
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-600 "
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder='Your email'
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-600 "
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Message</label>
        <textarea
          name="message"
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-600 "
          required
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-lg hover:shadow-xl transition-transform"
      >
        {!submitted &&("Send Message")}
        {submitted && ("Message Sent")}
      </motion.button>
    </form>
      </motion.div>
    </motion.div>
  );
};

export default DragArea;
