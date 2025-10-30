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
          toast.success("✅ Message Sent Successfully!");
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
          toast.error("❌ Something went wrong. Please try again.");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20   text-white"
    >
      <div className="w-full max-w-3xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-blue-400"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 bg-[#101010] p-8 rounded-2xl border border-white/10 shadow-lg"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 peer"
              required
            />
            <label className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 peer"
              required
            />
            <label className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 peer resize-none"
              required
            ></textarea>
            <label className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-400">
              Your Message
            </label>
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 mb-4">or reach me through</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:ekaveer12@gmail.com"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              📧 Email
            </a>
            <a
              href="https://www.linkedin.com/in/ekaveererrow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/ekaveererrow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              💻 GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};