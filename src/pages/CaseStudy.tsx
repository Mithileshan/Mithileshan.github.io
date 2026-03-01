import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import TechChip from '../components/TechChip'
import { projects } from '../data/projects'

const sectionIds = [
  'problem',
  'solution',
  'architecture',
  'decisions',
  'impact',
  'challenges',
  'next',
] as const

type SectionId = (typeof sectionIds)[number]

const sectionLabels: Record<SectionId, string> = {
  problem: 'Problem',
  solution: 'Solution',
  architecture: 'Architecture',
  decisions: 'Engineering Decisions',
  impact: 'Results & Impact',
  challenges: 'Challenges',
  next: "What's Next",
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [activeSection, setActiveSection] = useState<SectionId>('problem')
  const sectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) return
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = sectionRefs.current[id]
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-15% 0px -75% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [project])

  if (!project) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Project not found.</p>
          <Link to="/projects" className="text-accent hover:text-accent-light transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  const { caseStudy } = project

  return (
    <main className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-accent/70 uppercase tracking-wide">
                {project.category}
              </span>
              {project.award && (
                <span className="text-xs font-medium text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                  🏆 {project.award}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{project.tagline}</p>

            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map(t => (
                <TechChip key={t} label={t} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-1">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 text-white/70 text-sm font-medium rounded-lg hover:border-white/30 hover:text-white transition-colors"
                >
                  <Github size={14} /> View on GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/25 text-accent text-sm font-medium rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex gap-14">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-44 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-4">
              Sections
            </p>
            <nav className="flex flex-col gap-0.5">
              {sectionIds.map(id => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm py-1.5 px-3 rounded-lg transition-colors ${
                    activeSection === id
                      ? 'text-accent bg-accent/10'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {sectionLabels[id]}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-16 min-w-0">
          {/* My Role — only for team projects */}
          {project.role && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-accent/5 border border-accent/20 rounded-2xl p-6"
            >
              <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-2">
                My Role
              </p>
              <p className="text-white/70 leading-relaxed">{project.role}</p>
            </motion.div>
          )}

          <CaseSection
            id="problem"
            title="Problem"
            items={caseStudy.problem}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="solution"
            title="Solution"
            items={caseStudy.solution}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="architecture"
            title="Architecture"
            items={caseStudy.architecture}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="decisions"
            title="Engineering Decisions"
            items={caseStudy.decisions}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="impact"
            title="Results & Impact"
            items={caseStudy.impact}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="challenges"
            title="Challenges"
            items={caseStudy.challenges}
            sectionRefs={sectionRefs}
          />
          <CaseSection
            id="next"
            title="What's Next"
            items={caseStudy.nextSteps}
            sectionRefs={sectionRefs}
          />

          {/* Screenshot placeholders */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="aspect-video bg-surface border border-white/8 rounded-xl flex items-center justify-center text-white/20 text-sm"
                >
                  Screenshot {i} — coming soon
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="pt-8 border-t border-white/5">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function CaseSection({
  id,
  title,
  items,
  sectionRefs,
}: {
  id: SectionId
  title: string
  items: string[]
  sectionRefs: React.MutableRefObject<Partial<Record<SectionId, HTMLElement | null>>>
}) {
  return (
    <div
      id={id}
      ref={el => {
        sectionRefs.current[id] = el
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <ul className="flex flex-col gap-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/60 leading-relaxed">
              <span className="text-accent mt-1 shrink-0 font-bold">›</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
