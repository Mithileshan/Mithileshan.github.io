import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { repos } from '../data/repos'

const GITHUB_USER = 'Mithileshan'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// VeriDoc + Multi-Agent only in the Featured section
const featuredProjects = projects.slice(0, 2)
// Everything else: StockPulse, Mana.ai, Brain Tumor, DevTracker, Tinker + all repos
const allOtherProjects = [...projects.slice(2), ...repos]

export default function Projects() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
          <p className="text-white/40">Backend systems, AI pipelines, and data engineering work.</p>
        </motion.div>

        {/* Featured — VeriDoc + Multi-Agent */}
        <div className="mb-20">
          <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-6">
            Featured
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredProjects.map(project => (
              <motion.div key={project.slug} variants={fadeUp} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* All other projects + repos */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest">
              All Repositories
            </p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white transition-colors ml-auto"
            >
              <Github size={13} /> github.com/{GITHUB_USER}
            </a>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {allOtherProjects.map(repo => (
              <motion.div key={repo.slug} variants={fadeUp} className="h-full">
                <ProjectCard project={repo} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </main>
  )
}
