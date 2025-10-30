import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 bg-[#060608]/90 border-b border-gray-500/50 backdrop-blur-lg"
    >
      <div className="max-w-5xl mt-3 mb-3 mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Links */}
        <div className="flex space-x-8 text-white text-xl font-semibold">
          {[
            { name: "Projects", to: "projects" },
            { name: "About Me", to: "about" },
            { name: "Get In Touch", to: "contact" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80} // adjust for navbar height
                className="relative inline-block group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Social Icons */}
        <div className="flex space-x-5">
          <motion.a
            href="https://github.com/ekaveererrow"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaGithub size={25} />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaInstagram size={25} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ekaveererrow/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaLinkedin size={25} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
