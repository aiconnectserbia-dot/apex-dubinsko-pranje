import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

const imgs = [
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476645/slika1_e86qyo.jpg', alt: 'Dubinsko pranje garniture' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476645/slika2_tvfndn.jpg', alt: 'Pranje auto enterijera' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika3_frdbnp.jpg', alt: 'Profesionalno dubinsko pranje' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476645/slika4_v6pmep.jpg', alt: 'Čišćenje nameštaja' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika5_azayj7.jpg', alt: 'Pranje fotelje pre i posle' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika6_sc5f9x.jpg', alt: 'Sredstva za dubinsko pranje' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika7_nfgwcd.jpg', alt: 'Pranje tepiha u Pančevu' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika8_dtorqg.jpg', alt: 'Pranje nameštaja parom' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika9_as3vv5.jpg', alt: 'APEX dubinsko čišćenje sofe' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476645/slika2_tvfndn.jpg', alt: 'Pranje auto sedišta' },
  { src: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1774476644/slika3_frdbnp.jpg', alt: 'Tepih dubinsko pranje' },
];

// Desktop grid — UNCHANGED
const desktop = [
  { img: imgs[0],  style: { gridColumn: '1 / 3', gridRow: '1 / 3' } },
  { img: imgs[1],  style: { gridColumn: '3',     gridRow: '1' } },
  { img: imgs[2],  style: { gridColumn: '4',     gridRow: '1' } },
  { img: imgs[3],  style: { gridColumn: '3',     gridRow: '2' } },
  { img: imgs[4],  style: { gridColumn: '4',     gridRow: '2' } },
  { img: imgs[5],  style: { gridColumn: '1',     gridRow: '3' } },
  { logo: true,    style: { gridColumn: '2 / 4', gridRow: '3' } },
  { img: imgs[6],  style: { gridColumn: '4',     gridRow: '3' } },
  { img: imgs[7],  style: { gridColumn: '1',     gridRow: '4 / 6' } },
  { img: imgs[8],  style: { gridColumn: '2',     gridRow: '4' } },
  { img: imgs[9],  style: { gridColumn: '3 / 5', gridRow: '4' } },
  { img: imgs[10], style: { gridColumn: '2',     gridRow: '5' } },
  { img: imgs[1],  style: { gridColumn: '3 / 5', gridRow: '5' } },
];

// Mobile: 3×3 grid around centered logo square
// Layout:
// [img0][img1][img2]
// [img3][LOGO][img4]
// [img5][img6][img7]
// [img8 wide ][img9]
const mobile = [
  { img: imgs[0],  style: { gridColumn: '1', gridRow: '1' } },
  { img: imgs[2],  style: { gridColumn: '2', gridRow: '1' } },
  { img: imgs[3],  style: { gridColumn: '3', gridRow: '1' } },
  { img: imgs[4],  style: { gridColumn: '1', gridRow: '2' } },
  { logo: true,    style: { gridColumn: '2', gridRow: '2' } },
  { img: imgs[5],  style: { gridColumn: '3', gridRow: '2' } },
  { img: imgs[6],  style: { gridColumn: '1', gridRow: '3' } },
  { img: imgs[7],  style: { gridColumn: '2', gridRow: '3' } },
  { img: imgs[8],  style: { gridColumn: '3', gridRow: '3' } },
  { img: imgs[9],  style: { gridColumn: '1 / 3', gridRow: '4' } },
  { img: imgs[10], style: { gridColumn: '3', gridRow: '4' } },
];

function LogoCell() {
  return (
    <div className="relative w-full h-full rounded-lg border border-gold/30 bg-gradient-to-br from-[#1e0d02] to-[#0d0400] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gold/10 blur-2xl" />
      </div>
      <img
        src="https://res.cloudinary.com/dnik9se1m/image/upload/v1774477020/B7C3E551-A616-4D0F-9102-B492D7442ED6_yd17cd.png"
        alt="APEX Dubinsko Pranje logo"
        className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-lg"
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
        <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center">
          <span className="text-gold text-base">+</span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galerija" className="relative py-16 md:py-32" style={{background: 'linear-gradient(180deg, #0a0400 0%, #110600 100%)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionDivider />
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream text-center mt-8 mb-4">
            Rezultati govore <span className="text-gold italic">sami za sebe</span>
          </h2>
          <p className="font-inter text-cream/50 text-center mb-10 md:mb-16 text-sm">
            Pogledajte transformacije koje postižemo
          </p>
        </AnimatedSection>

        {/* Desktop grid — UNCHANGED */}
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

        {/* Mobile grid — 3 columns, logo in center square, equal cells */}
        <div
          className="grid md:hidden gap-2"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '110px' }}
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