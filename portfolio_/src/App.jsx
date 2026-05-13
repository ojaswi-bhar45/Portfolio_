import { motion } from 'framer-motion';
import profileImage from './assets/profile.jpg';

const actionLinks = [
  { label: 'GitHub', href: 'https://github.com/ojaswi-bhar45' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ojaswi-bhardwaj/' },
  { label: 'Contact', href: '#contact' },
  { label: 'LeetCode', href: 'https://leetcode.com/progress/' },
];

const skills = [
  'React', 'JavaScript', 'MongoDB', 'Node.js', 'Python', 'Tailwind CSS', 'Java',  'Git', 'Docker', 'AWS'
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
    <div className="min-h-screen bg-dark-royal-blue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-royal-blue/90 backdrop-blur-md border-b border-gold/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-gold to-royal-blue bg-clip-text text-transparent"
            >
              Ojaswi Bhardwaj
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {actionLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('#') ? undefined : '_blank'}
                  rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-gold transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 via-dark-royal-blue/30 to-gold/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold font-semibold text-lg uppercase tracking-wide"
                  >
                    Full Stack Developer
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                  >
                    Crafting Digital
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-royal-blue">
                      Experiences
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-300 max-w-lg leading-relaxed"
                  >
                    I create beautiful, functional web applications with modern technologies and thoughtful design.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {actionLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('#') ? undefined : '_blank'}
                      rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-dark-royal-blue border-2 border-gold hover:border-gold text-gray-300 hover:text-gold px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold to-royal-blue rounded-3xl blur-lg opacity-30"></div>
                    <div className="relative bg-dark-royal-blue rounded-3xl p-2 shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Ojaswi Bhardwaj"
                      className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-white">Ojaswi Bhardwaj</h3>
                  <p className="text-gold mt-1">Passionate Developer & Problem Solver</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-dark-royal-blue">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Technologies I work with to bring ideas to life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-gold to-royal-blue text-dark-royal-blue px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-royal-blue/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Some of my recent work and contributions
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
                  whileHover={{ y: -5 }}
                  className="bg-dark-royal-blue rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium border border-gold/30"
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
        <section id="contact" className="py-20 bg-gradient-to-r from-gold to-royal-blue">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl mb-8 text-dark-royal-blue">
                I'm always interested in new opportunities and exciting projects.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-royal-blue/20 backdrop-blur-sm rounded-2xl p-8 border border-gold/30"
                >
                  <h3 className="text-2xl font-bold mb-4">Email</h3>
                  <a
                    href="mailto:bhardwajojaswi445@gmail.com"
                    className="text-royal-blue hover:text-dark-royal-blue text-lg font-medium transition-colors"
                  >
                    bhardwajojaswi445@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-royal-blue/20 backdrop-blur-sm rounded-2xl p-8 border border-gold/30"
                >
                  <h3 className="text-2xl font-bold mb-4">Connect</h3>
                  <p className="text-royal-blue text-lg">
                    Find me on LinkedIn and GitHub for more updates
                  </p>
                </motion.div>
              </div>
              <motion.a
                href="mailto:bhardwajojaswi445@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-dark-royal-blue text-gold px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gold"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
