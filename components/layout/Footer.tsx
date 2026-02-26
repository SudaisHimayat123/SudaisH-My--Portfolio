'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
    >
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' }}
              >
                <Code2 size={16} color="#0A0E1A" />
              </div>
              <span className="gradient-text">Sudais Himayat</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center glass-card transition-all duration-300 hover:glow-accent"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollTop}
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
