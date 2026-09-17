import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { BinderClip } from '../doodles/BinderClip';
import { CoffeeStain } from '../doodles/CoffeeStain';
import { PenDoodle } from '../doodles/PenDoodle';
import { GithubIcon, LinkedinIcon, MailIcon } from '../doodles/SocialIcons';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

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

  // Copy to clipboard state
  const [copied, setCopied] = useState(false);

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

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all fields before sending!',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please enter a valid email address!',
      });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: '' });

    // If Formspree URL configured, send via fetch; otherwise fallback to mailto:
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
          setFormStatus({
            submitting: false,
            success: false,
            error: 'Could not send message via form endpoint. Opening mail client instead.',
          });
          window.open(
            `mailto:${contact.email}?subject=Message from ${encodeURIComponent(
              formData.name
            )}&body=${encodeURIComponent(formData.message)}`,
            '_blank'
          );
        });
    } else {
      // Direct mailto integration
      const mailtoUrl = `mailto:${contact.email}?subject=Portfolio Message from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)} (Reply to: ${encodeURIComponent(
        formData.email
      )})`;
      window.open(mailtoUrl, '_blank');

      setTimeout(() => {
        setFormStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus({ submitting: false, success: false, error: '' }), 5000);
      }, 600);
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
      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative">
        <TiltCard
          maxTilt={6}
          scale={1.01}
          baseRotate="-0.5deg"
          className="w-full relative z-10"
        >
          {/* Top Binder Clips */}
          <div className="absolute -top-7 left-12 sm:left-24 z-30">
            <BinderClip className="w-8 sm:w-10" />
          </div>
          <div className="absolute -top-7 right-12 sm:right-24 z-30">
            <BinderClip className="w-8 sm:w-10" />
          </div>

          <div
            className="relative bg-white p-6 sm:p-12 md:p-14 rounded-sm shadow-paper border border-stone-200"
            style={{
              boxShadow: '0 15px 45px rgba(0, 0, 0, 0.10), 0 3px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Coffee Stain Watermark (Bottom Right) */}
            <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-40 z-0 hidden sm:block">
              <CoffeeStain size={180} />
            </div>

            {/* Ballpoint Pen Doodle (Bottom Right) */}
            <div className="absolute -bottom-10 right-8 sm:right-16 pointer-events-none z-30 hidden md:block">
              <PenDoodle className="w-10 sm:w-12" rotate="-32deg" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
              
              {/* ================= LEFT COLUMN: GET IN TOUCH ================= */}
              <div className="space-y-6 text-center md:text-left">
                <div>
                  <h3 className="font-marker text-2xl sm:text-3xl text-marker-redDark tracking-wide mb-2 inline-block">
                    GET IN TOUCH
                  </h3>
                  <p className="font-sketch text-base sm:text-lg text-ink-muted">
                    Have an opportunity, question, or project idea? Feel free to reach out directly.
                  </p>
                </div>

                {/* Email Item with One-Click Copy */}
                <div className="bg-[#fdfbf7] p-4 rounded-hand-1 border border-stone-300 shadow-sm space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-marker-blue font-marker text-lg">
                    <MailIcon size={20} />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                    <span className="font-sketch text-base sm:text-lg text-ink font-bold break-all">
                      {contact.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="px-2.5 py-1 text-xs font-sketch font-bold bg-white border border-ink rounded-hand-2 hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-sm active:scale-95"
                      title="Copy email to clipboard"
                    >
                      {copied ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="bg-[#fdfbf7] p-4 rounded-hand-2 border border-stone-300 shadow-sm space-y-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-marker-redDark font-marker text-lg">
                    <span>📍</span>
                    <span>Location</span>
                  </div>
                  <p className="font-sketch text-base sm:text-lg text-ink">
                    {contact.location}
                  </p>
                </div>

                {/* Social Connect Links */}
                <div className="pt-2">
                  <span className="font-sketch text-sm uppercase tracking-wider text-ink-muted block mb-3">
                    Social Profiles
                  </span>
                  <div className="flex items-center justify-center md:justify-start gap-5">
                    <a
                      href={contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full border border-stone-300 text-ink hover:text-marker-red hover:scale-110 transition-all shadow-sm"
                      title="GitHub Profile"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon size={24} />
                    </a>
                    <a
                      href={contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full border border-stone-300 text-ink hover:text-marker-blue hover:scale-110 transition-all shadow-sm"
                      title="LinkedIn Profile"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT COLUMN: SEND A MESSAGE ================= */}
              <div>
                <h3 className="font-marker text-2xl sm:text-3xl text-marker-redDark tracking-wide mb-4 text-center md:text-left">
                  SEND A MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Field */}
                  <div className="space-y-1 text-left">
                    <label
                      htmlFor="contact-name"
                      className="font-sketch text-base font-bold text-ink block"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="w-full px-3.5 py-2 font-sketch text-base bg-[#fdfbf7] border-2 border-ink rounded-hand-1 focus:outline-none focus:border-marker-redDark shadow-sm transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1 text-left">
                    <label
                      htmlFor="contact-email"
                      className="font-sketch text-base font-bold text-ink block"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="w-full px-3.5 py-2 font-sketch text-base bg-[#fdfbf7] border-2 border-ink rounded-hand-1 focus:outline-none focus:border-marker-redDark shadow-sm transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1 text-left">
                    <label
                      htmlFor="contact-message"
                      className="font-sketch text-base font-bold text-ink block"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note or project inquiry here..."
                      required
                      className="w-full px-3.5 py-2 font-sketch text-base bg-[#fdfbf7] border-2 border-ink rounded-hand-1 focus:outline-none focus:border-marker-redDark shadow-sm transition-colors resize-y"
                    />
                  </div>

                  {/* Feedback Messages */}
                  {formStatus.error && (
                    <div className="p-2 text-center font-sketch text-sm text-marker-red font-bold animate-pulse">
                      {formStatus.error}
                    </div>
                  )}

                  {formStatus.success && (
                    <div className="p-2 text-center font-sketch text-sm text-green-700 font-bold">
                      ✓ Message prepared! Opening your email client to send...
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-center md:justify-start">
                    <HandDrawnButton
                      type="submit"
                      disabled={formStatus.submitting}
                      size="md"
                      className="w-48 text-center"
                    >
                      {formStatus.submitting ? 'Preparing...' : 'Send Message ✉️'}
                    </HandDrawnButton>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
