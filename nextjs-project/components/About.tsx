'use client'
/**
 * About Component
 */
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewportOnce } from '@/lib/variants'

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-2)' }} aria-label="About section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative">
            <div className="w-full max-w-xs mx-auto aspect-[4/5] rounded-3xl flex items-center justify-center font-display font-extrabold text-7xl text-[#090b10] relative overflow-hidden"
              style={{ background: 'var(--gradient)' }}>
              SH
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(0,0,0,0.2))' }} />
            </div>
            {/* Corner tags */}
            <div className="absolute -bottom-4 -right-4 rounded-xl p-4 text-center glass-card">
              <div className="font-display font-extrabold text-3xl text-[var(--accent)]">2+</div>
              <div className="text-xs text-[var(--text-muted)]">Years Coding</div>
            </div>
            <div className="absolute -top-4 -left-4 rounded-xl p-4 text-center glass-card">
              <div className="font-display font-extrabold text-lg text-[var(--accent-2)]">AI/ML</div>
              <div className="text-xs text-[var(--text-muted)]">Specialized</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">About Me</p>
            <h2 className="font-display font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              CS Student & <span className="gradient-text">AI Builder</span>
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5">
              I&apos;m a Computer Science student at COMSATS University Islamabad (Abbottabad Campus) with a passion for creating intelligent, scalable applications. My journey spans Full-Stack development, Machine Learning, and Computer Vision.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              I&apos;ve completed three internships in Frontend Development, Machine Learning, and Artificial Intelligence — applying real-world skills to build products that matter. I love bridging the gap between cutting-edge AI research and practical software development.
            </p>
            {/* Education card */}
            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
              </div>
              <div>
                <div className="font-display font-bold text-sm mb-1">Bachelor of Science in Computer Science</div>
                <div className="text-[var(--text-muted)] text-xs mb-2">
                  <i className="fa fa-map-marker-alt mr-1" aria-hidden="true" /> COMSATS University Islamabad, Abbottabad
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium border" style={{ background: 'var(--accent-2-glow)', color: 'var(--accent-2)', borderColor: 'rgba(0,153,255,0.2)' }}>
                  2023 – 2027
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
