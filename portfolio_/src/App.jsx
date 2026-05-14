import { motion } from 'framer-motion';
import profileImage from './assets/profile.jpg';

const navLinks = [
  { label: 'GitHub', href: 'https://github.com/ojaswi-bhar45' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ojaswi-bhardwaj/' },
  { label: 'LeetCode', href: 'https://leetcode.com/progress/' },
  { label: 'Contact', href: '#contact' },
];

const heroCards = [
  { label: 'GitHub', href: 'https://github.com/ojaswi-bhar45', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ojaswi-bhardwaj/', icon: '💼' },
  { label: 'LeetCode', href: 'https://leetcode.com/progress/', icon: '💻' },
  { label: 'Contact', href: '#contact', icon: '✉️' },
];

const skills = [
  'React', 'JavaScript', 'MongoDB', 'Node.js', 'Python', 'Tailwind CSS', 'Java', 'Git', 'Docker', 'AWS'
];

const projects = [
  {
    title: 'WanderLust',
    description: 'Full-stack booking hotels solution with modern UI',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Movie Search Web App',
    description: 'Search a movie by name and get details like release date, rating, and more',
    tech: ['React', 'Tailwind']
  },
  {
    title: 'Multi-Vendor E-commerce backend management system',
    description: 'Backend management system for a multi-vendor e-commerce platform, built with Node.js and MongoDB, featuring robust APIs for product management, order processing, and user authentication.',
    tech: ['Node.js', 'MongoDB', 'Express']
  }
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
                  target={link.href.startsWith('#') ? undefined : '_blank'}
                  rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Right Column - Image + Card */}
              <div className="md:order-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02 }}
                className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-25"></div>
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1.5 shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/40">
                  <img
                    src={profileImage}
                    alt="Ojaswi Bhardwaj"
                    className="w-full h-full object-cover rounded-2xl border-2 border-primary/30"
                  />
                </div>
              </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="w-[260px] mx-auto rounded-[32px] bg-card-bg/95 backdrop-blur-xl border border-white/10 p-6 shadow-xl shadow-black/25"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-primary to-accent text-white grid place-items-center text-lg shadow-lg shadow-primary/20">
                      ✨
                    </div>
                    <span className="text-sm uppercase tracking-[0.3em] text-text-secondary">Featured</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Building efficient and scalable web experiences.</h3>
                  <p className="text-sm text-white/70">Designing interfaces with polish, performance and strong attention to detail.</p>
                </motion.div>
              </div>

              {/* Text Content - Left Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 text-center md:text-left md:order-1"
              >
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-bold text-base uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  >
                    Full Stack Developer & Backend Developer
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight"
                  >
                    Ojaswi
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      Bhardwaj
                    </span>
                    {/* <span className="text-3xl block text-primary/70 font-semibold mt-3">Developer</span> */}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl text-white/70 max-w-2xl leading-relaxed"
                  >
                    Crafting innovative digital solutions with modern technologies and creative design thinking.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 gap-4 mt-10"
                >
                  {heroCards.map((card, index) => (
                    <motion.a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith('#') ? undefined : '_blank'}
                      rel={card.href.startsWith('#') ? undefined : 'noreferrer'}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex items-center gap-4 rounded-3xl bg-white/10 border border-white/10 p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:bg-white/10 hover:border-accent/40"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-xl">
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">{card.label}</p>
                        <p className="mt-1 text-sm text-white/70">Explore</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 bg-card-bg/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-text-primary mb-6">Skills & Technologies</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Technologies I leverage to build exceptional digital experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-r from-primary/20 to-secondary/20 text-text-primary px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/30 hover:border-accent/50"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 bg-gradient-to-b from-card-bg/30 to-dark-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-text-primary mb-6">Featured Projects</h2>
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
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">{project.description}</p>
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
        <section id="contact" className="py-32 bg-gradient-to-r from-primary via-secondary to-accent">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-primary"
            >
              <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
              <p className="text-xl mb-12 text-text-primary/80">
                Ready to bring your ideas to life? Let's collaborate on something amazing.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Email</h3>
                  <a
                    href="mailto:bhardwajojaswi445@gmail.com"
                    className="text-text-primary/90 hover:text-white text-lg font-medium transition-colors"
                  >
                    bhardwajojaswi445@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Social</h3>
                  <p className="text-text-primary/90 text-lg">
                    Find me on LinkedIn and GitHub for updates and collaborations
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
