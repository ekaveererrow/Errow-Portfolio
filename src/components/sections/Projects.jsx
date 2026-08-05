import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import smartrideLogin from "../../assets/smartrideweb/smartrideLogin.png";
import smartrideDashboard from "../../assets/smartrideweb/smartrideDashboard.png";
import smartrideSchedule from "../../assets/smartrideweb/smartrideSchedule.png";
import smartrideAnalytics from "../../assets/smartrideweb/smartrideAnalytics.png";
import cmaLogin from "../../assets/cma/CMA Login.png";
import lambDashboard from "../../assets/lamb/LAMB Dashboard.png";

export const Projects = () => {
  const projects = [
    {
      title: "Smart Ride",
      description:
        "Smart Ride revolutionizes bus company operations by integrating scheduling, mapping, and maintenance into one system. Built using the MERN stack (MongoDB, Express, React, Node.js), it enhances efficiency, minimizes downtime, and enables real-time decision-making through analytics. For Philippine Rabbit Bus Lines.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
      images: [
        smartrideLogin,
        smartrideDashboard,
        smartrideSchedule,
        smartrideAnalytics,
      ],
    },
    {
      title: "CMA",
      description:
        "CMA is one of my projects focused on streamlining the workflow and presenting key information in a clean, accessible interface.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Supabase", "TypeScript"],
      images: [cmaLogin],
    },
    {
      title: "LAMB",
      description:
        "LAMB is another project I worked on, built to support structured workflows and a straightforward user experience.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Supabase", "TypeScript"],
      images: [lambDashboard],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project, index) => {
    if (!project.images.length) return;
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
    <section id="projects" className="min-h-screen py-20 theme-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center theme-text">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="theme-card rounded-xl p-5 hover:border-[color:var(--accent)] transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`relative overflow-hidden rounded-xl ${
                  project.images.length ? "cursor-pointer" : ""
                }`}
                onClick={() => openModal(project, 0)}
              >
                {project.images.length ? (
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="rounded-xl object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                ) : (
                  <div className="h-56 w-full rounded-xl bg-[var(--surface-strong)] border border-[color:var(--border)] flex items-center justify-center">
                    <span className="text-3xl font-bold tracking-[0.35em] theme-muted">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mt-4 mb-2 theme-text">{project.title}</h3>
              <p className="theme-muted text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech, t) => (
                  <span key={t} className="theme-chip py-1 px-3 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 theme-overlay flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full theme-modal rounded-xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 theme-text hover:text-[var(--accent)] transition z-10"
              >
                <X size={28} />
              </button>

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

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 theme-card p-2 rounded-full hover:border-[color:var(--accent)] transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 theme-card p-2 rounded-full hover:border-[color:var(--accent)] transition"
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
