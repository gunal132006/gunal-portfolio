import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const parentRef = useRef<HTMLDivElement>(null);
  const [binders, setBinders] = useState<number[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string;
  }>({
    submitting: false,
    success: false,
    error: '',
  });

  const [copied, setCopied] = useState(false);

  // Dynamic metallic Binder clips calculation along top edge
  useEffect(() => {
    const calculateBinders = () => {
      if (!parentRef.current) return;
      const width = parentRef.current.offsetWidth;
      const clipWidth = 60;
      const clipGap = 20;
      const count = Math.max(1, Math.floor(width / (clipWidth + clipGap)) - 1);
      const positions: number[] = [];
      for (let i = 0; i < count; i++) {
        const leftPercent = (i * (clipWidth + clipGap) / width) * 100;
        positions.push(leftPercent);
      }
      setBinders(positions);
    };

    calculateBinders();
    window.addEventListener('resize', calculateBinders);
    return () => window.removeEventListener('resize', calculateBinders);
  }, []);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contact.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formStatus.error) {
      setFormStatus({ ...formStatus, error: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please fill out all fields!',
      });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: '' });

    if (contact.formspreeUrl) {
      fetch(contact.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            setFormStatus({ submitting: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error('Submission failed');
          }
        })
        .catch(() => {
          const mailtoUrl = `mailto:${contact.email}?subject=Portfolio Contact from ${encodeURIComponent(
            formData.name
          )}&body=${encodeURIComponent(formData.message)} (Reply to: ${encodeURIComponent(
            formData.email
          )})`;
          window.open(mailtoUrl, '_blank');
          setFormStatus({ submitting: false, success: true, error: '' });
          setFormData({ name: '', email: '', message: '' });
        });
    } else {
      const mailtoUrl = `mailto:${contact.email}?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)} (Reply to: ${encodeURIComponent(
        formData.email
      )})`;
      window.open(mailtoUrl, '_blank');

      setTimeout(() => {
        setFormStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus({ submitting: false, success: false, error: '' }), 4000);
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full mb-20 sm:mb-28 scroll-mt-20 select-none overflow-visible"
    >
      {/* 1. SECTION HEADING */}
      <SectionHeading
        title="CONTACT ME"
        rotate="-2deg"
        color="red"
        className="mb-12 sm:mb-16"
      />

      {/* Main Stationery Sheet Container */}
      <div className="Contact-Container">
        <div className="Contact-Parent" ref={parentRef}>
          {/* Metallic Binder Clips Row */}
          {binders.map((leftPct, idx) => (
            <img
              key={idx}
              src="/Binder.webp"
              className="Binder"
              style={{ left: `${leftPct}%` }}
              loading="lazy"
              decoding="async"
              alt="binder"
            />
          ))}

          {/* Main Stationery Note */}
          <TiltCard className="Contact-Note" maxTilt={8} scale={1.01}>
            <div className="Contact-Note-Content flex flex-col md:flex-row items-start justify-between gap-10 w-full h-full">
              {/* Left Column: Get In Touch */}
              <div className="Contact-Info-Col">
                <h2 className="Contact-Subheader">Get In Touch</h2>

                {/* Email Item with one-click copy */}
                <div className="Contact-Item">
                  <div className="Item-Header">
                    <p>Email</p>
                    <img src="/Mail.webp" alt="mail icon" loading="lazy" decoding="async" />
                  </div>
                  <div className="Email-Row">
                    <a
                      href={`mailto:${contact.email}`}
                      className="Item-Value hover:underline"
                      title="Send email to Gunal"
                    >
                      {contact.email}
                    </a>
                    <button
                      className="Copy-Btn"
                      onClick={handleCopyEmail}
                      title="Copy email"
                      type="button"
                    >
                      {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#26347F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="Contact-Item">
                  <div className="Item-Header">
                    <p>Phone</p>
                    <svg className="w-5 h-5 text-[#e44242]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a
                    href={contact.phoneUrl}
                    className="Item-Value hover:underline"
                    title="Call Gunal"
                  >
                    {contact.phone}
                  </a>
                </div>

                {/* Location Item */}
                <div className="Contact-Item">
                  <div className="Item-Header">
                    <p>Location</p>
                  </div>
                  <p className="Item-Value">{contact.location}</p>
                </div>

                {/* Social Connect Icons */}
                <div className="Contact-Socials">
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                  >
                    <img id="Github-Icon" src="/Github.webp" alt="github" loading="lazy" decoding="async" />
                  </a>
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                  >
                    <img id="LinkedIn" src="/LinkedIn.webp" alt="linkedin" loading="lazy" decoding="async" />
                  </a>
                </div>
              </div>

              {/* Right Column: Send a Message */}
              <div className="Contact-Form-Col">
                <h2 className="Contact-Subheader">Send a Message</h2>
                <form className="Notebook-Form" onSubmit={handleSubmit}>
                  <div className="Form-Group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      required
                    />
                  </div>
                  <div className="Form-Group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@example.com"
                      required
                    />
                  </div>
                  <div className="Form-Group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>
                  {formStatus.error && <p className="Form-Error">{formStatus.error}</p>}
                  {formStatus.success && <p className="Form-Success">✓ Message ready! Opening email client...</p>}
                  <button type="submit" className="Send-Btn" disabled={formStatus.submitting}>
                    {formStatus.submitting ? 'Preparing...' : 'Send Message ✉️'}
                  </button>
                </form>
              </div>
            </div>
          </TiltCard>

          {/* Authentic Pen and Scribble Doodles on Desk */}
          <img src="/Pen.webp" loading="lazy" decoding="async" className="Pen" alt="pen" />
          <img src="/Scribble.webp" loading="lazy" decoding="async" className="Scribble" alt="scribble" />
        </div>

        {/* Coffee Cup Ring Stain */}
        <img src="/Stain.webp" loading="lazy" decoding="async" className="Stain" alt="stain" />
      </div>
    </section>
  );
};
