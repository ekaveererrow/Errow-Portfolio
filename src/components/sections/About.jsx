import { motion } from "framer-motion";

export const About = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "PHP"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API Development"],
    },
    {
      title: "ORM & Databases",
      skills: ["Prisma", "MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      title: "Deployment & Cloud",
      skills: ["Vercel", "Render"],
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "GitHub", "Project Management", "OWASP", "Postman"],
    },
  ];

  const experiences = [
    {
      title: "Project Manager & Full-Stack Developer",
      company: "National University",
      date: "2024 - 2025",
      description:
        "Led the development of Smart Ride, a scheduling, mapping, and maintenance system designed to streamline bus operations. Managed project timelines, assigned tasks, and coordinated with team members to ensure on-time delivery. Developed both frontend and backend modules using the MERN stack, integrated RESTful APIs, and implemented role-based access control and analytics features to enhance system efficiency and usability.",
    },
    {
      title: "Software Engineer Intern",
      company: "Global Transco ICT Solutions OPC",
      date: "2025 - 2026",
      description:
        "Led backend modernization of Zeus: FIDS by refactoring legacy code into a scalable modern tech stack, improving maintainability and system performance for real-time flight data processing. Applied DevOps practices including Linux server management, CI/CD pipelines, and deployment automation, successfully releasing and maintaining production systems across two airports with high availability and stability.",
    },
  ];

  const certifications = [
    {
      title: "Fortinet Certified Fundamentals Cybersecurity",
      issuer: "Fortinet",
      year: "2025",
      file: "https://www.credly.com/badges/7554a19d-0647-4989-8b54-73a2ecb4f570/public_url",
    },
    {
      title: "Unity Junior Programmer",
      issuer: "Unity",
      year: "2024",
      file: "/assets/unity_certification.pdf",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 theme-section">
      <div className="max-w-4xl mx-auto px-6 theme-text">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="theme-card rounded-xl p-8 hover:-translate-y-1 transition-all"
        >
          <p className="mb-6 leading-relaxed theme-muted">
            Hello! I&apos;m{" "}
            <span className="theme-accent font-semibold">Ekaveer Errow D. Mirandilla</span>,
            an aspiring <span className="theme-accent">Full-Stack Developer</span>
            passionate about designing efficient, scalable, and user-friendly applications.
            I specialize in building web systems with modern technologies such as the MERN
            stack and PHP-MySQL.
            <br />
            <br />
            My goal is to keep expanding my expertise in full-stack development, contribute
            to meaningful projects, and work with collaborative teams that value innovation
            and growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -4 }}
                className="theme-card rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 theme-accent">{group.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="theme-chip py-1 px-3 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 theme-accent">Education</h3>
            <ul className="space-y-4 theme-muted">
              <li>
                <strong className="theme-text">B.S. in Information Technology (Mobile and Web Application)</strong>{" "}
                National University (2023 - 2026)
              </li>
              <li>
                <strong className="theme-text">B.S. in Information Technology</strong> Central
                Colleges of the Philippines (2022 - 2023)
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 theme-accent">Experience</h3>
            <div className="relative border-l border-[color:var(--border)] pl-6 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-1 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(59,130,246,0.45)]"></div>
                  <h4 className="text-lg font-semibold theme-text">{exp.title}</h4>
                  <p className="text-sm theme-subtle">
                    {exp.company} - {exp.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed theme-muted">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 theme-accent">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="theme-card rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h4 className="text-lg font-semibold theme-accent">{cert.title}</h4>
                  <p className="text-sm theme-subtle mb-3">
                    {cert.issuer} - {cert.year}
                  </p>

                  {cert.file.endsWith(".pdf") ? (
                    <a
                      href={cert.file}
                      download={cert.title + ".pdf"}
                      className="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-lg theme-accent-bg transition-all"
                    >
                      Download Certificate
                    </a>
                  ) : (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-lg theme-accent-bg transition-all"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
