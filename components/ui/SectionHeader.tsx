'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({ badge, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Badge */}
      <span
        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
        style={{
          background: 'rgba(0,212,255,0.1)',
          color: 'var(--accent)',
          border: '1px solid rgba(0,212,255,0.2)',
        }}
      >
        {badge}
      </span>

      {/* Title */}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="h-px w-16" style={{ background: 'var(--border)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <div className="h-px w-16" style={{ background: 'var(--border)' }} />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="section-subtitle mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
