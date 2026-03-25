import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-brown border-t border-gold/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <span className="font-playfair text-2xl font-bold text-gold tracking-wider">APEX</span>
            <p className="font-inter text-cream/40 text-xs mt-1">Profesionalno dubinsko pranje — Pančevo</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto">
            {/* Nav links */}
            <div>
              <p className="font-inter text-cream/25 text-[10px] uppercase tracking-widest mb-3">Navigacija</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Usluge', href: '#usluge' },
                  { label: 'Cenovnik', href: '#cenovnik' },
                  { label: 'Kontakt', href: '#kontakt' },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-cream/40 hover:text-gold text-xs font-inter tracking-wide uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div id="kontakt">
              <p className="font-inter text-cream/25 text-[10px] uppercase tracking-widest mb-3">Kontakt</p>
              <div className="flex flex-col gap-2">
                <p className="font-inter text-cream/50 text-xs">+381 61 156 8748</p>
                <p className="font-inter text-cream/50 text-xs">dubinskopranjeapex@gmail.com</p>
                <p className="font-inter text-cream/50 text-xs">Pančevo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/5 text-center">
          <p className="font-inter text-cream/25 text-xs">
            © 2026 APEX Dubinsko Pranje. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}