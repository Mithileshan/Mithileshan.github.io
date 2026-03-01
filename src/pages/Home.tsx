import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight, Shield, Brain, Zap, Award, FileText } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import TechChip from '../components/TechChip'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const proofPoints = [
  {
    icon: Shield,
    title: 'Production Mindset',
    desc: 'Dockerized deployments, CI/CD pipelines, OAuth 2.0 + JWT auth, and 95% test coverage across distributed services at scale.',
  },
  {
    icon: Brain,
    title: 'ML + Engineering Depth',
    desc: 'From model training to real UI demos, reproducible pipelines, and two IEEE-published papers on computer vision and ML.',
  },
  {
    icon: Zap,
    title: 'Streaming + Data',
    desc: 'Real-time + batch ETL, Kafka/Redpanda pipelines, Redis caching, and observable microservices with measurable performance gains.',
  },
]

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
    bullets: [
      'Architected and deployed two Spring Boot microservices, reducing deployment time by 30% via Docker and Kubernetes with inter-service communication using REST APIs and async event-driven patterns.',
      'Implemented OAuth 2.0 and JWT-based authentication with RBAC, reducing unauthorized access attempts by 40%.',
      'Optimized PostgreSQL queries through indexing and query restructuring, reducing high-traffic endpoint response times by 30%.',
      'Achieved 95% test coverage across distributed services using JUnit, Mockito, and Log4j in a 6-member Agile team.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KST Infotech',
    location: 'Chennai, India',
    period: 'Jun 2023 – Jan 2024',
    bullets: [
      'Built backend services with Spring Boot (MVC) and REST APIs with structured validation and error handling.',
      'Designed normalized PostgreSQL schemas and indexing strategies to maintain performance at scale.',
      'Diagnosed and resolved 30+ production issues using structured logging; increased test coverage from 60% to 90%.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Vectra Technosoft Pvt Ltd',
    location: 'Chennai, India',
    period: 'Mar 2023 – May 2023',
    bullets: [
      'Engineered automated Python data pipelines processing 50K+ records daily, reducing manual effort by 75%.',
      'Built React dashboards integrated with Node.js APIs providing real-time KPI visibility, accelerating decisions by 40%.',
      'Implemented CI/CD pipelines with GitHub Actions and Docker, cutting deployment time from 2 hours to 15 minutes.',
    ],
  },
]

const awards = [
  {
    place: '2nd Place',
    event: 'Luddy Hackathon 4th Edition',
    org: 'IU Bloomington',
    date: 'Jan 2025',
    project: 'Mana.ai — AI meeting assistant',
  },
  {
    place: '2nd Place',
    event: 'Luddy Hackathon 3rd Edition',
    org: 'IU Bloomington',
    date: 'Nov 2024',
    project: 'Runner-up at consecutive IU hackathons',
  },
]

const publications = [
  {
    title: 'Detection of Brain Tumor Using YOLOv5 Algorithm',
    journal: 'IEEE',
    date: 'Mar 2024',
  },
  {
    title: 'Brain Tumor Detector Using SVM Algorithm',
    journal: 'IEEE',
    date: 'Feb 2023',
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
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-accent/80 text-sm font-medium tracking-wide w-fit"
            >
              <span className="w-8 h-px bg-accent/60" />
              MS CS @ Indiana University Bloomington
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Mithileshan
              <br />
              <span className="text-white/30">Muralidharan</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-white/50 font-medium">
              Software Engineer · Full-Stack · ML · Data Systems
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base text-white/40 max-w-2xl leading-relaxed"
            >
              I build production-grade full-stack systems, ML applications, and streaming data
              pipelines — focused on performance, reliability, and measurable impact.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
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

            <motion.div variants={fadeUp} className="flex items-center gap-6 flex-wrap mt-1">
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

      {/* Proof Points */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {proofPoints.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-surface border border-white/8 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
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
              <motion.div key={project.slug} variants={fadeUp}>
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-6"
          >
            {experience.map(job => (
              <motion.div
                key={`${job.role}-${job.period}`}
                variants={fadeUp}
                className="bg-surface border border-white/8 rounded-2xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-white text-lg">{job.role}</h3>
                    <p className="text-accent/80 font-medium text-sm">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-white/35 bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    {job.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0 font-bold">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
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

      {/* Awards */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Awards</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {awards.map(award => (
              <motion.div
                key={award.event}
                variants={fadeUp}
                className="flex-1 bg-gradient-to-br from-amber-400/8 to-transparent border border-amber-400/15 rounded-2xl px-6 py-5 flex items-start gap-4"
              >
                <Award size={24} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-400/70 uppercase tracking-widest mb-1">
                    {award.place}
                  </p>
                  <p className="text-white font-bold">{award.event}</p>
                  <p className="text-sm text-white/40 mt-0.5">
                    {award.org} · {award.date}
                  </p>
                  <p className="text-xs text-white/30 mt-1">{award.project}</p>
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
              <motion.div
                key={pub.title}
                variants={fadeUp}
                className="bg-surface border border-white/8 rounded-xl px-6 py-4 flex items-center gap-4"
              >
                <FileText size={18} className="text-accent/60 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-snug">{pub.title}</p>
                  <p className="text-xs text-white/35 mt-0.5">
                    {pub.journal} · {pub.date}
                  </p>
                </div>
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
