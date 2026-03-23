import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight, FileText, ExternalLink } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import TechChip from '../components/TechChip'
import WorkTimeline from '../components/WorkTimeline'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// Name reveal — slides up from behind overflow:hidden clip, replays on scroll
const nameContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const nameSlide = {
  hidden: { y: '115%' },
  visible: {
    y: '0%',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

const skillGroups = [
  { label: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C'] },
  { label: 'Backend', skills: ['Spring Boot', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'WebSockets'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
  { label: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
  { label: 'Frontend', skills: ['React.js', 'Redux', 'Angular', 'Tailwind CSS'] },
  { label: 'ML / CV', skills: ['YOLOv5', 'YOLOv8', 'SVM', 'scikit-learn', 'OpenCV'] },
  { label: 'Testing & Tools', skills: ['JUnit', 'Mockito', 'Git', 'Postman', 'Log4j'] },
  { label: 'Architecture', skills: ['Microservices', 'Event-Driven', 'RBAC', 'OAuth 2.0'] },
]

const experience = [
  {
    role: 'Software Engineer',
    company: 'KST Infotech',
    location: 'Chennai, India',
    period: 'Jan 2024 – Aug 2024',
    summary: 'Led backend development for two production microservices within a 6-member Agile team, taking ownership of authentication, data optimization, and deployment infrastructure. This role pushed me to think beyond writing code — toward owning reliability, security, and the team\'s engineering standards.',
    bullets: [
      'Architected two Spring Boot microservices with Docker + Kubernetes, cutting deployment time by 30% and enabling independent scaling.',
      'Implemented OAuth 2.0 + JWT authentication with RBAC, reducing unauthorized access attempts by 40%.',
      'Optimized PostgreSQL queries through indexing and restructuring, improving high-traffic endpoint response times by 30%.',
      'Engineered Python Flask APIs for I/O-intensive operations, increasing system throughput by 25%.',
      'Established testing practices with JUnit, Mockito, and Log4j — bringing team coverage to 95% across all distributed services.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KST Infotech',
    location: 'Chennai, India',
    period: 'Jun 2023 – Jan 2024',
    summary: 'Joined as an intern and quickly became the go-to person for diagnosing hard-to-reproduce production issues. Resolving 30+ incidents through structured logging gave me a foundation for writing software that is observable and maintainable by design.',
    bullets: [
      'Built REST APIs using Spring Boot (MVC) with structured validation and error handling.',
      'Designed normalized PostgreSQL schemas and indexing strategies to sustain performance at scale.',
      'Diagnosed and resolved 30+ production issues using structured logging and systematic debugging.',
      'Grew test coverage from 60% to 90% through comprehensive JUnit test suites.',
      'Refactored legacy modules following clean code principles to reduce technical debt and improve team velocity.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Vectra Technosoft Pvt Ltd',
    location: 'Chennai, India',
    period: 'Mar 2023 – May 2023',
    summary: 'Joined to build internal tools and ended up redesigning two core workflows. Eliminating 75% of manual data effort and compressing a 2-hour deploy process to 15 minutes taught me how automation compounds — small improvements in infrastructure create outsized gains for every future release.',
    bullets: [
      'Built Python data pipelines processing 50K+ records daily, reducing manual effort by 75% and improving accuracy by 25%.',
      'Developed React dashboards integrated with Node.js APIs for real-time KPI visibility, accelerating decisions by 40%.',
      'Implemented CI/CD pipelines with GitHub Actions and Docker, cutting deployment time from 2 hours to 15 minutes.',
      'Built data validation and transformation logic to ensure quality and consistency across multiple client datasets.',
    ],
  },
]

const publications = [
  {
    title: 'Detection of Brain Tumor Using YOLOv5 Algorithm',
    journal: 'IEEE',
    date: 'Mar 2024',
    link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=Detection+of+Brain+Tumor+Using+YOLOv5+Algorithm',
  },
  {
    title: 'Brain Tumor Detector Using SVM Algorithm',
    journal: 'IEEE',
    date: 'Feb 2023',
    link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=Brain+Tumor+Detector+Using+SVM+Algorithm',
  },
]

const featuredProjects = projects.filter(p => p.featured)

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 items-center text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-accent/80 text-sm font-medium tracking-wide"
            >
              <span className="w-8 h-px bg-accent/60" />
              MS CS @ Indiana University Bloomington
            </motion.div>

            {/* Name — clip reveal, replays each time it enters viewport */}
            <motion.div
              variants={nameContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
            >
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.08]">
                {/* Mithileshan — white → cyan gradient */}
                <span className="block" style={{ overflow: 'hidden' }}>
                  <motion.span
                    variants={nameSlide}
                    className="block"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 45%, #06b6d4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Mithileshan
                  </motion.span>
                </span>

                {/* Muralidharan — same gradient treatment, lower opacity */}
                <span className="block" style={{ overflow: 'hidden' }}>
                  <motion.span
                    variants={nameSlide}
                    className="block"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.22) 60%, rgba(6,182,212,0.3) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Muralidharan
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xl text-white/50 font-medium tracking-wide">
              Software Engineer · Full-Stack · ML · Data Systems
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base text-white/40 max-w-2xl leading-relaxed"
            >
              I build full-stack systems, ML applications, and data pipelines — with a focus on
              performance, reliability, and measurable impact.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-light transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/80 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 flex-wrap mt-1 justify-center">
              <a
                href="https://github.com/Mithileshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/mithileshan-muralidharan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:mithilays2402@gmail.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Mail size={16} /> mithilays2402@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-white/40">
              Production-minded work across full-stack, ML, and data engineering.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredProjects.map(project => (
              <motion.div key={project.slug} variants={fadeUp} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
            <p className="text-white/40">Industry experience shipping production software.</p>
          </motion.div>

          <WorkTimeline jobs={experience} />
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
            <p className="text-white/40">Tools and technologies across the full engineering stack.</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {skillGroups.map(({ label, skills }) => (
              <motion.div key={label} variants={fadeUp}>
                <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-3">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map(s => (
                    <TechChip key={s} label={s} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Publications</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {publications.map(pub => (
              <motion.div key={pub.title} variants={fadeUp}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface border border-white/8 hover:border-accent/30 rounded-xl px-6 py-4 flex items-center gap-4 transition-colors duration-200"
                >
                  <FileText size={18} className="text-accent/60 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm leading-snug group-hover:text-accent transition-colors">{pub.title}</p>
                    <p className="text-xs text-white/35 mt-0.5">
                      {pub.journal} · {pub.date}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-accent/60 shrink-0 transition-colors" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-white/40 mb-10 max-w-md mx-auto">
              Open to full-time roles, internships, and interesting projects. Let's connect.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:mithilays2402@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-light transition-colors"
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href="https://linkedin.com/in/mithileshan-muralidharan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/80 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/Mithileshan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/80 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
