import React, { useState } from 'react';
import SectionShell from '../common/SectionShell';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Safely try to read JSON response (backend should send JSON, but
      // guard against empty / non-JSON bodies to avoid confusing errors).
      let data = {};
      let rawText = '';
      try {
        rawText = await response.text();
        if (rawText) {
          data = JSON.parse(rawText);
        }
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError, rawText);
      }

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorMessage = data.error || `Server error (${response.status}) while sending message.`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Let's collaborate on impactful projects or discuss opportunities."
    >
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm">
          <div className="relative flex flex-col items-center gap-4 px-8 py-6 rounded-3xl bg-gradient-to-br from-purple-900/90 via-slate-950/95 to-indigo-900/90 border border-purple-500/40 shadow-2xl shadow-purple-500/40">
            <div className="relative flex items-center justify-center">
              <div className="h-14 w-14 rounded-full border-2 border-purple-400/60 border-t-transparent animate-spin" />
              <div className="absolute h-10 w-10 rounded-full border-2 border-pink-400/50 border-b-transparent animate-spin" />
            </div>
            <p className="text-sm sm:text-base font-medium text-white text-center">
              Sending your message to <span className="text-textLightPurple">Gaurav Oli</span>...
            </p>
          </div>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4 text-sm sm:text-base text-textGray">
          <div className="rounded-2xl bg-slate-900/80 border border-purple-500/30 p-4 space-y-2">
            <p>
              <span className="text-textLightPurple font-semibold">Email:</span>{' '}
              <a 
                href="mailto:gauravoli777@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                gauravoli777@gmail.com
              </a>
            </p>
            <p>
              <span className="text-textLightPurple font-semibold">Phone:</span>{' '}
              <a href="tel:+919411799414" className="text-blue-400 hover:text-blue-300 transition-colors">
                +91 9411799414
              </a>
            </p>
            <p>
              <span className="text-textLightPurple font-semibold">Location:</span>{' '}
              Champawat, Uttarakhand, India
            </p>
            <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:gauravoli777@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Me
              </a>
              
              <a
                href="https://github.com/GAURAV9790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/oligaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              
              <a
                href="https://www.instagram.com/gauravoli.07?igsh=bm9yOGw2a2Rsam00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919411799414"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Me
              </a>
              
              <a
                href="https://wa.me/919411799414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a4 4 0 0 1-4-4v-1z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Send Me a Message
            </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-purple-500/30 p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-semibold text-textLightPurple mb-3">
            Quick Message (UI only)
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="Tell me about your project or opportunity..."
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold shadow-lg shadow-purple-500/40 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition w-full sm:w-auto"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-transparent animate-spin"></span>
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message'
              )}
            </button>
            {submitStatus.message && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${submitStatus.success ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 'bg-red-900/30 text-red-400 border border-red-500/30'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionShell>
  )
}

export default ContactSection;