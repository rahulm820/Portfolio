import { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Message<textarea name="message" rows={6} required /></label>
          <div className="actions">
            <button type="submit" className="btn primary">Send</button>
            {status === 'loading' && <span>Sending…</span>}
            {status === 'success' && <span>Thanks — message sent.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
