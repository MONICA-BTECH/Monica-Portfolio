import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Message from ${senderName || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Monica,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${personalInfo.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading, Bio, Direct Email Copy & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-between space-y-10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-4">
              <span className="w-6 h-[1px] bg-cyan-400"></span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span className="block text-white">Let's Build</span>
              <span className="block text-[#64748b]">Something</span>
              <span className="block text-[#94a3b8]">Meaningful.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#999999] leading-relaxed max-w-lg mb-8">
              Whether you are looking to collaborate on an intelligent AI solution, discuss machine learning pipelines, or explore internship opportunities, my inbox is always open.
            </p>

            {/* Email Direct Copy Box */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#666666] block mb-1">
                  DIRECT INBOX
                </span>
                <span className="font-mono text-sm sm:text-base text-white font-medium">
                  {personalInfo.contactEmail}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={personalInfo.socials.email}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#e4e4e4] transition-all flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  <span>Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-6 border-t border-white/[0.06] space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#666666] block">
              PROFESSIONAL NETWORKS
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#080808] hover:bg-[#121212] border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-white transition-all duration-200"
              >
                <IconGithub size={16} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} className="text-[#666666]" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#080808] hover:bg-[#121212] border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-white transition-all duration-200"
              >
                <IconLinkedin size={16} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={13} className="text-[#666666]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Email Launcher Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 bg-[#070707] border border-white/10 p-8 sm:p-10 rounded-3xl glow-card"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-syne font-bold text-xl text-white">
                Send a Direct Note
              </h3>
              <p className="text-xs text-[#888888] mt-1">
                Launches your preferred email client with your message pre-formatted.
              </p>
            </div>
            <Sparkles size={20} className="text-cyan-400" />
          </div>

          <form onSubmit={handleSendViaEmail} className="space-y-6">
            {/* Sender Name */}
            <div className="space-y-2">
              <label htmlFor="sender-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#777777]">
                YOUR NAME / ORGANIZATION
              </label>
              <input
                id="sender-name"
                type="text"
                required
                placeholder="e.g. Alex Smith"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none transition-colors"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#777777]">
                SUBJECT / TOPIC
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="e.g. AI Internship / Project Inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#777777]">
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Write your note or opportunity details here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 rounded-xl p-4 text-sm text-white placeholder-[#444444] focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Submit / Open Mail Client */}
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-[#e4e4e4] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-white/10 cursor-pointer"
            >
              <Send size={15} />
              <span>Compose Email to Monica</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
