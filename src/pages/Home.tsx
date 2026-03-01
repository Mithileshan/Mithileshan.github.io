import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight, Shield, Brain, Zap, Award } from 'lucide-react'
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
    desc: 'Dockerized deployments, CI checks, API documentation, and security-first patterns — JWT, RBAC, refresh token rotation.',
  },
  {
    icon: Brain,
    title: 'ML + Engineering Depth',
    desc: 'From model training to real UI demos (Streamlit), reproducible pipelines, and deployable artifacts that non-engineers can use.',
  },
  {
    icon: Zap,
    title: 'Streaming + Data',
    desc: 'Real-time + batch ETL, Kafka/Redpanda pipelines, Postgres analytics, and observable services with health checks.',
  },
]

const skillGroups = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { label: 'Frontend', skills: ['React', 'Tailwind CSS', 'Vite', 'Streamlit'] },
  { label: 'Backend', skills: ['Node.js', 'Express', 'FastAPI', 'Flask'] },
  { label: 'ML / CV', skills: ['YOLOv8', 'PyTorch', 'OpenCV', 'scikit-learn'] },
  { label: 'AI / APIs', skills: ['AssemblyAI', 'Groq', 'Hume AI', 'LLM Integration'] },
  { label: 'Data / Streaming', skills: ['Kafka', 'Redpanda', 'PostgreSQL', 'Supabase'] },
  { label: 'DevOps', skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD'] },
  { label: 'Auth / Security', skills: ['JWT', 'RBAC', 'Refresh Tokens', 'Swagger/OpenAPI'] },
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
              MS CS @ Indiana University
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Mithileshan
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-white/50 font-medium">
              Full-Stack + ML + Data Systems Engineer
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
                href="https://linkedin.com/in/mithileshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:placeholder@email.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Mail size={16} /> Email
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

      {/* Awards strip */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-400/8 to-transparent border border-amber-400/15 rounded-2xl px-8 py-6 flex items-center gap-5"
          >
            <Award size={30} className="text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-amber-400/70 uppercase tracking-widest mb-1">
                Recognition
              </p>
              <p className="text-white font-bold text-lg">Hackathon Runner-Up — Mana.ai</p>
              <p className="text-sm text-white/40 mt-0.5">
                AI meeting assistant with transcription, LLM summarization, emotion analysis, and Trello integration
              </p>
            </div>
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
                href="mailto:placeholder@email.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-light transition-colors"
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href="https://linkedin.com/in/mithileshan"
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
