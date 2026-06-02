'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <span style={{ color: '#151569' }} className="font-bold tracking-widest uppercase text-xs mb-4 block">
              About 4Biz International
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Pioneering Enterprise Intelligence & Infrastructure
            </h2>
            <p className="text-black/70 text-lg mb-8 leading-relaxed">
              We bridge the gap between complex enterprise requirements and seamless digital execution. Our modular ERP solutions and secure infrastructure are designed for organizations that demand absolute reliability and scale.
            </p>
            
            <button 
              style={{ backgroundColor: '#151569' }} 
              className="flex items-center space-x-2 text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Content: 3D-Style Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Zap, title: "Agile Systems", desc: "Customized ERPs that adapt to your unique supply chain." },
              { icon: ShieldCheck, title: "Cyber Resilience", desc: "Advanced threat auditing to protect critical assets." },
              { icon: Globe, title: "Global Infrastructure", desc: "Seamless cloud migration and managed server support." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[#151569]/20 hover:shadow-2xl transition-all duration-300 flex items-start space-x-5"
              >
                <div style={{ backgroundColor: '#151569' }} className="p-3 text-white rounded-xl shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">{feature.title}</h4>
                  <p className="text-black/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}