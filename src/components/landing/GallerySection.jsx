import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

// Slike sa ljudima (IMG_4444, IMG_4445) razbacane - na poziciji 4 i 8 (ne zajedno)
// Logo ćelija na desktop: col 3-4, row 3 | na mobile: sredina (row 3)
const desktopItems = [
  // Row 1–2: velika slika levo + 2 male desno
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg', alt: 'Dubinsko pranje garniture', cls: 'col-span-2 row-span-2' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg', alt: 'Pranje auto enterijera', cls: 'col-span-1 row-span-1' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/155e82556_IMG_4441.jpg', alt: 'Profesionalno dubinsko pranje', cls: 'col-span-1 row-span-1' },
  // Row 2 desno: slika sa čovekom + mala
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg', alt: 'Pranje fotelje pre i posle', cls: 'col-span-1 row-span-1' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/e3c8699c8_IMG_4442.jpg', alt: 'Čišćenje nameštaja', cls: 'col-span-1 row-span-1' },
  // Row 3: mala + mala + LOGO (2 wide) 
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg', alt: 'Sredstva za dubinsko pranje', cls: 'col-span-1 row-span-1' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/a47e2183b_IMG_4445.jpg', alt: 'Pranje tepiha u Pančevu', cls: 'col-span-1 row-span-1' },
  { type: 'logo', cls: 'col-span-2 row-span-1' },
  // Row 4: široka slika + mala sa čovekom + mala
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/2b90fef5b_IMG_4436.jpg', alt: 'Pranje nameštaja parom', cls: 'col-span-2 row-span-1' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg', alt: 'APEX dubinsko čišćenje sofe', cls: 'col-span-1 row-span-1' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg', alt: 'Pranje auto sedišta', cls: 'col-span-1 row-span-1' },
];

// Mobile: 2 kolone, logo u sredini (row 3, span 2)
const mobileItems = [
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg', alt: 'Dubinsko pranje garniture', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg', alt: 'Pranje auto enterijera', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/155e82556_IMG_4441.jpg', alt: 'Profesionalno dubinsko pranje', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/e3c8699c8_IMG_4442.jpg', alt: 'Čišćenje nameštaja', cls: '' },
  { type: 'logo', cls: 'col-span-2' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg', alt: 'Pranje fotelje pre i posle', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg', alt: 'Sredstva za dubinsko pranje', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/a47e2183b_IMG_4445.jpg', alt: 'Pranje tepiha u Pančevu', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/2b90fef5b_IMG_4436.jpg', alt: 'Pranje nameštaja parom', cls: 'col-span-2' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg', alt: 'APEX dubinsko čišćenje sofe', cls: '' },
  { type: 'img', src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg', alt: 'Pranje auto sedišta', cls: '' },
];

function LogoCell() {
  return (
    <div className="relative w-full h-full rounded-lg border border-gold/20 bg-gradient-to-br from-[#1a0a00] to-[#0f0500] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gold/8 blur-3xl" />
      </div>
      <img
        src="https://media.base44.com/images/public/69bc11715588f1a8620fc5f8/58d5bf28d_Photoroom_20260319_164513.PNG"
        alt="APEX Dubinsko Pranje logo"
        className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-lg"
      />
    </div>
  );
}

function ImgCell({ item, onClick }) {
  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden border border-gold/10 cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-dark-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
          <span className="text-gold text-lg">+</span>
        </div>
      </div>
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-500" />
    </div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galerija" className="relative py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Rezultati govore <span className="text-gold italic">sami za sebe</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-16 text-sm">
            Pogledajte transformacije koje postižemo
          </p>
        </AnimatedSection>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-3 auto-rows-[200px]">
          {desktopItems.map((item, i) => (
            <AnimatedSection key={i} delay={0.04 * (i + 1)} className={item.cls}>
              {item.type === 'logo' ? (
                <LogoCell />
              ) : (
                <ImgCell item={item} onClick={setSelected} />
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="grid md:hidden grid-cols-2 gap-3 auto-rows-[160px]">
          {mobileItems.map((item, i) => (
            <AnimatedSection key={i} delay={0.04 * (i + 1)} className={item.cls}>
              {item.type === 'logo' ? (
                <LogoCell />
              ) : (
                <ImgCell item={item} onClick={setSelected} />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-brown/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-gold hover:text-gold-light transition-colors"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}