"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "YouTube",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    description: "Watch trading tutorials and market analysis",
    href: "https://www.youtube.com/@PipProgress",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:border-red-500/50",
  },
  {
    name: "Telegram",
    icon: Send,
    description: "Join our community and get free trading signals",
    href: "https://t.me/+gPAQmb3i4E45ODU0",
    color: "from-blue-400 to-blue-500",
    hoverColor: "hover:border-blue-400/50",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    description: "Chat with us and join our trading community",
    href: "https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz",
    color: "from-green-400 to-green-500",
    hoverColor: "hover:border-green-400/50",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Get Connected
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Join Our </span>
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Connect with us for daily insights, trading tips, and exclusive content.
            Your journey to financial freedom starts here.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`gradient-border p-6 card-hover group border border-transparent ${social.hoverColor} transition-colors`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${social.color} p-3.5 group-hover:scale-110 transition-transform`}
                >
                  <social.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    {social.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-white/60 text-sm">{social.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="gradient-border p-1">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Start Your Trading Journey?
                  </h3>
                  <p className="text-white/60 max-w-xl">
                    Join Chido FX Academy today and learn to trade currencies with
                    confidence. One strategy, consistent results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#signals"
                    className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-2 whitespace-nowrap glow"
                  >
                    Get Free Signals
                    <Send className="w-5 h-5" />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
