'use client'
/**
 * Skills Component
 * Displays skill categories in animated cards with pill tags
 */
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/variants'
import { skillCategories } from '@/data/index'

export default function Skills() {
  return (
    <section id="skills" className="py-24" aria-label="Skills section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-16">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">Expertise</p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            A comprehensive toolkit built through internships, projects, and continuous learning.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp} className="glass-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#090b10]"
                  style={{ background: 'var(--gradient)' }}>
                  <i className={`fa ${cat.icon}`} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-default hover:border-[rgba(0,212,170,0.3)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]"
                    style={{
                      background: 'var(--bg-3)',
                      color: 'var(--text-muted)',
                      borderColor: 'var(--card-border)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
