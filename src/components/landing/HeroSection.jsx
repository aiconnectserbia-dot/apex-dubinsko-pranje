import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield } from 'lucide-react';

// Real photos from the business
const floatingImages = [
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg', style: { top: '8%',  left: '3%',  width: 160, height: 200, rotate: -8,  delay: 0 } },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg', style: { top: '5%',  right: '4%', width: 140, height: 185, rotate: 7,   delay: 0.4 } },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg', style: { top: '42%', left: '1%', width: 130, height: 170, rotate: -5,  delay: 0.8 } },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg', style: { top: '40%', right: '2%',width: 150, height: 190, rotate: 6,   delay: 0.2 } },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg', style: { bottom:'8%', left: '5%', width: 145, height: 175, rotate: 4,   delay: 1.0 } },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg', style: { bottom:'6%', right: '3%',width: 155, height: 195, rotate: -7,  delay: 0.6 } },
];

// Floating droplet particles
const droplets = [
  { size: 6,  top: '15%', left: '20%',  delay: 0,   dur: 4 },
  { size: 4,  top: '25%', right: '15%', delay: 1,   dur: 5 },
  { size: 8,  top: '60%', left: '12%',  delay: 2,   dur: 3.5 },
  { size: 5,  top: '70%', right: '18%', delay: 0.5, dur: 4.5 },
  { size: 3,  top: '35%', left: '35%',  delay: 1.5, dur: 6 },
  { size: 7,  top: '80%', left: '40%',  delay: 2.5, dur: 4 },
  { size: 4,  top: '20%', right: '35%', delay: 3,   dur: 5.5 },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Gold radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[80px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating business photos — hidden on small screens */}
      <div className="hidden md:block">
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 1, delay: img.style.delay },
              y: { duration: img.style.delay + 4, repeat: Infinity, ease: 'easeInOut', delay: img.style.delay }
            }}
            className="absolute rounded-xl overflow-hidden border border-gold/20 shadow-xl shadow-black/40"
            style={{
              top: img.style.top,
              left: img.style.left,
              right: img.style.right,
              bottom: img.style.bottom,
              width: img.style.width,
              height: img.style.height,
              rotate: `${img.style.rotate}deg`,
              opacity: 0.22,
            }}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
            {/* Gold overlay tint */}
            <div className="absolute inset-0 bg-gold/5" />
          </motion.div>
        ))}
      </div>

      {/* Floating droplet particles */}
      {droplets.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/20 blur-[1px]"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            right: d.right,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}

      {/* Water ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
          initial={{ width: 100, height: 100, opacity: 0.3 }}
          animate={{ width: 700, height: 700, opacity: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay: i * 1.7 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gold/50" />
          <span className="text-gold/80 text-xs font-inter tracking-[0.3em] uppercase">Premium servis — Pančevo</span>
          <div className="h-px w-12 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Čistoća na{' '}
          <span className="text-gold italic">najvišem</span>{' '}
          nivou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-inter text-cream/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Profesionalno dubinsko pranje nameštaja, tepiha i automobila — Pančevo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#kontakt"
            className="px-10 py-4 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
          >
            Zatražite termin
          </a>
          <a
            href="#cenovnik"
            className="px-10 py-4 border border-gold/30 text-gold font-inter text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Pogledajte cene
          </a>
        </motion.div>

        {/* Mini features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { icon: Sparkles, text: 'Dubinsko čišćenje' },
            { icon: Shield, text: 'Bezbedno za decu' },
            { icon: Droplets, text: 'Uklanja 99% bakterija' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-cream/40">
              <Icon size={16} className="text-gold/60" />
              <span className="text-xs font-inter tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-brown to-transparent" />
    </section>
  );
}