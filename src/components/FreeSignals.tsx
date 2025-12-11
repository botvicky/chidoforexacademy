"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Wallet,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Gift,
  Zap,
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Register with Exness",
    description: "Create your free trading account using our partner link",
    action: "Register Free",
    link: "https://one.exnessonelink.com/a/33o13y13ih",
  },
  {
    step: 2,
    icon: Wallet,
    title: "Deposit $20 Minimum",
    description: "Fund your account to start trading (you keep 100% of your money)",
    action: "Fund Account",
    link: "https://one.exnessonelink.com/a/33o13y13ih",
  },
  {
    step: 3,
    icon: MessageCircle,
    title: "Get Instant Access",
    description: "Join our VIP Telegram channel with daily signals",
    action: "Join Now",
    link: "https://t.me/+gPAQmb3i4E45ODU0",
  },
];

const benefits = [
  "Daily trade signals",
  "Entry & exit points",
  "Stop loss levels",
  "Take profit targets",
  "Market analysis",
  "24/7 community support",
];

export default function FreeSignals() {
  return (
    <section id="signals" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000042] via-[#000035] to-[#000042]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#94dd00]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#94dd00]/10 border border-[#94dd00]/20 rounded-full text-[#94dd00] text-sm font-semibold mb-4">
            <Gift className="w-4 h-4" />
            100% Free Access
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Get <span className="gradient-text">Free Trading Signals</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Follow 3 simple steps and start receiving profitable signals today.
            No hidden fees, no catches—just pure value.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#94dd00]/50 to-[#94dd00]/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#94dd00] rounded-full" />
                </div>
              )}

              <div className="gradient-border p-8 text-center h-full hover:glow transition-all">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#94dd00] text-[#000042] flex items-center justify-center text-sm font-bold shadow-lg">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#94dd00]/10 p-4 border border-[#94dd00]/30">
                  <item.icon className="w-full h-full text-[#94dd00]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#94dd00]/10 border border-[#94dd00]/30 text-[#94dd00] rounded-full font-semibold hover:bg-[#94dd00] hover:text-[#000042] transition-colors"
                >
                  {item.action}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border p-8 md:p-12 glow-lime"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Benefits */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-[#94dd00]" />
                <span className="text-[#94dd00] font-semibold">What&apos;s Included FREE</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#94dd00] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-4">
                Join <span className="font-bold text-white">500+ traders</span> already profiting
              </p>
              <a
                href="https://one.exnessonelink.com/a/33o13y13ih"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-gold px-8 py-4 rounded-full font-bold text-lg shine"
              >
                Start Getting Free Signals
              </a>
              <p className="text-gray-500 text-sm mt-3">
                Takes less than 2 minutes to set up
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
