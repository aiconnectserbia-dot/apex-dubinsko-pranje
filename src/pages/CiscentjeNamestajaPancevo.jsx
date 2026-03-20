import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SEOPageLayout from '../components/seo/SEOPageLayout';

const faqs = [
  { q: 'Koliko traje čišćenje nameštaja u Pančevu?', a: 'Čišćenje garniture traje obično 1–2 sata. Fotelja ili stolica se opere za 30–45 minuta. Tačno vreme zavisi od veličine i stanja nameštaja.' },
  { q: 'Kolika je cena čišćenja nameštaja u Pančevu?', a: 'Fotelja se pere od 1.500 din, dvosed 3.000 din, trosed 4.500 din, a ugaona garnitura 5.500–7.000 din. Sve cene su fiksne i bez skrivenih troškova.' },
  { q: 'Da li dolazite na adresu?', a: 'Da, dolazimo na vašu adresu u Pančevu i okolini. Nije potrebno da donosite nameštaj bilo gde.' },
  { q: 'Kada mogu da koristim nameštaj posle pranja?', a: 'Nameštaj je spreman za korišćenje nakon 4–6 sati. Preporučujemo dobru ventilaciju prostorije za brže sušenje.' },
];

const relatedServices = [
  { title: 'Dubinsko čišćenje', path: '/dubinsko-ciscenje-pancevo' },
  { title: 'Pranje tepiha', path: '/pranje-tepiha-pancevo' },
  { title: 'Dubinsko pranje kola', path: '/dubinsko-pranje-kola-pancevo' },
];

export default function CiscentjeNamestajaPancevo() {
  return (
    <>
      <Helmet>
        <title>Čišćenje nameštaja Pančevo | APEX – Garniture, dušeci, fotelje</title>
        <meta name="description" content="Profesionalno čišćenje nameštaja u Pančevu. Pranje garnitura, dušeka, fotelja i stolica. Dolazimo na adresu. Bezbedno za decu. Pogledajte cene!" />
        <link rel="canonical" href="https://apex-pranje.rs/ciscenje-namestaja-pancevo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <SEOPageLayout
          h1="Čišćenje nameštaja Pančevo"
          subtitle="Garniture, dušeci, fotelje i stolice — dubinski opramo sve"
          faqs={faqs}
          relatedServices={relatedServices}
        >
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Zašto je važno dubinski prati nameštaj?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-4">
              Nameštaj koji svakodnevno koristimo — garniture, fotelje, stolice i dušeci — akumulira prljavštinu, bakterije, grinje i neprijatne mirise koje obično čišćenje ne uklanja. Dubinsko pranje prodire do korena vlakana i vraća svežinu i higijenu vašem domu.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Naročito je važno redovno prati nameštaj u domaćinstvima sa malom decom, kućnim ljubimcima ili osobama sklonima alergijama.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Šta peremo?</h2>
            <ul className="space-y-2 font-inter text-cream/60 text-sm leading-relaxed">
              {['Ugaone garniture i sofe', 'Trosedi i dvosedi', 'Fotelje', 'Stolice — kancelarijske, trpezarijske', 'Singl i bračni dušeci', 'Tabure i jastuci'].map(item => (
                <li key={item} className="flex gap-2"><span className="text-gold">✓</span> {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Naš pristup čišćenju nameštaja</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Koristimo profesionalnu Kärcher opremu i sredstva koja dubinski čiste bez oštećenja tkanine. Svaki predmet procenjujemo individualno i prilagođavamo postupak materijalu i stepenu zaprljanosti.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Nakon pranja, ekstrakcijom uklanjamo svu vlagu i prljavštinu, tako da nameštaj suši brže i ostaje čist duže.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Cene čišćenja nameštaja u Pančevu</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['Stolica', '700–1.000 din'],
                ['Fotelja', '1.500 din'],
                ['Dvosed', '3.000 din'],
                ['Trosed', '4.500 din'],
                ['Ugaona garnitura', '5.500–7.000 din'],
                ['Tabure / Jastuk', 'od 700 din'],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between border-b border-gold/10 pb-2">
                  <span className="font-inter text-cream/60">{name}</span>
                  <span className="font-inter text-gold font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Servis na vašoj adresi u Pančevu</h2>
            <p className="font-inter text-cream/60 leading-relaxed">
              Pokrivamo Pančevo i okolna mesta. Dolazimo sa svom opremom — nije potrebno ništa posebno da pripremate. Jednostavno zakažite termin i mi dolazimo kada vama odgovara.
            </p>
          </section>
        </SEOPageLayout>
        <Footer />
      </div>
    </>
  );
}