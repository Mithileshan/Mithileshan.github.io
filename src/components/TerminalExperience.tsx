import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface Job {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

interface TerminalMeta {
  filename: string
  tabLabel: string
  stack: string[]
  metrics: { value: string; label: string }[]
}

// Structured metadata that enriches the raw job bullets
const terminalMeta: TerminalMeta[] = [
  {
    filename: 'kst-swe.md',
    tabLabel: 'kst-swe',
    stack: ['Spring Boot', 'PostgreSQL', 'Docker', 'K8s', 'JWT', 'OAuth 2.0'],
    metrics: [
      { value: '-30%', label: 'deploy time' },
      { value: '-40%', label: 'auth breaches' },
      { value: '95%',  label: 'test coverage' },
    ],
  },
  {
    filename: 'kst-intern.md',
    tabLabel: 'kst-intern',
    stack: ['Spring Boot MVC', 'PostgreSQL', 'JUnit', 'REST APIs'],
    metrics: [
      { value: '60→90%', label: 'test coverage' },
      { value: '30+',    label: 'prod issues fixed' },
      { value: '↓debt',  label: 'clean code refactor' },
    ],
  },
  {
    filename: 'vectra-intern.md',
    tabLabel: 'vectra',
    stack: ['Python', 'React', 'Node.js', 'GitHub Actions', 'Docker'],
    metrics: [
      { value: '50K+', label: 'records/day' },
      { value: '-75%', label: 'manual effort' },
      { value: '-87%', label: 'deploy time' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 7 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
}

function useTypingEffect(text: string, active: boolean, speed = 42) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    if (!active) return

    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, active, speed])

  return { displayed, done }
}

export default function TerminalExperience({ jobs }: { jobs: Job[] }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [typing, setTyping] = useState(false)
  const [contentKey, setContentKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: '-80px' })

  // Start typing once the section scrolls into view
  useEffect(() => {
    if (inView) setTyping(true)
  }, [inView])

  const meta = terminalMeta[activeIdx]
  const job = jobs[activeIdx]
  const cmd = `cat ${meta.filename}`

  const { displayed, done } = useTypingEffect(cmd, typing, 42)

  function switchTab(idx: number) {
    if (idx === activeIdx) return
    setTyping(false)
    setContentKey(k => k + 1)
    setActiveIdx(idx)
    setTimeout(() => setTyping(true), 60)
  }

  return (
    <div ref={containerRef} className="rounded-2xl overflow-hidden border border-white/8 font-mono text-sm shadow-2xl">

      {/* ── Title bar ── */}
      <div className="bg-[#111d2e] px-4 py-3 flex items-center border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-white/25 text-xs absolute left-1/2 -translate-x-1/2 select-none">
          ~/experience
        </span>
      </div>

      {/* ── Tab bar ── */}
      <div className="bg-[#0d1724] border-b border-white/5 flex overflow-x-auto scrollbar-none">
        {jobs.map((_, i) => (
          <button
            key={i}
            onClick={() => switchTab(i)}
            className={`relative px-5 py-2.5 text-xs whitespace-nowrap transition-all border-r border-white/5 ${
              i === activeIdx
                ? 'text-accent bg-[#0b1420]'
                : 'text-white/30 hover:text-white/55 bg-transparent'
            }`}
          >
            {terminalMeta[i].filename}
            {i === activeIdx && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Terminal body ── */}
      <div className="bg-[#0b1420] p-6 min-h-[28rem]">

        {/* Command prompt + typing */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-white/30 select-none">
            <span className="text-[#4ade80]">mithileshan</span>
            <span className="text-white/25">@portfolio</span>
            <span className="text-white/15"> ~/experience</span>
          </span>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-accent font-bold select-none">$</span>
          <span className="text-white">{displayed}</span>
          {!done && (
            <motion.span
              className="inline-block w-[7px] h-[15px] bg-accent rounded-[1px]"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.55, repeat: Infinity }}
            />
          )}
        </div>

        {/* Content — reveals after typing completes */}
        <AnimatePresence mode="wait">
          {done && (
            <motion.div
              key={contentKey}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="flex flex-col gap-0.5"
            >
              {/* Header comment */}
              <motion.p variants={lineVariants} className="text-white/28 leading-relaxed">
                # <span className="text-white/40">{job.role}</span>{' '}
                <span className="text-white/20">@ {job.company} · {job.location}</span>
              </motion.p>
              <motion.p variants={lineVariants} className="text-white/20 mb-3">
                # {job.period}
              </motion.p>

              {/* Stack */}
              <motion.div variants={lineVariants} className="flex items-start gap-3">
                <span className="text-accent min-w-[56px]">stack:</span>
                <span className="text-white/50">{meta.stack.join('  |  ')}</span>
              </motion.div>

              {/* Gap */}
              <motion.div variants={lineVariants} className="h-4" />

              {/* Metrics */}
              <motion.p variants={lineVariants} className="text-accent">
                metrics:
              </motion.p>
              {meta.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  variants={lineVariants}
                  className="flex items-center gap-3 pl-4"
                >
                  <span className="text-[#4ade80] font-bold w-[72px] text-right tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-white/35">{m.label}</span>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                variants={lineVariants}
                className="border-t border-white/8 my-5"
              />

              {/* Bullets */}
              {job.bullets.map((b, i) => (
                <motion.div
                  key={i}
                  variants={lineVariants}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#4ade80] shrink-0 mt-[3px] select-none">✓</span>
                  <span className="text-white/55 leading-relaxed">{b}</span>
                </motion.div>
              ))}

              {/* Idle prompt after output */}
              <motion.div
                variants={lineVariants}
                className="flex items-center gap-2 mt-6"
              >
                <span className="text-accent font-bold select-none">$</span>
                <motion.span
                  className="inline-block w-[7px] h-[15px] bg-white/25 rounded-[1px]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
