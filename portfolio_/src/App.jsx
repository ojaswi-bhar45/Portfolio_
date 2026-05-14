import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaReact, FaDocker, FaAws, FaNodeJs, FaJava, FaGitAlt, FaLinux, FaTools } from "react-icons/fa";
import { SiLeetcode, SiKubernetes, SiJavascript, SiTailwindcss, SiMongodb, SiJenkins } from "react-icons/si";
import profileImage from "./assets/profile.jpg";
import aboutImage from "./assets/photo2.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Hire Me", href: "/resume.pdf" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ojaswi-bhar45", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ojaswi-bhardwaj/",
    icon: FaLinkedin,
  },
  { label: "LeetCode", href: "https://leetcode.com/progress/", icon: SiLeetcode },
  { label: "Email", href: "mailto:bhardwajojaswi445@gmail.com", icon: FaEnvelope },
];

const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "Java", icon: FaJava, color: "text-orange-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: FaAws,
    skills: [
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
      { name: "Jenkins", icon: SiJenkins, color: "text-red-400" },
      { name: "CI/CD", icon: null, color: "text-text-primary" },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub Actions", icon: FaGithub, color: "text-white" },
      { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
    ],
  },
];

const specializations = [
  { label: "Full Stack Development", icon: FaReact, desc: "End-to-end web applications" },
  { label: "DevOps & Cloud Infrastructure", icon: FaAws, desc: "Scalable & automated deployments" },
  { label: "CI/CD Automation", icon: FaDocker, desc: "Streamlined delivery pipelines" },
  { label: "Modern UI Engineering", icon: FaNodeJs, desc: "Polished, responsive interfaces" },
];

const timeline = [
  { stage: "Started Web Development", subtitle: "Building foundational skills", icon: FaReact },
  { stage: "Built MERN Applications", subtitle: "Full-stack project development", icon: FaNodeJs },
  { stage: "Learned Docker & AWS", subtitle: "Cloud & containerization", icon: FaDocker },
  { stage: "Exploring Kubernetes & Cloud", subtitle: "Current focus area", icon: SiKubernetes },
];

const aboutStats = [
  { value: "5+", label: "Projects Built" },
  { value: "Cloud", label: "DevOps Focus" },
  { value: "Scalable", label: "Production Apps" },
  { value: "Modern", label: "Full Stack Solutions" },
];

const projects = [
  {
    title: "WanderLust",
    description: "Full-stack booking hotels solution with modern UI",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Movie Search Web App",
    description:
      "Search a movie by name and get details like release date, rating, and more",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Multi-Vendor E-commerce backend management system",
    description:
      "Backend management system for a multi-vendor e-commerce platform, built with Node.js and MongoDB, featuring robust APIs for product management, order processing, and user authentication.",
    tech: ["Node.js", "MongoDB", "Express"],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card-bg/80 backdrop-blur-lg border-b border-primary/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              OB
            </motion.h1>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                  whileHover={{ scale: 1.05 }}
                  className="text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl"
              >
                Let's Connect
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
          {/* Gradient Orbs */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Right Column - Image + Badges + Terminal */}
              <div className="md:order-2 space-y-6">
                {/* Glassmorphism Image Card */}
                <div className="relative mx-auto w-fit p-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 0.8 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="relative w-64 h-64 lg:w-80 lg:h-80"
                  >
                    {/* Main animated shadow */}
                    <motion.div
                      animate={{ x: [-24, 24, -24], rotate: [-6, 6, -6], scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.2, opacity: 0.5 }}
                      className="absolute -inset-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl"
                    />
                    {/* Depth shadow */}
                    <motion.div
                      animate={{ x: [18, -18, 18], rotate: [5, -5, 5], scale: [1, 1.05, 1], opacity: [0.12, 0.25, 0.12] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.15, opacity: 0.35 }}
                      className="absolute -inset-3 bg-gradient-to-l from-accent via-secondary to-primary rounded-2xl blur-xl"
                    />
                    <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1.5 shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/40">
                      <img
                        src={profileImage}
                        alt="Ojaswi Bhardwaj"
                        className="w-full h-full object-cover rounded-2xl border-2 border-primary/30"
                      />
                    </div>
                  </motion.div>

                  {/* Floating Tech Badges */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    transition={{ opacity: { delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 } }}
                    className="absolute -top-3 -left-8 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-bg/90 backdrop-blur-sm border border-primary/30 text-xs font-medium text-text-primary shadow-lg"
                  >
                    <FaReact className="text-cyan-400" /> React
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 6, 0] }}
                    transition={{ opacity: { delay: 0.6 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    className="absolute -top-3 -right-8 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-bg/90 backdrop-blur-sm border border-secondary/30 text-xs font-medium text-text-primary shadow-lg"
                  >
                    <FaDocker className="text-blue-400" /> Docker
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }}
                    transition={{ opacity: { delay: 0.7 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
                    className="absolute top-1/2 -right-10 -translate-y-1/2 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-bg/90 backdrop-blur-sm border border-accent/30 text-xs font-medium text-text-primary shadow-lg"
                  >
                    <FaAws className="text-orange-400" /> AWS
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 5, 0] }}
                    transition={{ opacity: { delay: 0.8 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
                    className="absolute top-1/2 -left-10 -translate-y-1/2 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-bg/90 backdrop-blur-sm border border-primary/30 text-xs font-medium text-text-primary shadow-lg"
                  >
                    <SiKubernetes className="text-blue-500" /> K8s
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -4, 0] }}
                    transition={{ opacity: { delay: 0.9 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-bg/90 backdrop-blur-sm border border-secondary/30 text-xs font-medium text-text-primary shadow-lg"
                  >
                    <FaNodeJs className="text-green-400" /> Node.js
                  </motion.span>
                </div>

                {/* Terminal Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ opacity: { delay: 0.7 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                  className="w-[280px] mx-auto rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 shadow-xl"
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-white/30 font-mono ml-2 tracking-wide">bash — terminal</span>
                  </div>
                  <div className="space-y-1 font-mono text-[11px] leading-relaxed">
                    <p>
                      <span className="text-green-400">$</span>{" "}
                      <span className="text-white/70">docker compose up -d</span>
                    </p>
                    <p className="text-green-400 ml-3">✔ deployment successful (3.2s)</p>
                    <p className="mt-2">
                      <span className="text-green-400">$</span>{" "}
                      <span className="text-white/70">kubectl get pods</span>
                    </p>
                    <p className="text-green-400 ml-3">✔ all systems running</p>
                  </div>
                </motion.div>
              </div>

              {/* Text Content - Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:order-1"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Full Stack & DevOps Engineer
                </motion.div>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-4"
                >
                  Ojaswi
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Bhardwaj
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-white/60 max-w-xl leading-relaxed mb-10"
                >
                  Building scalable web applications, cloud-native systems, and modern digital experiences.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <FaDownload /> Download Resume
                  </motion.a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-white/30 mr-2">Find me</span>
                  <div className="h-px w-8 bg-white/10 mr-4" />
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                      whileHover={{ y: -3, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:border-transparent transition-all duration-300"
                      title={link.label}
                    >
                      <link.icon className="text-base" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-dark-bg to-card-bg/30" id="about">
          {/* Background orbs */}
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
          />

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-text-primary mb-4">About Me</h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* ──── LEFT COLUMN ──── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="relative mx-auto w-fit">
                  {/* Animated gradient border */}
                  <div className="relative p-[3px] rounded-2xl overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                      style={{ transformOrigin: "center center" }}
                    />
                    <div className="relative w-56 h-56 rounded-2xl overflow-hidden bg-card-bg p-5 flex items-center">
                      <div className="font-mono text-xs leading-relaxed w-full">
                        <p><span className="text-purple-400">{'{'}</span></p>
                        <p className="ml-3"><span className="text-purple-400">"name"</span>: <span className="text-cyan-300">"Ojaswi Bhardwaj"</span>,</p>
                        <p className="ml-3"><span className="text-purple-400">"role"</span>: <span className="text-cyan-300">"Full Stack & DevOps"</span>,</p>
                        <p className="ml-3"><span className="text-purple-400">"stack"</span>: [</p>
                        <p className="ml-6"><span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Node.js"</span>,</p>
                        <p className="ml-6"><span className="text-cyan-300">"Docker"</span>, <span className="text-cyan-300">"AWS"</span></p>
                        <p className="ml-5">],</p>
                        <p className="ml-3"><span className="text-purple-400">"status"</span>: <span className="text-green-400">"available"</span></p>
                        <p><span className="text-purple-400">{'}'}</span><motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block w-[5px] h-3.5 bg-cyan-400 ml-0.5 align-middle" /></p>
                      </div>
                    </div>
                  </div>

                  {/* Soft glow behind */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />

                  {/* Floating Tech Badges */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    transition={{ opacity: { delay: 0.4 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -top-3 left-4 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card-bg/90 backdrop-blur-sm border border-primary/30 text-[11px] font-medium text-text-primary shadow-lg"
                  >
                    <FaReact className="text-cyan-400 text-xs" /> React
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 6, 0] }}
                    transition={{ opacity: { delay: 0.5 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                    className="absolute -top-3 right-4 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card-bg/90 backdrop-blur-sm border border-secondary/30 text-[11px] font-medium text-text-primary shadow-lg"
                  >
                    <FaDocker className="text-blue-400 text-xs" /> Docker
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }}
                    transition={{ opacity: { delay: 0.6 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
                    className="absolute bottom-16 -left-8 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card-bg/90 backdrop-blur-sm border border-accent/30 text-[11px] font-medium text-text-primary shadow-lg"
                  >
                    <FaAws className="text-orange-400 text-xs" /> AWS
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 5, 0] }}
                    transition={{ opacity: { delay: 0.7 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
                    className="absolute bottom-16 -right-8 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card-bg/90 backdrop-blur-sm border border-primary/30 text-[11px] font-medium text-text-primary shadow-lg"
                  >
                    <SiKubernetes className="text-blue-500 text-xs" /> K8s
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -4, 0] }}
                    transition={{ opacity: { delay: 0.8 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card-bg/90 backdrop-blur-sm border border-secondary/30 text-[11px] font-medium text-text-primary shadow-lg"
                  >
                    <FaNodeJs className="text-green-400 text-xs" /> Node.js
                  </motion.span>
                </div>

                {/* Name + Role */}
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-text-primary">Ojaswi Bhardwaj</h3>
                  <p className="text-text-secondary mt-1">Full Stack & DevOps Engineer</p>
                  <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                  </div>
                </div>
              </motion.div>

              {/* ──── RIGHT COLUMN ──── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-3 space-y-10"
              >
                {/* Intro */}
                <p className="text-lg text-white/70 leading-relaxed">
                  I build scalable web applications and cloud-native systems focused on performance, automation, and developer experience.
                </p>

                {/* Specializations */}
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-5 uppercase tracking-[0.15em]">
                    Specializations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specializations.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                          <spec.icon className="text-sm" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">{spec.label}</p>
                          <p className="text-xs text-text-secondary mt-0.5">{spec.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                  className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-5 shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-white/30 font-mono ml-2 tracking-wide">bash — about</span>
                  </div>
                  {/* Commands */}
                  <div className="font-mono text-xs space-y-2">
                    <p><span className="text-green-400">$</span> <span className="text-white/70">whoami</span></p>
                    <p className="text-white/90 ml-4">Full Stack & DevOps Engineer</p>
                    <p className="mt-3"><span className="text-green-400">$</span> <span className="text-white/70">current_focus</span></p>
                    <p className="text-white/90 ml-4">Building scalable cloud-native apps</p>
                    <p className="mt-3"><span className="text-green-400">$</span> <span className="text-white/70">tech_stack</span></p>
                    <p className="text-white/90 ml-4">React • Node.js • Docker • AWS</p>
                  </div>
                </motion.div>

                {/* Timeline */}
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-6 uppercase tracking-[0.15em]">
                    Journey
                  </h3>
                  <div className="space-y-0">
                    {timeline.map((item, i) => (
                      <div className="flex gap-4" key={item.stage}>
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs shadow-lg shadow-primary/20">
                            <item.icon />
                          </div>
                          {i < timeline.length - 1 && (
                            <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
                          )}
                        </div>
                        <div className={i < timeline.length - 1 ? "pb-8" : ""}>
                          <p className="text-sm font-semibold text-text-primary">{item.stage}</p>
                          <p className="text-xs text-text-secondary mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {aboutStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-card-bg/80 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <p className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative py-32 overflow-hidden bg-card-bg/50" id="skills">
          {/* Background orbs */}
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]"
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-text-primary mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Technologies I leverage to build scalable and exceptional digital experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-3xl p-8 bg-card-bg/80 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                      <category.icon />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                      >
                        {skill.icon ? (
                          <skill.icon className={`text-lg ${skill.color}`} />
                        ) : (
                          <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-[10px] text-white font-bold">~</span>
                          </div>
                        )}
                        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 bg-gradient-to-b from-card-bg/30 to-dark-bg" id="projects">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-text-primary mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Showcasing my recent work and technical expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="bg-card-bg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary/20 hover:border-accent/40 group"
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 bg-gradient-to-r from-primary via-secondary to-accent"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-primary"
            >
              <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
              <p className="text-xl mb-12 text-text-primary/80">
                Ready to bring your ideas to life? Let's collaborate on
                something amazing.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Email & Contact</h3>
                  <a
                    href="mailto:bhardwajojaswi445@gmail.com"
                    className="text-text-primary/90 hover:text-white text-lg font-medium transition-colors"
                  >
                    Mail: bhardwajojaswi445@gmail.com Contact: +918979859781
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Social</h3>
                  <p className="text-text-primary/90 text-lg">
                    Find me on LinkedIn and GitHub for updates and
                    collaborations
                  </p>
                </motion.div>
              </div>
              <motion.a
                href="mailto:bhardwajojaswi445@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Start a Conversation
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
