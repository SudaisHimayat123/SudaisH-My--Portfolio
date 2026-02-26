'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-container">
        <SectionHeader
          badge="Projects"
          title="What I've"
          highlight="Built"
          subtitle="From AI-powered applications to full-stack platforms — here's a showcase of my work."
        />

        {/* Featured AI Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(255,107,53,0.15))',
                border: '1px solid rgba(0,212,255,0.3)',
                color: 'var(--accent)',
              }}
            >
              <Sparkles size={16} />
              Featured AI Projects
            </div>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                style={{ '--card-accent': `bg-gradient-to-r ${project.gradient}` } as React.CSSProperties}
              >
                {/* Card Top Visual */}
                <div
                  className={`h-40 flex items-center justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <span className="text-6xl relative z-10">{project.icon}</span>
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2 font-display" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          background: 'rgba(0,212,255,0.06)',
                          border: '1px solid rgba(0,212,255,0.15)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-3 flex-1 justify-center"
                    >
                      <Github size={13} />
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    ) : (
                      <span
                        className="text-xs py-2 px-3 flex-1 text-center rounded-xl"
                        style={{
                          background: 'var(--border)',
                          color: 'var(--text-secondary)',
                          fontSize: '11px',
                        }}
                      >
                        Private Demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.3)',
                color: '#7C3AED',
              }}
            >
              <Code2 size={16} />
              Other Projects
            </div>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #7C3AED, transparent)' }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.other.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="font-bold text-sm mb-2 font-display" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: 'rgba(124,58,237,0.08)',
                        color: 'var(--text-secondary)',
                        fontSize: '10px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
                  {project.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
