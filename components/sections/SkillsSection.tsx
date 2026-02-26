'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function TagSkill({ name }: { name: string }) {
  return (
    <span
      className="px-3 py-1.5 rounded-lg text-xs font-medium"
      style={{
        background: 'rgba(0,212,255,0.08)',
        border: '1px solid rgba(0,212,255,0.2)',
        color: 'var(--text-primary)',
      }}
    >
      {name}
    </span>
  );
}

const categories = [
  {
    title: 'Programming Languages',
    key: 'programming',
    type: 'bar',
    data: skills.programming,
    color: '#00D4FF',
  },
  {
    title: 'Web Technologies',
    key: 'web',
    type: 'bar',
    data: skills.web,
    color: '#FF6B35',
  },
  {
    title: 'AI / Machine Learning',
    key: 'aiml',
    type: 'bar',
    data: skills.aiml,
    color: '#7C3AED',
  },
  {
    title: 'Databases',
    key: 'databases',
    type: 'bar',
    data: skills.databases,
    color: '#10B981',
  },
  {
    title: 'Tools & Platforms',
    key: 'tools',
    type: 'tag',
    data: skills.tools,
    color: '#F59E0B',
  },
  {
    title: 'Core Competencies',
    key: 'core',
    type: 'tag',
    data: skills.core,
    color: '#EC4899',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeader
          badge="Skills"
          title="Technical"
          highlight="Expertise"
          subtitle="A comprehensive toolkit spanning full-stack development, AI/ML, and modern DevOps."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${category.color}, transparent)` }}
                />
                <h3 className="font-semibold text-sm font-display" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              {category.type === 'bar' ? (
                <div className="space-y-4">
                  {(category.data as { name: string; level: number }[]).map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {(category.data as { name: string }[]).map((skill) => (
                    <TagSkill key={skill.name} name={skill.name} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
