'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/variants'
import { certifications } from '@/data/index'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24" style={{ background: 'var(--bg-2)' }} aria-label="Certifications section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">Credentials</p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl">Continuous learning through industry-recognized certifications.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={fadeUp} className="glass-card p-7 flex gap-4 items-start">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'var(--gradient)' }}
                aria-hidden="true"
              >
                {cert.emoji}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm leading-tight mb-2">{cert.title}</h3>
                <p className="text-[var(--text-muted)] text-xs">
                  <i className="fa fa-certificate mr-1" aria-hidden="true" />
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
