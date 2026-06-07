import { useState, useRef } from 'react';
import { useForm } from '@formspree/react';
import { contactInfo } from '../data/socialLinks';
import './contact.css';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  const [formspreeState, formspreeSubmit] = useForm("xzdqekze");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    // Validate on blur
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(er => ({ ...er, email: 'Please enter a valid email address' }));
    }
    if (name === 'name' && !value.trim()) {
      setErrors(er => ({ ...er, name: 'Name is required' }));
    }
    if (name === 'message' && !value.trim()) {
      setErrors(er => ({ ...er, message: 'Message is required' }));
    }
  };

  const handleTextareaInput = () => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Final validation
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email format';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus('loading');
    
    try {
      // Submit data to Formspree
      await formspreeSubmit(form);

      // Reset form and show success
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback */ }
  };

  const fieldClass = (name) => {
    if (touched[name] && errors[name]) return 'field-error';
    if (touched[name] && form[name] && !errors[name]) return 'field-valid';
    return '';
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">// Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you.</p>

        <div className="contact-grid">
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${fieldClass('name')}`}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.name && errors.name && <span className="field-msg error">{errors.name}</span>}
            </div>

            <div className={`form-group ${fieldClass('email')}`}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.email && errors.email && <span className="field-msg error">{errors.email}</span>}
              {touched.email && form.email && !errors.email && <span className="field-msg valid">Looks good!</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              >
                <option value="">Select a topic...</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="job">Job Opportunity</option>
                <option value="freelance">Freelance Work</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={`form-group ${fieldClass('message')}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => { handleChange(e); handleTextareaInput(); }}
                onBlur={handleBlur}
                ref={textareaRef}
                required
              />
              {touched.message && errors.message && <span className="field-msg error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn primary submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Sent!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-success-msg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact details */}
          <div className="contact-details reveal-right">
            {/* Availability */}
            <div className="availability-badge">
              <span className={`avail-dot ${contactInfo.availability === 'open' ? 'open' : 'employed'}`} />
              {contactInfo.availability === 'open' ? 'Open to Opportunities' : 'Currently Employed'}
            </div>

            <div className="contact-info-list">
              <div className="contact-row">
                <span className="contact-label">Email</span>
                <div className="contact-value-wrap">
                  <span className="contact-value">{contactInfo.email}</span>
                  <button className="copy-btn" onClick={copyEmail} aria-label="Copy email">
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-label">LinkedIn</span>
                <a href={`https://linkedin.com${contactInfo.linkedin}`} target="_blank" rel="noreferrer" className="contact-value link">
                  {contactInfo.linkedin}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-label">GitHub</span>
                <a href={`https://github.com${contactInfo.github}`} target="_blank" rel="noreferrer" className="contact-value link">
                  {contactInfo.github}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-label">Location</span>
                <span className="contact-value">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
