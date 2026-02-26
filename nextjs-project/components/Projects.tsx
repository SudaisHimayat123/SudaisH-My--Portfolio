'use client'
/**
 * Projects Component
 * - Filter by category (AI prioritized)
 * - Animated card grid
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/variants'
import { projects, type ProjectCategory } from '@/data/projects'

type Filter = 'all' | ProjectCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'ai', label: '🤖 AI / ML' },
  { value: 'web', label: '🌐 Web' },
  { value: 'java', label: '☕ Java' },
]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="projects" className="py-24" aria-label="Projects section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">Portfolio</p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl">AI projects take center stage — from intelligent systems to deep learning applications.</p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex gap-2 mb-12 flex-wrap" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer font-body ${
                filter === f.value
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-glow)]'
                  : 'border-[var(--card-border)] text-[var(--text-muted)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card overflow-hidden relative"
                role="listitem"
              >
                {/* Featured badge */}
                {project.featured && (
                  <span
                    className="absolute top-4 right-4 z-10 text-[#090b10] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: 'var(--gradient)' }}
                  >
                    🔥 Featured
                  </span>
                )}

                {/* Project image / emoji */}
                <div
                  className={`h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${project.bgClass} relative`}
                  aria-hidden="true"
                >
                  {project.emoji}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(9,11,16,0.6))' }} />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-base mb-2">{project.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          background: 'var(--accent-glow)',
                          color: 'var(--accent)',
                          borderColor: 'rgba(0,212,170,0.2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border no-underline transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]"
                      style={{ background: 'var(--accent-glow)', color: 'var(--accent)', borderColor: 'rgba(0,212,170,0.3)' }}
                    >
                      <i className="fab fa-github" aria-hidden="true" /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-[var(--card-border)] text-[var(--text-muted)] no-underline transition-all duration-300 hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] hover:bg-[var(--accent-2-glow)]"
                      >
                        <i className="fa fa-external-link-alt" aria-hidden="true" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
