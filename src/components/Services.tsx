"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Video,
  Building2,
  RefreshCw,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: GraduationCap,
    title: "Mentorship Program",
    description: "Master our proven one-strategy approach. No confusion, just consistent results.",
    highlight: "Most Popular",
  },
  {
    icon: Users,
    title: "One-on-One Coaching",
    description: "Get personalized guidance tailored to your goals. Accelerate your success.",
    highlight: null,
  },
  {
    icon: Video,
    title: "Weekly Zoom Meetings",
    description: "Live market analysis, trade reviews, and Q&A sessions every week.",
    highlight: null,
  },
  {
    icon: Building2,
    title: "Prop Firm Support",
    description: "Pass your prop firm challenge on the first try with our proven system.",
    highlight: "High Demand",
  },
  {
    icon: RefreshCw,
    title: "Account Flipping",
    description: "Learn to grow small accounts into substantial capital systematically.",
    highlight: null,
  },
  {
    icon: MessageCircle,
    title: "Free Telegram Signals",
    description: "Get real-time trade alerts with entry, SL, and TP levels daily.",
    highlight: "FREE",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000042] via-[#000035] to-[#000042]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#94dd00]/10 border border-[#94dd00]/20 rounded-full text-[#94dd00] text-sm font-medium mb-4">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just teach you to trade—we give you a complete system for consistent profits
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border p-6 hover:glow transition-all duration-300 group"
            >
              {service.highlight && (
                <span className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  service.highlight === "FREE"
                    ? "bg-[#94dd00] text-[#000042]"
                    : service.highlight === "Most Popular"
                    ? "bg-[#94dd00] text-[#000042]"
                    : "bg-[#94dd00] text-[#000042]"
                }`}>
                  {service.highlight}
                </span>
              )}

              <div className="w-14 h-14 rounded-xl bg-[#94dd00]/10 p-3 mb-5 group-hover:scale-110 transition-transform border border-[#94dd00]/30">
                <service.icon className="w-full h-full text-[#94dd00]" />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 text-[#94dd00] font-semibold hover:gap-4 transition-all"
          >
            See All Packages & Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
