"use client";

import { TrendingUp, Send, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const footerLinks = {
  academy: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ],
  resources: [
    { name: "Free Signals", href: "#signals" },
    { name: "YouTube Channel", href: "https://www.youtube.com/@PipProgress", external: true },
    { name: "Telegram Channel", href: "https://t.me/+gPAQmb3i4E45ODU0", external: true },
    { name: "WhatsApp Community", href: "https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz", external: true },
    { name: "Register with Exness", href: "https://one.exnessonelink.com/a/33o13y13ih", external: true },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold">
                <span className="gradient-text">CHIDO FX</span>
                <span className="text-white/80 ml-1">ACADEMY</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Master currency trading with one consistent strategy. Join our
              community of successful traders and transform your financial future.
              Profit with ease.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@PipProgress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-colors group"
              >
                <span className="text-white/70 group-hover:text-red-500">
                  <YouTubeIcon />
                </span>
              </a>
              <a
                href="https://t.me/+gPAQmb3i4E45ODU0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors group"
              >
                <Send className="w-5 h-5 text-white/70 group-hover:text-blue-400" />
              </a>
              <a
                href="https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Academy</h4>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-white/40 text-sm text-center max-w-4xl mx-auto">
            <strong className="text-white/60">Risk Disclaimer:</strong> Trading
            foreign exchange on margin carries a high level of risk and may not be
            suitable for all investors. Past performance is not indicative of future
            results. The high degree of leverage can work against you as well as for
            you. Before deciding to invest in foreign exchange, you should carefully
            consider your investment objectives, level of experience, and risk
            appetite.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>&copy; {currentYear} CHIDO FX ACADEMY. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for
            traders worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
