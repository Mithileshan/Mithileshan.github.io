import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
  homepage: string | null
}

const GITHUB_USER = 'Mithileshan'

// Repos to hide (portfolio site itself)
const EXCLUDED = ['Mithileshan.github.io']

// Map repo names to project slugs for deduplication
const REPO_TO_SLUG: Record<string, string> = {
  'devtracker-x': 'devtracker',
  'Brain_Tumor_using_YOLOV8': 'brain-tumor-yolov8',
  'mana-ai': 'mana-ai',
  'stockpulse-batch-realtime-etl': 'stockpulse-etl',
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return 'today'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=public`)
      .then(r => r.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter(r => !r.fork && !EXCLUDED.includes(r.name))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        setRepos(filtered)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // Repos that already have a detailed case study card
  const featuredSlugs = new Set(Object.values(REPO_TO_SLUG))
  const extraRepos = repos.filter(r => !featuredSlugs.has(REPO_TO_SLUG[r.name] ?? r.name))

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
          <p className="text-white/40">Full-stack, ML, AI, and data engineering work.</p>
        </motion.div>

        {/* Featured — detailed case study cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-6">Featured</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All GitHub repos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold text-accent/70 uppercase tracking-widest">All Repositories</p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white transition-colors ml-auto"
            >
              <Github size={13} /> github.com/{GITHUB_USER}
            </a>
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-surface border border-white/8 rounded-xl p-5 animate-pulse h-36" />
              ))}
            </div>
          )}

          {error && (
            <p className="text-sm text-white/30 py-10 text-center">Could not load GitHub repos. <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View on GitHub →</a></p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraRepos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group bg-surface border border-white/8 hover:border-accent/30 rounded-xl p-5 flex flex-col gap-3 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Github size={14} className="text-white/30 shrink-0" />
                      <span className="text-sm font-semibold text-white truncate group-hover:text-accent transition-colors">
                        {repo.name.replace(/-/g, '-')}
                      </span>
                    </div>
                    <ExternalLink size={13} className="text-white/20 group-hover:text-accent/60 shrink-0 transition-colors mt-0.5" />
                  </div>

                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2 flex-1">
                    {repo.description || 'No description provided.'}
                  </p>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/8 border border-accent/15 text-accent/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/5">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-white/35">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: langColors[repo.language] ?? '#6b7280' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Star size={11} /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <GitFork size={11} /> {repo.forks_count}
                      </span>
                    )}
                    <span className="text-xs text-white/20 ml-auto">{timeAgo(repo.updated_at)}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </main>
  )
}
