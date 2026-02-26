'use client'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--card-border)' }} role="contentinfo">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <div className="font-display font-extrabold text-2xl">
              SH<span className="gradient-text">.</span>
            </div>

            {/* Nav */}
            <nav aria-label="Footer navigation">
              <div className="flex gap-6 flex-wrap justify-center">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((s) => (
                  <a key={s} href={`#${s}`}
                    className="text-[var(--text-muted)] text-sm no-underline capitalize transition-colors duration-300 hover:text-[var(--accent)]">
                    {s}
                  </a>
                ))}
              </div>
            </nav>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: 'fab fa-github', href: 'https://github.com/SudaisHimayat123', label: 'GitHub' },
                { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/sudaishimayat', label: 'LinkedIn' },
                { icon: 'fa fa-envelope', href: 'mailto:hashirsudaiskhan@gmail.com', label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] no-underline transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]">
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
              © {new Date().getFullYear()} <span className="text-[var(--accent)]">Sudais Himayat</span> · Built with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl border-none flex items-center justify-center text-[#090b10] text-lg cursor-pointer transition-all duration-300 z-50 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
        style={{ background: 'var(--gradient)', boxShadow: '0 4px 20px rgba(0,212,170,0.4)' }}
      >
        <i className="fa fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  )
}
