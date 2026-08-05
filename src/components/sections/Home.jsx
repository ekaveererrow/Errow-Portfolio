import { motion } from "framer-motion";
import profilePic from "../../assets/photoErrow.png";
import resumePDF from "../../assets/Ekaveer Mirandilla Resume.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 theme-section"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl font-bold theme-text mb-2"
      >
         Ekaveer Errow Mirandilla
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-4xl theme-accent mb-6 font-medium"
      >
        Web Developer
      </motion.p>

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -12, 0],
        }}
        transition={{
          scale: { type: "spring", stiffness: 120, damping: 14, delay: 0.6 },
          opacity: { duration: 0.6, delay: 0.6 },
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.6,
          },
        }}
        className="w-60 h-60 md:w-60 md:h-60 rounded-full border-2 border-[color:var(--accent)] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.24)]"
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      <motion.a
        href={resumePDF}
        download="Ekaveer Mirandilla Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-8 inline-block px-6 py-3 rounded-lg theme-accent-bg font-semibold hover:bg-[var(--cta)] transition-all shadow-[0_0_20px_rgba(59,130,246,0.24)]"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

