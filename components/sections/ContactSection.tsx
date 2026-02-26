'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address.';
  if (!data.message.trim() || data.message.length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

const contactInfo = [
  { Icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { Icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { Icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
];

const socialLinks = [
  { Icon: Github, href: personalInfo.github, label: 'GitHub', color: '#FFFFFF' },
  { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#00D4FF' },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulated submit (replace with your API/EmailJS/Formspree endpoint)
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setForm({ name: '', email: '', message: '' });
    toast.success("Message sent! I'll get back to you soon. 🚀", { duration: 4000 });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${
      errors[field] ? 'border-red-400' : 'focus:border-[var(--accent)]'
    }`;

  return (
    <section id="contact">
      <div className="section-container">
        <SectionHeader
          badge="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-display mb-3" style={{ color: 'var(--text-primary)' }}>
                Let's build something great together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm currently available for internships, freelance projects, and full-time opportunities.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:glow-accent"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center glass-card transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass('name')}
                  style={{
                    background: 'var(--bg)',
                    border: `1px solid ${errors.name ? '#F87171' : 'var(--border)'}`,
                    color: 'var(--text-primary)',
                  }}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5" role="alert">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass('email')}
                  style={{
                    background: 'var(--bg)',
                    border: `1px solid ${errors.email ? '#F87171' : 'var(--border)'}`,
                    color: 'var(--text-primary)',
                  }}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5" role="alert">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={inputClass('message')}
                  style={{
                    background: 'var(--bg)',
                    border: `1px solid ${errors.message ? '#F87171' : 'var(--border)'}`,
                    color: 'var(--text-primary)',
                    resize: 'none',
                  }}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5" role="alert">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3.5 text-sm"
                whileHover={!loading ? { scale: 1.02, y: -1 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
