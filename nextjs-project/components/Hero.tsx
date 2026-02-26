'use client'
/**
 * Hero Section
 * - Full-screen animated hero
 * - Typed text role switcher
 * - Orbiting tech icons
 * - CTA buttons + stats
 */

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/variants'

const ROLES = [
  'Full-Stack Developer',
  'AI / ML Engineer',
  'React Developer',
  'Python Developer',
  'Computer Science Student',
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const charIndexRef = useRef(0)

  // Typing animation
  useEffect(() => {
    const type = () => {
      const current = ROLES[roleIndex]
      if (isDeleting) {
        setTyped(current.slice(0, --charIndexRef.current))
      } else {
        setTyped(current.slice(0, ++charIndexRef.current))
      }

      let delay = isDeleting ? 60 : 100
      if (!isDeleting && charIndexRef.current === current.length) {
        delay = 2000
        setIsDeleting(true)
      } else if (isDeleting && charIndexRef.current === 0) {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
        delay = 400
      }
      setTimeout(type, delay)
    }

    const timeout = setTimeout(type, 100)
    return () => clearTimeout(timeout)
  }, [roleIndex, isDeleting])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full filter blur-[80px] opacity-15 bg-[var(--accent)] -top-24 -right-24 animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[80px] opacity-15 bg-[var(--accent-2)] -bottom-12 -left-12 animate-float-reverse" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,170,0.3)] bg-[var(--accent-glow)] text-[var(--accent)] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse-ring" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              <span className="gradient-text">Sudais</span>
              <br />
              Himayat
            </motion.h1>

            {/* Role */}
            <motion.p variants={fadeUp} className="text-xl text-[var(--text-muted)] mb-6">
              <span className="text-[var(--accent-2)] font-medium">{typed}</span>
              <span className="inline-block w-0.5 h-5 bg-[var(--accent-2)] ml-0.5 align-middle animate-blink" />
            </motion.p>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-[var(--text-muted)] max-w-lg leading-relaxed mb-10 text-base">
              Computer Science student at COMSATS University Islamabad with hands-on experience in MERN stack and AI/ML. Passionate about building scalable applications and exploring emerging technologies.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap mb-12">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-full font-display font-semibold text-sm cursor-pointer no-underline transition-all duration-300 text-[#090b10]"
                style={{ background: 'var(--gradient)', boxShadow: '0 4px 20px rgba(0,212,170,0.3)' }}>
                <i className="fa fa-rocket" aria-hidden="true" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-display font-semibold text-sm cursor-pointer no-underline border border-[var(--card-border)] text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]">
                <i className="fa fa-envelope" aria-hidden="true" /> Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 flex-wrap">
              {[
                { num: '3+', label: 'Internships' },
                { num: '10+', label: 'Projects' },
                { num: '5+', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-extrabold text-4xl leading-none gradient-text">{stat.num}</div>
                  <div className="text-xs text-[var(--text-muted)] font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center items-center order-first lg:order-last"
          >
            <div className="relative w-[280px] h-[280px] flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(0,212,170,0.3)] animate-spin-slow" />
              {/* Inner ring */}
              <div className="absolute inset-5 rounded-full border border-[rgba(0,153,255,0.2)] animate-spin-slow-reverse" />

              {/* Orbit Icons */}
              {[
                { icon: 'fab fa-js', color: '#f7df1e', class: 'orbit-1' },
                { icon: 'fab fa-react', color: '#61dafb', class: 'orbit-2' },
                { icon: 'fab fa-python', color: '#3776ab', class: 'orbit-3' },
                { icon: 'fas fa-database', color: '#4db33d', class: 'orbit-4' },
              ].map((item) => (
                <div
                  key={item.class}
                  className={`absolute w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg ${item.class}`}
                  style={{ color: item.color }}
                  aria-hidden="true"
                >
                  <i className={item.icon} />
                </div>
              ))}

              {/* Avatar */}
              <div
                className="relative z-10 w-48 h-48 rounded-full flex items-center justify-center font-display font-extrabold text-5xl text-[#090b10] overflow-hidden"
                style={{
                  background: 'var(--gradient)',
                  boxShadow: '0 0 40px rgba(0,212,170,0.3)',
                  border: '3px solid var(--accent)',
                }}
                aria-label="Sudais Himayat initials"
              >
                SH
                {/* Scan line */}
                <div
                  className="absolute w-full h-0.5 pointer-events-none animate-scan"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.6 }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)] text-xs tracking-widest uppercase" aria-hidden="true">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        SCROLL
      </div>
    </section>
  )
}
