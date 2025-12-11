"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, MessageCircle, Clock } from "lucide-react";

const pricingPlans = [
  {
    name: "Beginner Course",
    price: "$50",
    originalPrice: null,
    description: "Perfect for those starting their trading journey",
    features: [
      "Forex Trading Basics",
      "Platform Setup & Navigation",
      "Risk Management Fundamentals",
      "1 Month Free Signals",
      "Weekly Zoom Meetings",
    ],
    icon: Zap,
    popular: false,
    limitedOffer: false,
  },
  {
    name: "Full Course",
    price: "$75",
    originalPrice: null,
    description: "Complete trading curriculum for serious traders",
    features: [
      "Complete Trading Curriculum",
      "Advanced Strategy Training",
      "Technical & Fundamental Analysis",
      "2 Months Free Signals",
      "Weekly Zoom Meetings",
    ],
    icon: Star,
    popular: false,
    limitedOffer: false,
  },
  {
    name: "Full Course + Membership",
    price: "$120",
    originalPrice: "$150",
    description: "Best value with lifetime community access",
    features: [
      "Complete Trading Curriculum",
      "Lifetime Community Access",
      "Weekly Live Trading Sessions",
      "Unlimited Signals",
      "Priority Zoom Meetings",
      "Trade Review & Feedback",
    ],
    icon: Crown,
    popular: true,
    limitedOffer: true,
  },
  {
    name: "Full Course + One-on-One",
    price: "$180",
    originalPrice: null,
    description: "Premium personalized mentorship experience",
    features: [
      "Complete Trading Curriculum",
      "Personal Mentor Assigned",
      "One-on-One Zoom Calls",
      "Customized Trading Plan",
      "Unlimited Signals",
      "24/7 Support Access",
    ],
    icon: MessageCircle,
    popular: false,
    limitedOffer: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

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
            Investment in Your Future
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Choose Your </span>
            <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Select the package that fits your goals. All courses include our proven
            one-strategy approach to currency trading.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative gradient-border p-6 card-hover ${
                plan.popular ? "ring-2 ring-amber-500/50" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              {/* Limited Time Offer Badge */}
              {plan.limitedOffer && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs font-bold text-white flex items-center gap-1"
                >
                  <Clock className="w-3 h-3" />
                  LIMITED OFFER
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-amber-500 to-orange-500"
                    : "bg-gradient-to-r from-blue-500 to-purple-500"
                } p-2.5 mb-4 mt-2`}
              >
                <plan.icon className="w-full h-full text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/50 text-sm mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl text-white/40 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded">
                      SAVE $30
                    </span>
                  </div>
                )}
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "gradient-text-gold" : "gradient-text"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-white/50 text-sm ml-2">one-time</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-amber-400" : "text-blue-400"
                      }`}
                    />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-full text-center font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/30"
                    : "btn-primary text-white"
                }`}
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/50 mb-4">
            Have questions about which course is right for you?
          </p>
          <a
            href="https://chat.whatsapp.com/JTITX3m5RCG0p1nv60w5Kz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
