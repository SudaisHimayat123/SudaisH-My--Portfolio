'use client';

import { motion } from 'framer-motion';
import { GraduationCap, User, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo, education } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

const statsData = [
  { label: 'Internships', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Certifications', value: '5' },
  { label: 'Year', value: '2nd' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <SectionHeader
          badge="About Me"
          title="Who"
          highlight="I Am"
          subtitle="A passionate developer combining software engineering with AI to build the future."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-56 h-56 rounded-full overflow-hidden"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile picture"
                  width={224}
                  height={224}
                  className="object-cover"
                />
              </motion.div>
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full border-2 border-dashed pointer-events-none"
                style={{ borderColor: 'rgba(0,212,255,0.15)' }}
              />
              {/* Badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                  color: '#0A0E1A',
                }}
              >
                CS Student @ COMSATS
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4">
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-bold gradient-text font-display">{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-3 font-display"
                style={{ color: 'var(--text-primary)' }}
              >
                Full-Stack & AI Developer
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Education Card */}
            {education.map((edu) => (
              <div key={edu.degree} className="glass-card rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                      Education
                    </p>
                    <h4 className="font-bold text-base mt-0.5" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h4>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {edu.institution} — {edu.campus}
                    </p>
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(0,212,255,0.1)', color: 'var(--accent)' }}
                    >
                      {edu.period} · {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Info */}
            <div className="glass-card rounded-2xl p-5 space-y-3">
              {[
                { Icon: MapPin, text: personalInfo.location },
                { Icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm hover:text-[var(--accent)] transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: personalInfo.github, label: 'GitHub' },
                { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
