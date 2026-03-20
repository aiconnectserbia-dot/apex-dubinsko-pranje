import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-brown" />

      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[80px]" />

      {/* Decorative floating images */}
      <div className="absolute top-20 right-10 md:right-20 w-32 md:w-48 h-40 md:h-60 opacity-20 rounded-lg overflow-hidden rotate-6">
        <img
          src="https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/2a2399538_IMG_4435.jpg"
          alt="Dubinsko pranje tepiha Pančevo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-20 left-10 md:left-20 w-28 md:w-44 h-36 md:h-52 opacity-15 rounded-lg overflow-hidden -rotate-6">
        <img
          src="https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/2b90fef5b_IMG_4436.jpg"
          alt="Dubinsko pranje nameštaja"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

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