'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
  'Full-Stack Developer',
  'AI/ML Engineer',
  'Computer Vision Dev',
  'MERN Stack Dev',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container relative z-10 py-32 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              color: 'var(--accent)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
            <Sparkles size={14} />
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden"
          >
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={160}
              height={160}
              className="object-cover"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Sudais</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>Himayat</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Terminal size={20} style={{ color: 'var(--accent)' }} />
            <span
              className="text-xl md:text-2xl font-mono font-medium"
              style={{ color: 'var(--accent)' }}
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              { Icon: Github, href: personalInfo.github, label: 'GitHub' },
              { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center glass-card transition-all"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center gap-2 mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} style={{ color: 'var(--accent)' }} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Scan line decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.3 }}
      />
    </section>
  );
}
