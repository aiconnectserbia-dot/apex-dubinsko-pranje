import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield } from 'lucide-react';

const bgImages = [
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg',
  'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg',
];

// Mosaic grid positions — 2x2 behind content, slightly offset for depth
const mosaic = [
  { src: bgImages[0], top: '5%',    left: '8%',   width: 200, height: 260, rotate: -3 },
  { src: bgImages[1], top: '5%',    right: '8%',  width: 180, height: 240, rotate: 3  },
  { src: bgImages[2], bottom: '6%', left: '8%',   width: 190, height: 250, rotate: 2  },
  { src: bgImages[3], bottom: '6%', right: '8%',  width: 195, height: 255, rotate: -2 },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Mosaic background images */}
      {mosaic.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: i * 0.2 }}
          className="absolute rounded-2xl overflow-hidden border border-gold/10"
          style={{
            top: img.top,
            left: img.left,
            right: img.right,
            bottom: img.bottom,
            width: img.width,
            height: img.height,
            rotate: `${img.rotate}deg`,
          }}
        >
          <img src={img.src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-brown/80" />
        </motion.div>
      ))}

      {/* Vignette — darkens edges and center-clears for text readability */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(10,4,0,0.15) 0%, rgba(10,4,0,0.75) 70%, rgba(10,4,0,0.95) 100%)'
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Soft gold center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gold/50" />
          <span className="text-gold/80 text-xs font-inter tracking-[0.3em] uppercase">Premium servis — Pančevo</span>
          <div className="h-px w-12 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Čistoća na{' '}
          <span className="text-gold italic">najvišem</span>{' '}
          nivou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-inter text-cream/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Profesionalno dubinsko pranje nameštaja, tepiha i automobila — Pančevo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#kontakt"
            className="group relative px-10 py-4 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
          >
            <span className="relative z-10">Zatražite termin</span>
            <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#cenovnik"
            className="group px-10 py-4 border border-gold/40 text-gold font-inter text-sm tracking-wider uppercase rounded-sm backdrop-blur-sm bg-gold/5 hover:bg-gold/15 hover:border-gold/70 transition-all duration-300"
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
            { icon: Shield,   text: 'Bezbedno za decu' },
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-brown to-transparent" />
    </section>
  );
}