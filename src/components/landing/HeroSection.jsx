import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield } from 'lucide-react';

const floatingImages = [
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg', style: { top: '5%',  left: '5%',  width: 280, height: 340, rotate: -4 }, delay: 0 },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg', style: { top: '0%',  left: '38%', width: 220, height: 260, rotate: 2  }, delay: 0.3 },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg', style: { top: '5%',  right: '4%', width: 260, height: 320, rotate: 3  }, delay: 0.6 },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg', style: { bottom:'4%', left: '4%', width: 240, height: 290, rotate: -3 }, delay: 0.2 },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg', style: { bottom:'2%', left: '36%',width: 200, height: 250, rotate: -2 }, delay: 0.5 },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg', style: { bottom:'3%', right: '3%',width: 260, height: 300, rotate: 4  }, delay: 0.8 },
];

const droplets = [
  { size: 5, top: '20%', left: '22%',  delay: 0,   dur: 5 },
  { size: 3, top: '30%', right: '20%', delay: 1.2, dur: 4.5 },
  { size: 6, top: '65%', left: '15%',  delay: 2,   dur: 4 },
  { size: 4, top: '72%', right: '16%', delay: 0.6, dur: 5.5 },
  { size: 3, top: '40%', left: '42%',  delay: 1.8, dur: 6 },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Floating business photos — positioned as background behind content */}
      <div className="hidden md:block">
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 1.5, delay: img.delay },
              y: { duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: img.delay }
            }}
            className="absolute rounded-xl overflow-hidden border border-gold/15 shadow-2xl shadow-black/60"
            style={{
              top: img.style.top,
              left: img.style.left,
              right: img.style.right,
              bottom: img.style.bottom,
              width: img.style.width,
              height: img.style.height,
              rotate: `${img.style.rotate}deg`,
              zIndex: 0,
            }}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
            {/* Heavy dark overlay so they don't compete with text */}
            <div className="absolute inset-0 bg-dark-brown/75" />
            {/* Subtle gold tint */}
            <div className="absolute inset-0 bg-gold/5" />
          </motion.div>
        ))}
      </div>

      {/* Central radial glow on top of images */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(10,4,0,0) 30%, rgba(10,4,0,0.85) 100%)'
      }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Gold center glow */}
      <div className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/6 blur-[100px]" />

      {/* Floating droplet particles */}
      {droplets.map((d, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] rounded-full bg-gold/25 blur-[1px]"
          style={{ width: d.size, height: d.size, top: d.top, left: d.left, right: d.right }}
          animate={{ y: [0, -16, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}

      {/* Water ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/8"
          initial={{ width: 80, height: 80, opacity: 0.25 }}
          animate={{ width: 600, height: 600, opacity: 0 }}
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-brown to-transparent z-[3]" />
    </section>
  );
}