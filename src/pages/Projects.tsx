import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = [
  'All',
  'Full-Stack / SaaS',
  'Machine Learning / Applied CV',
  'AI Product / Hackathon',
  'Data Engineering / Streaming',
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Impactful', value: 'impact' },
]

export default function Projects() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const filtered = projects
    .filter(p => {
      const q = search.toLowerCase()
      const matchSearch =
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      const matchCategory = category === 'All' || p.category === category
      return matchSearch && matchCategory
    })
    .sort((a, b) => {
      if (sort === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      return 0
    })

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
          <p className="text-white/40">
            Full-stack, ML, AI, and data engineering work — all production-minded.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              type="text"
              placeholder="Search by name, tech, or keyword..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-surface border border-white/8 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/40 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                    category === cat
                      ? 'bg-accent/15 border-accent/40 text-accent'
                      : 'border-white/10 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-surface border border-white/8 rounded-xl px-3 py-1.5 text-xs text-white/60 focus:outline-none focus:border-accent/40 transition-colors cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={`${search}-${category}-${sort}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.length > 0 ? (
            filtered.map(project => <ProjectCard key={project.slug} project={project} />)
          ) : (
            <div className="col-span-2 text-center py-24 text-white/25 text-sm">
              No projects match your search.
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
