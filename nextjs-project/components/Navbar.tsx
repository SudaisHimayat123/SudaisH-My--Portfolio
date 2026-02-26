'use client'
/**
 * Navbar Component
 * - Sticky navigation with glassmorphism on scroll
 * - Dark/Light theme toggle (persists via localStorage)
 * - Active section highlighting
 * - Mobile hamburger menu
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll for navbar style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setIsDark(saved === 'dark')
    document.documentElement.setAttribute('data-theme', saved)
    if (saved === 'light') document.documentElement.classList.add('light')
    else document.documentElement.classList.remove('light')
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
    if (next === 'light') document.documentElement.classList.add('light')
    else document.documentElement.classList.remove('light')
  }

  // Close mobile menu on nav click
  const handleNavClick = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  // Toggle mobile menu
  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--bg-2)]/85 backdrop-blur-xl border-b border-[var(--card-border)]'
            : 'py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display font-bold text-2xl text-[var(--text)] no-underline"
            aria-label="Sudais Himayat - Home"
          >
            SH<span className="gradient-text">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-1 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-lg no-underline transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--text)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fa ${isDark ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true"></i>
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMobile}
              className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 rounded ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 rounded ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 rounded ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col items-center justify-center gap-6"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-3xl font-bold no-underline text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
