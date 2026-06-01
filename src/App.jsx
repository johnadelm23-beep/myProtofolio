import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = dark ? "bg-slate-950 text-white" : "bg-white text-slate-900";

  const card = dark
    ? "bg-slate-900 border-slate-800"
    : "bg-white border-slate-200";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${theme} transition duration-300`}>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-lg border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">John Adel</h1>

          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-blue-600"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-500 font-semibold mb-3">
              Computer Science student • Flutter Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">John Adel</h1>

            <p className="text-gray-400 mb-6">
              Building scalable mobile apps and AI-powered systems with modern
              engineering practices.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-600 px-5 py-3 rounded-xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact Me"
                className="border px-5 py-3 rounded-xl hover:scale-105 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/john.jpeg"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500"
              alt="John"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          Computer Science & AI student at Benha University. Passionate about
          building production-level Flutter apps, AI systems, and clean scalable
          architectures.
        </p>
      </motion.section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Flutter",
            "Dart",
            "Firebase",
            "REST API",
            "Git",
            "Postman",
            "C++",
            "Data Structure",
            "Algorithms",
          ].map((skill, i) => (
            <motion.div
              key={skill}
              className={`${card} border p-4 rounded-xl text-center hover:scale-105 transition`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "AI Chat App",
            "Programming Courses Platform",
            "Inventory Management System",
            "Task Management App",
          ].map((project, i) => (
            <motion.div
              key={project}
              className={`${card} border p-6 rounded-2xl hover:scale-105 transition`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{project}</h3>
              <p className="text-gray-400 text-sm">
                Built using Flutter, Firebase, Clean Architecture, and scalable
                state management.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="space-y-4">
          <p className="flex items-center gap-2">
            <FiPhone /> 01226806622
          </p>

          <p className="flex items-center gap-2">
            <FiMail /> johnadelm23@gmail.com
          </p>

          {/* FIXED GITHUB */}
          <button
            onClick={() =>
              window.open("https://github.com/johnadelm23-beep", "_blank")
            }
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FiGithub /> GitHub
          </button>

          {/* FIXED LINKEDIN */}
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/john-adel-498910328",
                "_blank",
              )
            }
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FiLinkedin /> LinkedIn
          </button>
        </div>
      </motion.section>
    </div>
  );
}
