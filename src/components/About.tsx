"use client";

import { motion } from "framer-motion";
import { Target, Clock, TrendingUp, Shield, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

const features = [
  "One proven, consistent strategy",
  "Focus on currency pairs only",
  "Intraday trading approach",
  "Hold trades 1-4 days maximum",
  "Clear entry and exit rules",
  "Strict risk management",
];

const stats = [
  { icon: Target, value: "1", label: "Strategy", desc: "Master one approach" },
  { icon: Clock, value: "1-4", label: "Days", desc: "Average hold time" },
  { icon: TrendingUp, value: "FX", label: "Focus", desc: "Currencies only" },
  { icon: Shield, value: "1-2%", label: "Risk", desc: "Per trade max" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000042] via-[#000035] to-[#000042]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#94dd00]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#94dd00]/10 border border-[#94dd00]/20 rounded-full text-[#94dd00] text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why One Strategy
              <br />
              <span className="gradient-text">Beats Them All</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Most traders fail because they jump between strategies. At Chido FX Academy,
              we teach you <span className="font-semibold text-white">ONE proven approach</span> that
              works consistently in the currency markets.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I&apos;m an intraday trader specializing in currencies. I hold trades for
              1-4 days, capturing significant moves while managing risk. This approach
              gives you the best of both worlds: substantial profits without being
              glued to your screen 24/7.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#94dd00] flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://www.youtube.com/@PipProgress"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-colors"
            >
              <Play className="w-5 h-5" />
              Watch Free Training on YouTube
            </Link>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="gradient-border p-6 text-center hover:glow transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#94dd00]/10 p-2.5 border border-[#94dd00]/30">
                    <stat.icon className="w-full h-full text-[#94dd00]" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Trust Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 p-6 bg-[#94dd00]/5 rounded-2xl border border-[#94dd00]/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#94dd00]/20 flex items-center justify-center flex-shrink-0 border border-[#94dd00]/30">
                  <Shield className="w-6 h-6 text-[#94dd00]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Risk-Controlled Trading</h4>
                  <p className="text-gray-400 text-sm">
                    We never risk more than 1-2% per trade. Your capital is protected while
                    you learn and grow.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
