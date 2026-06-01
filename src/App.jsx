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
  FiDownload,
} from "react-icons/fi";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = dark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900";

  const card = dark
    ? "bg-slate-900/60 border-slate-800 backdrop-blur-xl"
    : "bg-white border-slate-200";

  const projects = [
    {
      title: "AI Chat Assistant",
      description:
        "Developed an AI-powered mobile assistant using Flutter and Firebase featuring intelligent conversations, authentication, real-time communication, and scalable architecture.",
      tech: "Flutter • Firebase • AI • REST APIs",
    },
    {
      title: "Bookia E-Commerce",
      description:
        "Modern e-commerce application with product browsing, shopping cart functionality, API integration, and responsive user experience.",
      tech: "Flutter • REST API • State Management",
    },
    {
      title: "Programming Learning Platform",
      description:
        "Educational application integrating YouTube tutorials, quizzes, progress tracking, and AI-powered learning assistance.",
      tech: "Flutter • Firebase • YouTube API",
    },
    {
      title: "Inventory Management System",
      description:
        "Inventory tracking solution for managing products, stock levels, reports, and business operations.",
      tech: "Flutter • Firebase",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application with task organization, deadlines, reminders, and local storage persistence.",
      tech: "Flutter • Hive",
    },
  ];

  return (
    <div
      className={`${theme} min-h-screen transition-all duration-300 font-sans`}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl">
            John <span className="text-blue-500">Adel</span>
          </h1>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>

            <a
              href="/John-Adel-CV.pdf"
              target="_blank"
              className="bg-blue-600 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <FiDownload />
              CV
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
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
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 uppercase tracking-widest mb-4">
              Flutter Developer • AI Enthusiast
            </p>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              John Adel
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed max-w-xl">
              Computer Science & Artificial Intelligence student at Benha
              University passionate about building modern mobile applications,
              AI-powered solutions, and scalable software systems using Flutter,
              Firebase, and modern development practices.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-slate-700 px-6 py-3 rounded-xl hover:border-blue-500 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/johnadelm23-beep"
                target="_blank"
                rel="noreferrer"
                className="p-3 border rounded-xl hover:border-blue-500"
              >
                <FiGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/john-adel-498910328"
                target="_blank"
                rel="noreferrer"
                className="p-3 border rounded-xl hover:border-blue-500"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/john.jpeg"
              alt="John Adel"
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "5+", label: "Projects" },
            { number: "2+", label: "Years Learning" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Passion" },
          ].map((item) => (
            <div
              key={item.label}
              className={`${card} border p-6 rounded-2xl text-center`}
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h3>
              <p className="text-slate-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-slate-400 leading-8 text-lg">
          I am a Computer Science and Artificial Intelligence student at Benha
          University with strong interests in Mobile Development, Artificial
          Intelligence, and Software Engineering. I specialize in Flutter,
          Firebase, REST APIs, and Clean Architecture while focusing on
          delivering scalable and maintainable applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Flutter",
            "Dart",
            "Firebase",
            "REST APIs",
            "Clean Architecture",
            "Git",
            "GitHub",
            "Postman",
            "C++",
            "Algorithms",
            "Data Structures",
            "AI Integration",
          ].map((skill) => (
            <div
              key={skill}
              className={`${card} border rounded-xl p-4 text-center hover:scale-105 transition`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${card} border p-6 rounded-2xl hover:-translate-y-2 transition duration-300`}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-slate-400 leading-7">{project.description}</p>

              <p className="text-blue-500 mt-4 text-sm">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className={`${card} border p-8 rounded-2xl space-y-6`}>
          <p className="flex items-center gap-3">
            <FiPhone />
            01226806622
          </p>

          <p className="flex items-center gap-3">
            <FiMail />
            johnadelm23@gmail.com
          </p>

          <p className="flex items-center gap-3">
            <FiGithub />
            github.com/johnadelm23-beep
          </p>

          <p className="flex items-center gap-3">
            <FiLinkedin />
            linkedin.com/in/john-adel-498910328
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 John Adel • Flutter Developer • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
