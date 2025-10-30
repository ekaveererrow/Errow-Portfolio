import { motion } from "framer-motion";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Flutter",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PHP",
    "JWT Authentication",
    "RESTful APIs",
    "MySQL",
  ];

  const otherSkills = [
    "Git",
    "GitHub",
    "Figma",
    "OWASP ZAP",
    "Postman",
    "VS Code",
  ];

  const experiences = [
    {
      title: "Project Manager & Full-Stack Developer - Academic Project ( Smart Ride )",
      company: "National University",
      date: "2024 - Present",
      description:
        "Led the development of Smart Ride, a scheduling, mapping, and maintenance system designed to streamline bus operations. Managed project timelines, assigned tasks, and coordinated with team members to ensure on-time delivery. Developed both frontend and backend modules using the MERN stack, integrated RESTful APIs, and implemented role-based access control and analytics features to enhance system efficiency and usability.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#060608]"
    >
      <div className="max-w-4xl mx-auto px-6 text-white">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-sm"
        >
          <p className="mb-6 leading-relaxed">
            Hello! I’m <span className="text-blue-400 font-semibold">Ekaveer Errow D. Mirandilla</span>,
            an aspiring <span className="text-blue-400">Full-Stack Developer</span> passionate about
            designing efficient, scalable, and user-friendly applications. I
            specialize in building web systems with modern technologies such as
            the MERN stack and PHP-MySQL. <br /><br />
            My goal is to keep expanding my expertise in full-stack
            development, contribute to meaningful projects, and work with
            collaborative teams that value innovation and growth.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Frontend */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              🎓 Education
            </h3>
            <ul className="space-y-4">
              <li>
                <strong>B.S. in Information Technology (Mobile and Web Application)</strong> – National University (2023 - Present)
              </li>
              <li>
                <strong>B.S. in Information Technology</strong> – Central Colleges of the Philippines (2022 - 2023)
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              💼 Experience
            </h3>
            <div className="relative border-l border-blue-500/30 pl-6 space-y-8 ">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-sm">
                    {exp.company} • {exp.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
