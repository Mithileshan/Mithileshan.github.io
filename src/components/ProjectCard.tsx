import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import TechChip from './TechChip'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-surface border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/25 transition-colors duration-300"
    >
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="text-xs font-semibold text-accent/70 uppercase tracking-wide">
            {project.category}
          </span>
          {project.award && (
            <span className="text-xs font-medium text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
              🏆 {project.award}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
        <p className="text-sm text-white/45 mt-1 leading-relaxed">{project.tagline}</p>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/55 leading-relaxed">
            <span className="text-accent mt-0.5 shrink-0 font-bold">›</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <TechChip key={t} label={t} />
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/5">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
          >
            <ExternalLink size={13} /> Demo
          </a>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-light transition-colors ml-auto"
        >
          Case Study <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  )
}
