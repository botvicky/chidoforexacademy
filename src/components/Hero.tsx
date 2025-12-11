"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Play, ChevronDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1-4", label: "Days Hold Time" },
  { value: "1", label: "Proven Strategy" },
  { value: "100%", label: "Currency Focus" },
];

// Seeded random for consistent SSR/client rendering
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate particles with seeded random values
const generateParticles = () => Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 1) * 100,
  y: seededRandom(i * 2) * 100,
  size: seededRandom(i * 3) * 3 + 1,
  duration: seededRandom(i * 4) * 3 + 2,
  delay: seededRandom(i * 5) * 2,
}));

const generateExhaustParticles = () => Array.from({ length: 30 }, (_, i) => ({
  id: i,
  delay: i * 0.08,
  size: seededRandom(i * 10) * 6 + 2,
  xOffset: (seededRandom(i * 11) - 0.5) * 80,
}));

const generateSmokeParticles = () => Array.from({ length: 15 }, (_, i) => ({
  id: i,
  delay: i * 0.2,
  x: (seededRandom(i * 20) - 0.5) * 60,
  size: seededRandom(i * 21) * 20 + 10,
}));

const generateDebrisParticles = () => Array.from({ length: 25 }, (_, i) => ({
  id: i,
  delay: seededRandom(i * 30) * 2,
  x: (seededRandom(i * 31) - 0.5) * 100,
  size: seededRandom(i * 32) * 4 + 1,
  duration: seededRandom(i * 33) * 1.5 + 1,
}));

export default function Hero() {
  const particles = useMemo(() => generateParticles(), []);
  const exhaustParticles = useMemo(() => generateExhaustParticles(), []);
  const smokeParticles = useMemo(() => generateSmokeParticles(), []);
  const debrisParticles = useMemo(() => generateDebrisParticles(), []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000042] via-[#000035] to-[#000042]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#94dd00]/5 via-transparent to-transparent" />

      {/* Animated floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#94dd00]/10 border border-[#94dd00]/30 rounded-full text-[var(--primary)] text-sm font-medium mb-8"
            >
              <TrendingUp className="w-4 h-4" />
              Currency Trading Excellence
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight uppercase"
            >
              <span className="text-white">Launch Your</span>
              <br />
              <span className="gradient-text">Trading Career</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl"
            >
              One consistent strategy. Proven results. Join Chido FX Academy and learn
              intraday currency trading with expert mentorship and prop firm support.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-black mb-1 ${
                    index === 0 ? "text-[var(--primary)]" :
                    index === 1 ? "text-white" :
                    "text-[var(--primary)]"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#signals"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#94dd00] to-[#7bc200] rounded-full font-bold text-lg text-[#000042] inline-flex items-center justify-center gap-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-[#94dd00]/30"
              >
                <span className="relative z-10">Get Free Signals</span>
                <TrendingUp className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/20 hover:border-[#94dd00]/50 hover:bg-[#94dd00]/5 transition-all"
              >
                <Play className="w-5 h-5" />
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Rocket Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow effect behind rocket */}
            <div className="absolute w-80 h-80 bg-[#94dd00]/10 rounded-full blur-[100px]" />

            {/* Rocket Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Rocket SVG */}
              <svg
                viewBox="0 0 200 350"
                className="w-64 h-auto md:w-80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rocket Body */}
                <defs>
                  <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000066" />
                    <stop offset="30%" stopColor="#000088" />
                    <stop offset="50%" stopColor="#0000aa" />
                    <stop offset="70%" stopColor="#000088" />
                    <stop offset="100%" stopColor="#000066" />
                  </linearGradient>
                  <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#b8f030" />
                    <stop offset="50%" stopColor="#94dd00" />
                    <stop offset="100%" stopColor="#000042" />
                  </linearGradient>
                  <linearGradient id="noseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c8ff40" />
                    <stop offset="50%" stopColor="#94dd00" />
                    <stop offset="100%" stopColor="#7bc200" />
                  </linearGradient>
                  <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#000088" />
                    <stop offset="100%" stopColor="#000055" />
                  </linearGradient>
                  <filter id="rocketGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="neonGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Rocket Nose Cone */}
                <motion.path
                  d="M100 10 L135 85 L65 85 Z"
                  fill="url(#noseGradient)"
                  filter="url(#neonGlow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
                {/* Nose highlight */}
                <path d="M100 15 L115 70 L100 75 Z" fill="rgba(255,255,255,0.2)" />

                {/* Rocket Body Main */}
                <motion.rect
                  x="65"
                  y="85"
                  width="70"
                  height="160"
                  rx="5"
                  fill="url(#rocketGradient)"
                  stroke="#94dd00"
                  strokeWidth="3"
                  filter="url(#rocketGlow)"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.6 }}
                />
                {/* Body highlight */}
                <rect x="65" y="85" width="15" height="160" rx="5" fill="rgba(255,255,255,0.05)" />

                {/* Window Frame - outer glow ring */}
                <circle cx="100" cy="140" r="40" fill="none" stroke="#94dd00" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="140" r="37" fill="#000055" stroke="#94dd00" strokeWidth="4" filter="url(#neonGlow)" />

                {/* Window Glass */}
                <circle cx="100" cy="140" r="30" fill="url(#windowGradient)" />
                {/* Window reflection */}
                <ellipse cx="92" cy="130" rx="8" ry="12" fill="rgba(255,255,255,0.15)" />

                {/* Person Inside - Head */}
                <circle cx="100" cy="130" r="12" fill="#fcd34d" />
                {/* Head highlight */}
                <ellipse cx="96" cy="126" rx="4" ry="3" fill="rgba(255,255,255,0.3)" />

                {/* Person - Face */}
                <circle cx="96" cy="128" r="2" fill="#000042" />
                <circle cx="104" cy="128" r="2" fill="#000042" />
                <path d="M96 134 Q100 138 104 134" stroke="#000042" strokeWidth="1.5" fill="none" />

                {/* Chido FX Cap */}
                <path
                  d="M85 122 Q100 110 115 122 L115 125 L85 125 Z"
                  fill="#000042"
                />
                <rect x="85" y="122" width="30" height="5" fill="#000042" rx="1" />
                <path
                  d="M82 127 L118 127 L115 130 L85 130 Z"
                  fill="#000035"
                />
                <text x="100" y="120" textAnchor="middle" fill="#94dd00" fontSize="5" fontWeight="bold">CHIDO FX</text>

                {/* Person - Body/Suit */}
                <path
                  d="M88 142 L88 160 L112 160 L112 142"
                  fill="#94dd00"
                  stroke="#7bc200"
                  strokeWidth="1"
                />

                {/* ACADEMY Text on Body */}
                <text x="100" y="155" textAnchor="middle" fill="#000042" fontSize="6" fontWeight="bold">ACADEMY</text>

                {/* Rocket Side Stripes - Enhanced */}
                <rect x="67" y="100" width="6" height="125" fill="#94dd00" filter="url(#neonGlow)" />
                <rect x="127" y="100" width="6" height="125" fill="#94dd00" filter="url(#neonGlow)" />

                {/* Additional detail lines */}
                <rect x="80" y="180" width="40" height="2" fill="#94dd00" opacity="0.5" />
                <rect x="80" y="200" width="40" height="2" fill="#94dd00" opacity="0.5" />

                {/* Left Fin - Enhanced */}
                <motion.path
                  d="M65 200 L30 285 L65 260 Z"
                  fill="url(#finGradient)"
                  stroke="#94dd00"
                  strokeWidth="3"
                  filter="url(#rocketGlow)"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                />
                {/* Fin highlight */}
                <path d="M65 205 L45 260 L65 250 Z" fill="rgba(255,255,255,0.1)" />

                {/* Right Fin - Enhanced */}
                <motion.path
                  d="M135 200 L170 285 L135 260 Z"
                  fill="url(#finGradient)"
                  stroke="#94dd00"
                  strokeWidth="3"
                  filter="url(#rocketGlow)"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                />

                {/* Rocket Bottom */}
                <path
                  d="M65 240 L65 260 Q100 285 135 260 L135 240"
                  fill="#000055"
                />

                {/* Engine Nozzle - Enhanced */}
                <ellipse cx="100" cy="270" rx="25" ry="10" fill="#94dd00" filter="url(#neonGlow)" />
                <ellipse cx="100" cy="270" rx="18" ry="7" fill="#7bc200" />
                <ellipse cx="100" cy="270" rx="12" ry="5" fill="#000042" />
              </svg>

              {/* Rocket Exhaust/Fire Animation */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                {/* Outer Fire Glow */}
                <motion.div
                  animate={{
                    scaleY: [1, 1.4, 1],
                    scaleX: [1, 1.2, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{ duration: 0.15, repeat: Infinity }}
                  className="absolute -top-2 w-20 h-32 bg-gradient-to-t from-transparent via-orange-500/50 to-yellow-400/70 rounded-full blur-xl"
                />

                {/* Main Flame - Orange/Yellow */}
                <motion.div
                  animate={{
                    scaleY: [1, 1.5, 1.2, 1.4, 1],
                    scaleX: [1, 0.9, 1.1, 0.95, 1],
                    opacity: [0.9, 1, 0.85, 1, 0.9],
                  }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="w-14 h-28 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full blur-sm"
                  style={{ clipPath: "polygon(50% 100%, 10% 0%, 90% 0%)" }}
                />

                {/* Secondary Flame - Green/Yellow */}
                <motion.div
                  animate={{
                    scaleY: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 0.18, repeat: Infinity }}
                  className="absolute top-0 w-10 h-24 bg-gradient-to-t from-orange-500 via-[#94dd00] to-[#c8ff40] rounded-full blur-sm"
                  style={{ clipPath: "polygon(50% 100%, 15% 0%, 85% 0%)" }}
                />

                {/* Inner Core Flame - White/Yellow */}
                <motion.div
                  animate={{
                    scaleY: [1, 1.2, 0.9, 1.1, 1],
                    opacity: [0.95, 1, 0.9, 1, 0.95],
                  }}
                  transition={{ duration: 0.12, repeat: Infinity }}
                  className="absolute top-0 w-6 h-20 bg-gradient-to-t from-yellow-400 via-yellow-200 to-white rounded-full blur-[2px]"
                  style={{ clipPath: "polygon(50% 100%, 20% 0%, 80% 0%)" }}
                />

                {/* Exhaust Particles - Multicolor */}
                {exhaustParticles.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      background: p.id % 3 === 0 ? '#ff6b35' : p.id % 3 === 1 ? '#94dd00' : '#ffd700',
                    }}
                    initial={{ y: 0, opacity: 1, x: 0, scale: 1 }}
                    animate={{
                      y: [0, 120],
                      opacity: [1, 0],
                      x: [0, p.xOffset],
                      scale: [1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      delay: p.delay,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Smoke Particles */}
                {smokeParticles.map((p) => (
                  <motion.div
                    key={`smoke-${p.id}`}
                    className="absolute rounded-full bg-gray-400/30"
                    style={{
                      width: p.size,
                      height: p.size,
                    }}
                    initial={{ y: 20, opacity: 0.4, x: 0, scale: 0.5 }}
                    animate={{
                      y: [20, 150],
                      opacity: [0.4, 0],
                      x: [0, p.x],
                      scale: [0.5, 2],
                    }}
                    transition={{
                      duration: 2,
                      delay: p.delay,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Falling Debris/Sparks */}
              <div className="absolute inset-0">
                {debrisParticles.map((d) => (
                  <motion.div
                    key={`debris-${d.id}`}
                    className="absolute rounded-full"
                    style={{
                      width: d.size,
                      height: d.size,
                      background: d.id % 4 === 0 ? '#94dd00' : d.id % 4 === 1 ? '#ffd700' : d.id % 4 === 2 ? '#ff6b35' : '#ffffff',
                      left: `${50 + d.x * 0.3}%`,
                      top: '70%',
                      boxShadow: d.id % 2 === 0 ? '0 0 6px currentColor' : 'none',
                    }}
                    animate={{
                      y: [0, 200],
                      x: [0, d.x],
                      opacity: [1, 0],
                      scale: [1, 0],
                    }}
                    transition={{
                      duration: d.duration,
                      delay: d.delay,
                      repeat: Infinity,
                      ease: "easeIn",
                    }}
                  />
                ))}
              </div>

              {/* Speed Lines */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -left-20 top-1/2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [-50, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                    className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#94dd00] mb-4"
                  />
                ))}
              </motion.div>

              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -right-20 top-1/2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [50, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                    className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#94dd00] mb-4"
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex justify-center mt-2"
          >
            <ChevronDown className="w-5 h-5 text-[var(--primary)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000042] to-transparent" />
    </section>
  );
}
