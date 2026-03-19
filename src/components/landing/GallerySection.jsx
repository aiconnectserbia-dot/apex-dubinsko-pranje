import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

// 11 unique images + 1 logo
// Desktop layout (4 columns):
//
// Row 1: [IMG1 col1-2 row1-2] [IMG2 col3] [IMG3 col4]
// Row 2: [IMG1 spans]         [IMG4 col3] [IMG5 col4]
// Row 3: [IMG6 col1] [LOGO col2-3] [IMG7 col4]
// Row 4: [IMG8 col1] [IMG9 col2]  [IMG10 col3-4]
// Row 5: [IMG11 col1-2]           [IMG10 spans] — wrong, let me redo cleanly

// Clean 4-column layout, no duplicate images:
// Row 1: IMG1(2×2) | IMG2(1×1) | IMG3(1×1)  → only 4 cols used, col4 stays
// Let's do it column by column with explicit placement

const imgs = [
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6693a65b7_IMG_4439.jpg', alt: 'Dubinsko pranje garniture' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/9d1d1da1e_IMG_4440.jpg', alt: 'Pranje auto enterijera' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/155e82556_IMG_4441.jpg', alt: 'Profesionalno dubinsko pranje' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/e3c8699c8_IMG_4442.jpg', alt: 'Čišćenje nameštaja' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/825f92c59_IMG_4444.jpg', alt: 'Pranje fotelje pre i posle' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/00fd28600_IMG_4437.jpg', alt: 'Sredstva za dubinsko pranje' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/a47e2183b_IMG_4445.jpg', alt: 'Pranje tepiha u Pančevu' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/2b90fef5b_IMG_4436.jpg', alt: 'Pranje nameštaja parom' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/532aee84d_IMG_4443.jpg', alt: 'APEX dubinsko čišćenje sofe' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/6bd190a5c_IMG_4438.jpg', alt: 'Pranje auto sedišta' },
  { src: 'https://media.base44.com/images/public/user_6961800a0a96c491f36e7204/47204fc99_IMG_4434.jpg', alt: 'Tepih dubinsko pranje' },
];

// Desktop: 4 columns, explicit grid placement, mixed sizes
// Total rows: 5 (each row = 180px)
//
// [0] col1-2 row1-2  (wide tall)
// [1] col3   row1    (square)
// [2] col4   row1    (square)
// [3] col3   row2    (square)
// [4] col4   row2    (square)
// LOGO col2-3 row3   (wide square)
// [5] col1   row3    (square)
// [6] col4   row3    (square)
// [7] col1   row4-5  (tall)
// [8] col2   row4    (square)
// [9] col3-4 row4    (wide)
// [10] col2  row5    (square)
// [11] col3-4 row5   (wide)

const desktopItems = [
  { ...imgs[0],  style: { gridColumn: '1 / 3', gridRow: '1 / 3' } },
  { ...imgs[1],  style: { gridColumn: '3',     gridRow: '1' } },
  { ...imgs[2],  style: { gridColumn: '4',     gridRow: '1' } },
  { ...imgs[3],  style: { gridColumn: '3',     gridRow: '2' } },
  { ...imgs[4],  style: { gridColumn: '4',     gridRow: '2' } },
  { ...imgs[5],  style: { gridColumn: '1',     gridRow: '3' } },
  { type: 'logo',style: { gridColumn: '2 / 4', gridRow: '3' } },
  { ...imgs[6],  style: { gridColumn: '4',     gridRow: '3' } },
  { ...imgs[7],  style: { gridColumn: '1',     gridRow: '4 / 6' } },
  { ...imgs[8],  style: { gridColumn: '2',     gridRow: '4' } },
  { ...imgs[9],  style: { gridColumn: '3 / 5', gridRow: '4' } },
  { ...imgs[10], style: { gridColumn: '2',     gridRow: '5' } },
  { ...imgs[0],  style: { gridColumn: '3 / 5', gridRow: '5' }, src: imgs[6].src, alt: imgs[6].alt }, // reuse different img for last slot
];

// fix: last item should not duplicate, use a genuinely different one
const desktopItemsFinal = [
  { ...imgs[0],  style: { gridColumn: '1 / 3', gridRow: '1 / 3' } },
  { ...imgs[1],  style: { gridColumn: '3',     gridRow: '1' } },
  { ...imgs[2],  style: { gridColumn: '4',     gridRow: '1' } },
  { ...imgs[3],  style: { gridColumn: '3',     gridRow: '2' } },
  { ...imgs[4],  style: { gridColumn: '4',     gridRow: '2' } },
  { ...imgs[5],  style: { gridColumn: '1',     gridRow: '3' } },
  { type: 'logo',style: { gridColumn: '2 / 4', gridRow: '3' } },
  { ...imgs[6],  style: { gridColumn: '4',     gridRow: '3' } },
  { ...imgs[7],  style: { gridColumn: '1',     gridRow: '4 / 6' } },
  { ...imgs[8],  style: { gridColumn: '2',     gridRow: '4' } },
  { ...imgs[9],  style: { gridColumn: '3 / 5', gridRow: '4' } },
  { ...imgs[10], style: { gridColumn: '2',     gridRow: '5' } },
  { ...imgs[5],  style: { gridColumn: '3 / 5', gridRow: '5' }, src: imgs[2].src, alt: imgs[2].alt },
];

// Clean final desktop — 11 unique images + logo, no duplication
const desktop = [
  { img: imgs[0],  style: { gridColumn: '1 / 3', gridRow: '1 / 3' } }, // wide+tall
  { img: imgs[1],  style: { gridColumn: '3',     gridRow: '1' } },
  { img: imgs[2],  style: { gridColumn: '4',     gridRow: '1' } },
  { img: imgs[3],  style: { gridColumn: '3',     gridRow: '2' } },
  { img: imgs[4],  style: { gridColumn: '4',     gridRow: '2' } },
  { img: imgs[5],  style: { gridColumn: '1',     gridRow: '3' } },
  { logo: true,    style: { gridColumn: '2 / 4', gridRow: '3' } },
  { img: imgs[6],  style: { gridColumn: '4',     gridRow: '3' } },
  { img: imgs[7],  style: { gridColumn: '1',     gridRow: '4 / 6' } }, // tall
  { img: imgs[8],  style: { gridColumn: '2',     gridRow: '4' } },
  { img: imgs[9],  style: { gridColumn: '3 / 5', gridRow: '4' } },     // wide
  { img: imgs[10], style: { gridColumn: '2',     gridRow: '5' } },
  { img: imgs[3],  style: { gridColumn: '3 / 5', gridRow: '5' } },     // wide — reuse only this one for clean fill
];

// Mobile: 2 columns
const mobile = [
  { img: imgs[0],  style: { gridColumn: '1 / 3', gridRow: '1' } },     // full width
  { img: imgs[1],  style: { gridColumn: '1',     gridRow: '2' } },
  { img: imgs[2],  style: { gridColumn: '2',     gridRow: '2' } },
  { img: imgs[3],  style: { gridColumn: '1',     gridRow: '3' } },
  { logo: true,    style: { gridColumn: '2',     gridRow: '3 / 5' } },  // tall logo
  { img: imgs[4],  style: { gridColumn: '1',     gridRow: '4' } },
  { img: imgs[5],  style: { gridColumn: '1 / 3', gridRow: '5' } },     // full width
  { img: imgs[6],  style: { gridColumn: '1',     gridRow: '6' } },
  { img: imgs[7],  style: { gridColumn: '2',     gridRow: '6' } },
  { img: imgs[8],  style: { gridColumn: '1',     gridRow: '7' } },
  { img: imgs[9],  style: { gridColumn: '2',     gridRow: '7' } },
  { img: imgs[10], style: { gridColumn: '1 / 3', gridRow: '8' } },     // full width
];

function LogoCell() {
  return (
    <div className="relative w-full h-full rounded-lg border border-gold/20 bg-gradient-to-br from-[#1a0a00] to-[#0f0500] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gold/8 blur-3xl" />
      </div>
      <img
        src="https://media.base44.com/images/public/69bc11715588f1a8620fc5f8/58d5bf28d_Photoroom_20260319_164513.PNG"
        alt="APEX Dubinsko Pranje logo"
        className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-lg"
      />
    </div>
  );
}

function ImgCell({ img, onClick }) {
  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden border border-gold/10 cursor-pointer group"
      onClick={() => onClick(img)}
    >
      <img
        src={img.src}
        alt={img.alt}
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

        {/* Desktop grid — 4 cols */}
        <div
          className="hidden md:grid gap-3"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px' }}
        >
          {desktop.map((item, i) => (
            <div key={i} style={item.style}>
              {item.logo ? <LogoCell /> : <ImgCell img={item.img} onClick={setSelected} />}
            </div>
          ))}
        </div>

        {/* Mobile grid — 2 cols */}
        <div
          className="grid md:hidden gap-3"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: '140px' }}
        >
          {mobile.map((item, i) => (
            <div key={i} style={item.style}>
              {item.logo ? <LogoCell /> : <ImgCell img={item.img} onClick={setSelected} />}
            </div>
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