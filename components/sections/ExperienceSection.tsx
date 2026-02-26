'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <SectionHeader
          badge="Experience"
          title="Work"
          highlight="History"
          subtitle="Real-world internships sharpening my skills in AI, ML, and frontend development."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, var(--accent), transparent)', transform: 'translateX(-50%)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="md:w-1/2">
                  <div
                    className="glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-300"
                    style={{ borderLeft: `3px solid ${exp.color}` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block"
                          style={{ background: `${exp.color}20`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="text-lg font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap flex-shrink-0"
                        style={{ background: 'var(--border)', color: 'var(--text-secondary)' }}
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={14} style={{ color: exp.color, flexShrink: 0, marginTop: 2 }} />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex md:w-0 items-center justify-center relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: `${exp.color}15`,
                      borderColor: exp.color,
                      boxShadow: `0 0 20px ${exp.color}40`,
                    }}
                  >
                    <Briefcase size={18} style={{ color: exp.color }} />
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
