import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[#060608] border-b border-gray-500/50">
      <div className="max-w-5xl mt-3 mb-3 mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Links */}
        <div className="flex space-x-8 text-white text-xl font-semibold">
          <a
            href="#projects"
            className="relative inline-block group"
            >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
          <a
            href="#about"
            className="relative inline-block group"
            >
            About Me
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
          <a
            href="#contact"
            className="relative inline-block group"
            >
            Get In Touch
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        </div>

        {/* Right Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/ekaveererrow"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/ekaveererrow/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
};
