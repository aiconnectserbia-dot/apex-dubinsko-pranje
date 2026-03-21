import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield, Phone } from 'lucide-react';

const bgImages = [
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg',
];

const badges = [
  { icon: Sparkles, text: 'Dubinsko čišćenje' },
  { icon: Shield,   text: 'Bezbedno za decu' },
  { icon: Droplets, text: 'Uklanja bakterije' },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-dark-brown">

      {/* ── MOBILE LAYOUT ── */}
      <div className="flex flex-col md:hidden min-h-screen">

        {/* Full-bleed background image with strong gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={bgImages[0]}
            alt="Dubinsko pranje"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark gradient — heavy at top (navbar area) and bottom, lighter in middle */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.55) 35%, rgba(10,4,0,0.70) 65%, rgba(10,4,0,0.97) 100%)'
          }} />
          {/* Subtle warm tint */}
          <div className="absolute inset-0 bg-[#3d1a00]/20" />
        </div>

        {/* Text content — centered vertically */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-7 py-28 text-center">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold/90 text-[10px] font-inter tracking-[0.3em] uppercase">Dubinsko pranje — Pančevo</span>
            <div className="h-px w-8 bg-gold/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-playfair font-bold text-cream leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 11vw, 3.2rem)' }}
          >
            Čistoća na{' '}
            <span className="text-gold italic">najvišem</span>{' '}
            nivou
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-inter text-cream/65 text-sm leading-relaxed mb-10 max-w-[280px] mx-auto"
          >
            Profesionalno dubinsko pranje nameštaja, tepiha i automobila — dolazimo na vašu adresu
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col gap-3 w-full max-w-[260px]"
          >
            <a
              href="tel:+381611568748"
              className="text-center py-4 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Pozovite nas
            </a>
            <a
              href="#cenovnik"
              className="text-center py-3.5 border border-gold/50 text-gold font-inter text-sm tracking-wider uppercase rounded-sm bg-gold/8 backdrop-blur-sm hover:bg-gold/15 transition-all duration-300"
            >
              Pogledajte cene
            </a>
          </motion.div>

          {/* Phone number display */}
          <motion.a
            href="tel:+381611568748"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex items-center gap-3 border border-gold/30 rounded-full px-6 py-3 bg-gold/8 backdrop-blur-sm hover:bg-gold/15 hover:border-gold/60 transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <Phone size={13} className="text-gold" />
            </div>
            <span className="font-inter text-cream/90 text-sm font-medium tracking-wide">+381 61 156 8748</span>
          </motion.a>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 flex items-center justify-center gap-6 flex-wrap"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-cream/45">
                <Icon size={12} className="text-gold/60" />
                <span className="text-[11px] font-inter tracking-wide">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-brown to-transparent z-10" />
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex min-h-screen flex-col items-center justify-center relative">

        {/* Background photo collage — 2x2 grid covering full hero */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {bgImages.map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>

        {/* Dark overlay — strong center fade so text is readable, slight vignette */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,4,0,0.88) 0%, rgba(10,4,0,0.70) 30%, rgba(10,4,0,0.72) 70%, rgba(10,4,0,0.92) 100%)'
        }} />
        {/* Center radial darkening behind text */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(10,4,0,0.55) 0%, rgba(10,4,0,0.0) 100%)'
        }} />
        {/* Warm brown tint */}
        <div className="absolute inset-0 bg-[#3d1a00]/25" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Gold center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold/8 blur-[90px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-5 w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-gold/80 text-xs font-inter tracking-[0.28em] uppercase">Dubinsko pranje — Pančevo</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>

          <h1 className="font-playfair font-bold text-cream mb-5 leading-[1.12]" style={{ fontSize: 'clamp(2.1rem, 8vw, 4.5rem)' }}>
            Čistoća na{' '}
            <span className="text-gold italic">najvišem</span>{' '}
            nivou
          </h1>

          <p className="font-inter text-cream/55 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Profesionalno dubinsko pranje nameštaja, tepiha i automobila — dolazimo na vašu adresu
          </p>

          <div className="flex items-center justify-center gap-3">
            <a href="tel:+381611568748" className="text-center px-8 py-3.5 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
              Pozovite nas
            </a>
            <a href="#cenovnik" className="text-center px-8 py-3.5 border border-gold/40 text-gold font-inter text-sm tracking-wider uppercase rounded-sm bg-gold/5 hover:bg-gold/15 hover:border-gold/60 transition-all duration-300">
              Pogledajte cene
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-cream/35">
                <Icon size={13} className="text-gold/50" />
                <span className="text-[11px] font-inter tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-dark-brown to-transparent" />
      </div>
    </section>
  );
}