'use client'
/**
 * Experience Component - Timeline layout
 */
import { motion } from 'framer-motion'
import { fadeUp, timelineItem, staggerContainer, viewportOnce } from '@/lib/variants'
import { experiences } from '@/data/index'

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg-2)' }} aria-label="Experience section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">Career</p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl">Hands-on internships that shaped my skills in AI, ML, and Frontend development.</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative pl-10"
          role="list"
        >
          {/* Timeline line */}
          <div
            className="absolute left-2.5 top-2 bottom-2 w-0.5 rounded"
            style={{ background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)' }}
            aria-hidden="true"
          />

          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={timelineItem} className="relative mb-12" role="listitem">
              {/* Dot */}
              <div
                className="absolute -left-[2.25rem] top-1.5 w-5 h-5 rounded-full"
                style={{
                  background: 'var(--bg-2)',
                  border: `2px solid ${exp.accentColor}`,
                  boxShadow: `0 0 12px ${exp.glowColor}`,
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-1 rounded-full"
                  style={{ background: exp.accentColor }}
                />
              </div>

              {/* Card */}
              <div className="glass-card p-7">
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span
                    className="text-xs font-semibold font-display px-3 py-1 rounded-full border"
                    style={{
                      color: exp.accentColor,
                      background: `${exp.accentColor}18`,
                      borderColor: `${exp.accentColor}33`,
                    }}
                  >
                    {exp.year}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">· {exp.company}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-4">{exp.role}</h3>
                <ul className="space-y-1.5 list-none">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[var(--text-muted)] text-sm leading-relaxed pl-5 relative">
                      <span className="absolute left-0 text-[var(--accent)]" aria-hidden="true">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
