import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          toast.success("? Message Sent Successfully!");
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
          toast.error("? Something went wrong. Please try again.");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 theme-section">
      <div className="w-full max-w-3xl px-6 mx-auto flex-1">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center theme-accent"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 theme-card rounded-2xl p-8"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=" "
              className="theme-input w-full px-4 pt-6 pb-2 rounded-lg peer focus:outline-none focus:border-[color:var(--accent)]"
              required
            />
            <label className="absolute left-4 top-2.5 theme-subtle text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[color:var(--subtle)] peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[color:var(--accent)]">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="theme-input w-full px-4 pt-6 pb-2 rounded-lg peer focus:outline-none focus:border-[color:var(--accent)]"
              required
            />
            <label className="absolute left-4 top-2.5 theme-subtle text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[color:var(--subtle)] peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[color:var(--accent)]">
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder=" "
              className="theme-input w-full px-4 pt-6 pb-2 rounded-lg peer resize-none focus:outline-none focus:border-[color:var(--accent)]"
              required
            ></textarea>
            <label className="absolute left-4 top-2.5 theme-subtle text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[color:var(--subtle)] peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[color:var(--accent)]">
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full theme-accent-bg py-3 rounded-lg font-semibold transition hover:bg-[var(--cta)]"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="theme-subtle mb-4">or reach me through</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:ekaveer12@gmail.com" className="theme-accent hover:text-[color:var(--text)] transition">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ekaveererrow/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-accent hover:text-[color:var(--text)] transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ekaveererrow"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-accent hover:text-[color:var(--text)] transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 text-center theme-subtle text-sm border-t border-[color:var(--border)] pt-6"
      >
        {new Date().getFullYear()} Ekaveer Errow Mirandilla. All rights reserved.
      </motion.footer>
    </section>
  );
};

