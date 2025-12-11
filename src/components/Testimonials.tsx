"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    role: "Full-time Trader",
    content:
      "CHIDO FX Academy transformed my trading. The one-strategy approach eliminated my confusion and helped me become consistently profitable.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Part-time Trader",
    content:
      "The weekly Zoom meetings are invaluable. Being able to discuss trades and get real-time feedback accelerated my learning curve tremendously.",
    rating: 5,
  },
  {
    name: "David O.",
    role: "Prop Firm Trader",
    content:
      "Thanks to the prop firm support, I passed my challenge on the first attempt. The discipline and strategy taught here is world-class.",
    rating: 5,
  },
  {
    name: "Amanda L.",
    role: "Beginner Trader",
    content:
      "Starting from zero knowledge, the mentorship program gave me everything I needed. The one-on-one sessions were particularly helpful.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Account Flipper",
    content:
      "The account flipping strategy is genius. Grew my $100 account to over $2000 in 3 months following the exact system taught.",
    rating: 5,
  },
  {
    name: "Linda M.",
    role: "Signal Channel Member",
    content:
      "The free signals are incredibly accurate. The risk management guidance alone is worth way more than the minimum deposit required.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

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
            Success Stories
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Join hundreds of traders who have transformed their trading journey with
            CHIDO FX Academy.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border p-6 card-hover"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-blue-500/30 mb-4" />

              {/* Content */}
              <p className="text-white/70 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
