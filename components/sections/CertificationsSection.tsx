'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <SectionHeader
          badge="Certifications"
          title="Credentials &"
          highlight="Achievements"
          subtitle="Industry-recognized certifications validating my expertise across AI, programming, and development tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <Award size={18} style={{ color: 'var(--text-secondary)', opacity: 0.4 }} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-base mb-1.5 font-display" style={{ color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: cert.color }}>
                {cert.issuer}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {cert.description}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cert.color}08, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
