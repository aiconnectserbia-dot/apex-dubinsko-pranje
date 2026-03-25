import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-brown border-t border-gold/15 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand */}
          <div>
            <span className="font-playfair text-3xl font-bold text-gold tracking-wider">APEX</span>
            <p className="font-inter text-cream/45 text-sm mt-2 leading-relaxed">
              Profesionalno dubinsko pranje nameštaja, tepiha i automobila — Pančevo
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-inter text-gold/60 text-[11px] uppercase tracking-widest mb-4 font-medium">Navigacija</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Usluge', href: '#usluge' },
                { label: 'Cenovnik', href: '#cenovnik' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/55 hover:text-gold text-sm font-inter transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div id="kontakt">
            <p className="font-inter text-gold/60 text-[11px] uppercase tracking-widest mb-4 font-medium">Kontakt</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                <span className="font-inter text-cream/70 text-sm">+381 61 156 8748</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold/60 flex-shrink-0" />
                <span className="font-inter text-cream/70 text-sm">dubinskopranjeapex@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gold/60 flex-shrink-0" />
                <span className="font-inter text-cream/70 text-sm">Pančevo, Srbija</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 text-center">
          <p className="font-inter text-cream/25 text-xs">
            © 2026 APEX Dubinsko Pranje. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}