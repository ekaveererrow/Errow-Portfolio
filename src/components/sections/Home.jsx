import { motion } from "framer-motion";
import profilePic from "../../assets/photoErrow.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl font-bold text-white mb-2"
      >
        Ekaveer Errow Mirandilla
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-4xl text-blue-500 mb-6 font-medium"
      >
        Web Developer
      </motion.p>

      {/* Fixed: single transition object with per-property configs */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          // keyframes for floating — allowed because y has its own tween in transition below
          y: [0, -12, 0],
        }}
        transition={{
          // spring only for scale
          scale: { type: "spring", stiffness: 120, damping: 14, delay: 0.6 },
          // simple tween for opacity
          opacity: { duration: 0.6, delay: 0.6 },
          // keyframe tween for y (floating), loops forever
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.6,
          },
        }}
        className="w-60 h-60 md:w-60 md:h-60 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)]"
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};
