import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Images from "../assests/fardeen.jpg";


const Home = () => {
  return (
    <div className="Home-container">
    <div className="text-container">
      {/* Profile Image */}
      <motion.img 
        src={Images} 
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
  
      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="heading"
      >
        Hi, I'm <span className="gradient-text">Fardeen 👋</span>
      </motion.h1>
  
      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8 }} 
        className="subtitle"
      >
        MERN Stack Developer
      </motion.p>
  
      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/FardeenFar18" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/fardeen-i-738296243/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>
       
      </div>
    </div>
  </div>
  
  
  );
};

export default Home;
