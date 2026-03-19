import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Cenovnik', href: '#cenovnik' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Recenzije', href: '#recenzije' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-brown/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img
            src="https://media.base44.com/images/public/69bc11715588f1a8620fc5f8/26dde6a75_Photoroom_20260319_164513.PNG"
            alt="APEX Dubinsko Pranje logo"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm font-inter tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-4 px-6 py-2.5 bg-gold text-dark-brown font-inter font-semibold text-sm rounded-sm hover:bg-gold-light transition-all duration-300 tracking-wide uppercase"
          >
            Zatražite termin
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gold">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-brown/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 hover:text-gold transition-colors text-sm font-inter tracking-wide uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-gold text-dark-brown font-inter font-semibold text-sm text-center rounded-sm"
              >
                Zatražite termin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}