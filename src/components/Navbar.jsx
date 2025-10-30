import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", to: "projects" },
    { name: "About Me", to: "about" },
    { name: "Get In Touch", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 bg-[#060608]/90 border-b border-gray-500/50 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-white font-bold text-2xl tracking-wide cursor-pointer"
        >
          <Link to="home" smooth={true} duration={800} offset={-80}>
            Errow.dev
          </Link>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white text-lg font-semibold">
          {navLinks.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative inline-block group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            { icon: <FaGithub size={22} />, href: "https://github.com/ekaveererrow" },
            { icon: <FaInstagram size={22} />, href: "https://instagram.com" },
            { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/ekaveererrow/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 border-t border-gray-700 flex flex-col items-center space-y-6 py-6 text-white text-lg font-semibold"
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="relative inline-block group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <FaGithub size={22} />, href: "https://github.com/ekaveererrow" },
                { icon: <FaInstagram size={22} />, href: "https://instagram.com" },
                { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/ekaveererrow/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
