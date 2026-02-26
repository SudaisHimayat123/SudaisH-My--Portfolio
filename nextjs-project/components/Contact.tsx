'use client'
/**
 * Contact Component
 * - Contact info + social links
 * - Form with client-side validation
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewportOnce } from '@/lib/variants'

interface FormState {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.firstName.trim()) e.firstName = 'Please enter your first name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Please enter your message'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // ✅ Integrate EmailJS or Formspree here
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24" aria-label="Contact section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase font-display mb-3">Get In Touch</p>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h3 className="font-display font-bold text-2xl mb-4">Reach Out Directly</h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              I&apos;m currently open to internship opportunities, freelance projects, and collaborations in Full-Stack development and AI/ML.
            </p>

            {/* Contact items */}
            {[
              {"icon": 'fa-envelope', label: 'Email', value: 'hashirsudaiskhan@gmail.com', href: 'mailto:hashirsudaiskhan@gmail.com' },
              { icon: 'fa-phone', label: 'Phone', value: '+92-347-5758132', href: 'tel:+923475758132' },
              { icon: 'fa-map-marker-alt', label: 'Location', value: 'Islamabad, Pakistan', href: undefined },
            ].map((item) => {
              const Tag = item.href ? 'a' : 'div'
              return (
                <Tag
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card)] mb-3 no-underline text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)] group"
                  style={item.href ? { cursor: 'pointer' } : { cursor: 'default' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    <i className={`fa ${item.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                </Tag>
              )
            })}

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: 'fab fa-github', href: 'https://github.com/SudaisHimayat123', label: 'GitHub' },
                { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/sudaishimayat', label: 'LinkedIn' },
                { icon: 'fa fa-envelope', href: 'mailto:hashirsudaiskhan@gmail.com', label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center text-[var(--text-muted)] no-underline text-lg transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] hover:-translate-y-1">
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="font-display font-bold text-xl mb-2 text-[var(--accent)]">Message Sent!</h4>
                  <p className="text-[var(--text-muted)]">I&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-xs font-medium text-[var(--text-muted)] block mb-2">First Name *</label>
                      <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} placeholder="John" required
                        className={`w-full px-4 py-3 rounded-xl border bg-[var(--card)] text-[var(--text)] text-sm font-body outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] ${errors.firstName ? 'border-[#ff4d6d]' : 'border-[var(--card-border)]'}`} />
                      {errors.firstName && <p className="text-[#ff4d6d] text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-xs font-medium text-[var(--text-muted)] block mb-2">Last Name</label>
                      <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--text)] text-sm font-body outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-[var(--text-muted)] block mb-2">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required
                      className={`w-full px-4 py-3 rounded-xl border bg-[var(--card)] text-[var(--text)] text-sm font-body outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] ${errors.email ? 'border-[#ff4d6d]' : 'border-[var(--card-border)]'}`} />
                    {errors.email && <p className="text-[#ff4d6d] text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="text-xs font-medium text-[var(--text-muted)] block mb-2">Subject</label>
                    <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--text)] text-sm font-body outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-[var(--text-muted)] block mb-2">Message *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." required
                      className={`w-full px-4 py-3 rounded-xl border bg-[var(--card)] text-[var(--text)] text-sm font-body outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] resize-none ${errors.message ? 'border-[#ff4d6d]' : 'border-[var(--card-border)]'}`} />
                    {errors.message && <p className="text-[#ff4d6d] text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-full font-display font-semibold text-sm text-[#090b10] flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,170,0.5)] cursor-pointer border-none"
                    style={{ background: 'var(--gradient)', boxShadow: '0 4px 20px rgba(0,212,170,0.3)' }}>
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
