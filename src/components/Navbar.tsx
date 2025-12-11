"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Free Signals", href: "#signals" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
];

// Calculate time until next 1am Johannesburg time (UTC+2)
const getTimeUntilReset = () => {
  const now = new Date();

  // Get current time in Johannesburg (UTC+2)
  const johannesburgOffset = 2 * 60; // UTC+2 in minutes
  const localOffset = now.getTimezoneOffset(); // Local offset in minutes (negative for ahead of UTC)
  const totalOffsetMs = (johannesburgOffset + localOffset) * 60 * 1000;

  const johannesburgTime = new Date(now.getTime() + totalOffsetMs);

  // Calculate next 1am in Johannesburg
  const next1am = new Date(johannesburgTime);
  next1am.setHours(1, 0, 0, 0);

  // If it's already past 1am today, set to tomorrow
  if (johannesburgTime >= next1am) {
    next1am.setDate(next1am.getDate() + 1);
  }

  // Calculate difference in milliseconds, then convert back to local time reference
  const diffMs = next1am.getTime() - johannesburgTime.getTime();

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [countdownMounted, setCountdownMounted] = useState(false);

  useEffect(() => {
    setCountdownMounted(true);

    const updateCountdown = () => {
      setCountdown(getTimeUntilReset());
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Urgency Banner */}
      <div className="urgency-banner text-center py-2 text-sm font-bold">
        <div className="flex items-center justify-center gap-2 flex-wrap px-2">
          <Flame className="w-4 h-4 flex-shrink-0" />
          <span>LIMITED TIME: Get 20% OFF Full Course + Membership!</span>
          <div className="flex items-center gap-1.5 bg-[#000042]/30 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono font-black tracking-wider">
              {countdownMounted
                ? `${formatTime(countdown.hours)}:${formatTime(countdown.minutes)}:${formatTime(countdown.seconds)}`
                : "23:59:59"
              }
            </span>
          </div>
          <Flame className="w-4 h-4 flex-shrink-0" />
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#000042]/95 backdrop-blur-lg shadow-sm shadow-[#94dd00]/10"
            : "bg-[#000042]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Chido FX Academy"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[var(--primary)] transition-colors relative group text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              <Link
                href="#signals"
                className="btn-primary px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2"
              >
                Start Free
                <span className="live-dot" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#000042]/95 backdrop-blur-lg border-t border-[#94dd00]/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-[var(--primary)] transition-colors py-2 text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#signals"
                  onClick={() => setIsOpen(false)}
                  className="block btn-primary px-6 py-3 rounded-full font-bold text-center mt-4"
                >
                  Start Free Today
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
