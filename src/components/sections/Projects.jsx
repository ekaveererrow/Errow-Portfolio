import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import smartrideLogin from "../../assets/smartrideweb/smartrideLogin.png";
import smartrideDashboard from "../../assets/smartrideweb/smartrideDashboard.png";
import smartrideSchedule from "../../assets/smartrideweb/smartrideSchedule.png";
import smartrideAnalytics from "../../assets/smartrideweb/smartrideAnalytics.png";

export const Projects = () => {
  const projects = [
    {
      title: "Smart Ride",
      description:
        "Smart Ride revolutionizes bus company operations by integrating scheduling, mapping, and maintenance into one system. Built using the MERN stack (MongoDB, Express, React, Node.js), it enhances efficiency, minimizes downtime, and enables real-time decision-making through analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
      images: [
        smartrideLogin,
        smartrideDashboard,
        smartrideSchedule,
        smartrideAnalytics,
      ],
    },
    {
      title: "Project Two",
      description: "",
      tech: ["React"],
      images: [],
    },
    {
      title: "Project Three",
      description: "",
      tech: ["React"],
      images: [],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedProject(null);
  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev + 1 === selectedProject.images.length ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-linear-to-b from-blue-500/5 to-transparent rounded-xl p-5 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openModal(project, 0)}
              >
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  className="rounded-xl object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech, t) => (
                  <span
                    key={t}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Image Modal Popup --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-[#0a0a0a] rounded-xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white hover:text-blue-400 transition"
              >
                <X size={28} />
              </button>

              {/* Image */}
              <motion.img
                src={selectedProject.images[currentIndex]}
                alt="Project Preview"
                key={currentIndex}
                className="w-full h-[450px] object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-blue-500/30 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-blue-500/30 transition"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
