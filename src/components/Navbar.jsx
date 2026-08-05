import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", to: "projects" },
    { name: "About Me", to: "about" },
    { name: "Get In Touch", to: "contact" },
  ];

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="theme-nav fixed top-0 w-full z-40"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="theme-text font-bold text-2xl tracking-wide cursor-pointer"
        >
          <Link to="home" smooth={true} duration={800} offset={-80}>
            Errow.dev
          </Link>
        </motion.h1>

        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          {navLinks.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative inline-block group cursor-pointer text-[color:var(--muted)] hover:text-[color:var(--text)]"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            className="theme-card flex h-10 w-10 items-center justify-center rounded-full transition hover:border-[color:var(--accent)]"
          >
            <ThemeIcon size={18} className="theme-text" />
          </button>
        </div>

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
              className="theme-card w-10 h-10 flex items-center justify-center rounded-full theme-text hover:border-[color:var(--accent)] transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            className="theme-card flex h-10 w-10 items-center justify-center rounded-full transition hover:border-[color:var(--accent)]"
          >
            <ThemeIcon size={18} className="theme-text" />
          </button>
          <button className="theme-text cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden theme-menu flex flex-col items-center space-y-6 py-6 theme-text text-lg font-semibold"
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="relative inline-block group cursor-pointer text-[color:var(--muted)] hover:text-[color:var(--text)]"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

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
                  className="theme-card w-10 h-10 flex items-center justify-center rounded-full theme-text hover:border-[color:var(--accent)] transition"
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

