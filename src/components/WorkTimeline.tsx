import { motion } from 'framer-motion'

interface Job {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export default function WorkTimeline({ jobs }: { jobs: Job[] }) {
  return (
    <div className="relative">
      {/* Static background line */}
      <div className="absolute left-[11px] top-5 bottom-10 w-0.5 bg-white/5 rounded-full" />

      {/* Animated line — draws from top as section scrolls in */}
      <motion.div
        className="absolute left-[11px] top-5 w-0.5 rounded-full bg-gradient-to-b from-accent/60 via-accent/20 to-transparent"
        style={{ transformOrigin: 'top', bottom: '2.5rem' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-60px' }}
      />

      <div className="flex flex-col gap-8">
        {jobs.map((job, i) => (
          <div key={i} className="relative pl-11">
            {/* Node */}
            <div className="absolute left-1 top-5">
              {/* Pulse ring — only on most recent role */}
              {i === 0 && (
                <motion.div
                  className="absolute inset-[-4px] rounded-full border border-accent/50"
                  animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <motion.div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  i === 0
                    ? 'border-accent bg-accent/20'
                    : 'border-white/20 bg-bg'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === 0 ? 'bg-accent' : 'bg-white/25'
                  }`}
                />
              </motion.div>
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-40px' }}
              className={`bg-surface rounded-2xl p-6 border transition-colors duration-300 ${
                i === 0
                  ? 'border-accent/20 hover:border-accent/35'
                  : 'border-white/8 hover:border-white/14'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-lg leading-tight">{job.role}</h3>
                    {i === 0 && (
                      <span className="text-[10px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full tracking-wide uppercase">
                        Most Recent
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium mt-1" style={{ color: i === 0 ? '#06b6d4cc' : 'rgba(255,255,255,0.4)' }}>
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-xs font-medium text-white/30 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                  {job.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5">
                {job.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 + j * 0.05 + 0.25 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed"
                  >
                    <span className="text-accent/70 mt-0.5 shrink-0 font-bold">›</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
