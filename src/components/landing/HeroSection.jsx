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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Desktop corner images */}
      <div className="hidden md:block absolute top-6 left-6 w-44 h-60 rounded-xl overflow-hidden border border-gold/10" style={{transform:'rotate(-3deg)', opacity: 0.9}}>
        <img src={bgImages[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden md:block absolute top-6 right-6 w-40 h-56 rounded-xl overflow-hidden border border-gold/10" style={{transform:'rotate(3deg)', opacity: 0.9}}>
        <img src={bgImages[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden md:block absolute bottom-16 left-6 w-40 h-56 rounded-xl overflow-hidden border border-gold/10" style={{transform:'rotate(2deg)', opacity: 0.9}}>
        <img src={bgImages[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>
      <div className="hidden md:block absolute bottom-16 right-6 w-44 h-60 rounded-xl overflow-hidden border border-gold/10" style={{transform:'rotate(-2deg)', opacity: 0.9}}>
        <img src={bgImages[3]} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-brown/75" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 hidden md:block" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(10,4,0,0.1) 0%, rgba(10,4,0,0.7) 65%, rgba(10,4,0,0.97) 100%)'
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Soft gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold/5 blur-[80px]" />

      {/* ─── Main content ─── */}
      <div className="relative z-10 text-center px-5 w-full max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center pt-24 pb-6 md:pt-0 md:pb-0">

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-gold/80 text-[10px] sm:text-xs font-inter tracking-[0.28em] uppercase">Dubinsko pranje — Pančevo</span>
          <div className="h-px w-8 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-playfair font-bold text-cream mb-5 leading-[1.12]"
          style={{ fontSize: 'clamp(2.1rem, 8vw, 4.5rem)' }}
        >
          Čistoća na{' '}
          <span className="text-gold italic">najvišem</span>{' '}
          nivou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-inter text-cream/55 text-sm sm:text-base max-w-sm sm:max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Profesionalno dubinsko pranje nameštaja, tepiha i automobila — dolazimo na vašu adresu
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none"
        >
          <a
            href="#kontakt"
            className="text-center px-8 py-3.5 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            Zatražite termin
          </a>
          <a
            href="#cenovnik"
            className="text-center px-8 py-3.5 border border-gold/40 text-gold font-inter text-sm tracking-wider uppercase rounded-sm bg-gold/5 hover:bg-gold/15 hover:border-gold/60 transition-all duration-300"
          >
            Pogledajte cene
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex items-center justify-center gap-5 sm:gap-8 flex-wrap"
        >
          {[
            { icon: Sparkles, text: 'Dubinsko čišćenje' },
            { icon: Shield,   text: 'Bezbedno za decu' },
            { icon: Droplets, text: 'Uklanja bakterije' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-cream/35">
              <Icon size={13} className="text-gold/50" />
              <span className="text-[11px] font-inter tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Mobile image strip at bottom ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        className="relative z-10 flex md:hidden gap-2.5 px-5 pb-10 w-full overflow-hidden"
      >
        {bgImages.map((src, i) => (
          <div
            key={i}
            className="flex-1 rounded-lg overflow-hidden border border-gold/15"
            style={{ height: 90 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-dark-brown/40" />
          </div>
        ))}
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-dark-brown to-transparent" />
    </section>
  );
}