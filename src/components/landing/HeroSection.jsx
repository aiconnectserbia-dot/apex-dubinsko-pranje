import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield } from 'lucide-react';

const bgImages = [
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg',
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Corner images — hidden on very small screens, shown from sm up */}
      <div className="hidden sm:block absolute top-6 left-6 w-36 md:w-48 h-48 md:h-64 rounded-xl overflow-hidden border border-gold/10 opacity-0 animate-[fadeIn_1.4s_ease_0.2s_forwards]" style={{transform:'rotate(-3deg)'}}>
        <img src={bgImages[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden sm:block absolute top-6 right-6 w-36 md:w-44 h-44 md:h-60 rounded-xl overflow-hidden border border-gold/10 opacity-0 animate-[fadeIn_1.4s_ease_0.4s_forwards]" style={{transform:'rotate(3deg)'}}>
        <img src={bgImages[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden sm:block absolute bottom-16 left-6 w-36 md:w-44 h-44 md:h-60 rounded-xl overflow-hidden border border-gold/10 opacity-0 animate-[fadeIn_1.4s_ease_0.6s_forwards]" style={{transform:'rotate(2deg)'}}>
        <img src={bgImages[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden sm:block absolute bottom-16 right-6 w-36 md:w-48 h-48 md:h-64 rounded-xl overflow-hidden border border-gold/10 opacity-0 animate-[fadeIn_1.4s_ease_0.8s_forwards]" style={{transform:'rotate(-2deg)'}}>
        <img src={bgImages[3]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(10,4,0,0.1) 0%, rgba(10,4,0,0.7) 65%, rgba(10,4,0,0.97) 100%)'
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Soft gold center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[90px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-gold/80 text-xs font-inter tracking-[0.25em] uppercase">Dubinsko pranje — Pančevo</span>
          <div className="h-px w-8 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-playfair text-[2.4rem] leading-[1.15] sm:text-5xl md:text-7xl font-bold text-cream mb-5"
        >
          Čistoća na{' '}
          <span className="text-gold italic">najvišem</span>{' '}
          nivou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-inter text-cream/55 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Profesionalno dubinsko pranje nameštaja, tepiha i automobila — Pančevo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#kontakt"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            Zatražite termin
          </a>
          <a
            href="#cenovnik"
            className="w-full sm:w-auto text-center px-8 py-3.5 border border-gold/40 text-gold font-inter text-sm tracking-wider uppercase rounded-sm bg-gold/5 hover:bg-gold/15 hover:border-gold/60 transition-all duration-300"
          >
            Pogledajte cene
          </a>
        </motion.div>

        {/* Mini features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          {[
            { icon: Sparkles, text: 'Dubinsko čišćenje' },
            { icon: Shield,   text: 'Bezbedno za decu' },
            { icon: Droplets, text: 'Uklanja bakterije' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-cream/35">
              <Icon size={14} className="text-gold/50" />
              <span className="text-xs font-inter tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-brown to-transparent" />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}