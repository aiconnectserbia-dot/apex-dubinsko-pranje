import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SEOPageLayout from '../components/seo/SEOPageLayout';

const faqs = [
  { q: 'Koliko traje čišćenje nameštaja u Pančevu?', a: 'Čišćenje garniture traje obično 1–2 sata. Fotelja ili stolica se opere za 30–45 minuta. Tačno vreme zavisi od veličine i stanja nameštaja.' },
  { q: 'Kolika je cena čišćenja nameštaja u Pančevu?', a: 'Fotelja se pere od 1.500 din, dvosed 3.000 din, trosed 4.500 din, a ugaona garnitura 5.500–7.000 din. Sve cene su fiksne i bez skrivenih troškova.' },
  { q: 'Da li dolazite na adresu u Pančevu?', a: 'Da, dolazimo na vašu adresu u Pančevu i okolini. Nije potrebno da donosite nameštaj bilo gde — mi donosimo svu opremu.' },
  { q: 'Kada mogu da koristim nameštaj posle pranja?', a: 'Nameštaj je spreman za korišćenje nakon 4–6 sati. Preporučujemo dobru ventilaciju prostorije za brže sušenje.' },
];

const relatedServices = [
  { title: 'Dubinsko čišćenje', path: '/dubinsko-ciscenje-pancevo' },
  { title: 'Pranje tepiha', path: '/pranje-tepiha-pancevo' },
  { title: 'Dubinsko pranje kola', path: '/dubinsko-pranje-kola-pancevo' },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "APEX Dubinsko Čišćenje",
  "url": "https://apex-pranje.rs",
  "areaServed": "Pančevo",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pančevo",
    "addressCountry": "RS"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Čišćenje nameštaja Pančevo",
  "serviceType": "Čišćenje nameštaja",
  "areaServed": "Pančevo",
  "provider": {
    "@type": "LocalBusiness",
    "name": "APEX Dubinsko Čišćenje",
    "url": "https://apex-pranje.rs"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function CiscentjeNamestajaPancevo() {
  return (
    <>
      <Helmet>
        <title>Čišćenje nameštaja Pančevo | APEX – Garniture, dušeci, fotelje</title>
        <meta name="description" content="Čišćenje nameštaja u Pančevu — garniture, fotelje, dušeci. Dolazak na adresu, fiksne cene, bezbedno za decu. Zakažite termin danas!" />
        <link rel="canonical" href="https://apex-pranje.rs/ciscenje-namestaja-pancevo" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <SEOPageLayout
          h1="Dubinsko čišćenje nameštaja u Pančevu"
          subtitle="Garniture, dušeci, fotelje i stolice — dubinski opramo sve, na vašoj adresi"
          faqs={faqs}
          relatedServices={relatedServices}
        >
          {/* Ko smo mi */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Ko smo mi?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              APEX je servis za dubinsko čišćenje nameštaja dostupan za klijente u Pančevu i okolini.
              Radimo profesionalnom opremom i sredstvima koja su bezbedna za decu i kućne ljubimce.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Naš pristup je jednostavan: dolazimo na vašu adresu, procenjujemo nameštaj i radimo temeljno —
              bez žurbe i bez skrivenih troškova. Cilj nam je da budete zadovoljni rezultatom.
            </p>
          </section>

          {/* Zašto je važno */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Zašto je važno dubinski prati nameštaj?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Nameštaj koji svakodnevno koristimo — garniture, fotelje, stolice i dušeci — akumulira prljavštinu,
              bakterije, grinje i neprijatne mirise koje obično čišćenje ne uklanja.
              Dubinsko pranje prodire do korena vlakana i vraća svežinu i higijenu vašem domu.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Naročito je važno redovno prati nameštaj u domaćinstvima sa malom decom,
              kućnim ljubimcima ili osobama sklonima alergijama.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Osim čišćenja nameštaja, nudimo i{' '}
              <Link to="/pranje-tepiha-pancevo" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                pranje tepiha u Pančevu
              </Link>{' '}
              i{' '}
              <Link to="/dubinsko-pranje-kola-pancevo" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                dubinsko pranje kola u Pančevu
              </Link>.
            </p>
          </section>

          {/* Šta peremo */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Šta peremo?</h2>
            <ul className="space-y-2 font-inter text-cream/60 text-sm leading-relaxed">
              {[
                'Ugaone garniture i sofe',
                'Trosedi i dvosedi',
                'Fotelje',
                'Stolice — kancelarijske, trpezarijske',
                'Singl i bračni dušeci',
                'Tabure i jastuci',
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
            <p className="font-inter text-cream/60 leading-relaxed mt-4">
              Ako tražite i{' '}
              <Link to="/dubinsko-ciscenje-pancevo" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                sveobuhvatno dubinsko čišćenje u Pančevu
              </Link>{' '}
              — nameštaj, tepih i enterijer — i to nudimo.
            </p>
          </section>

          {/* Pristup */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Naš pristup čišćenju nameštaja</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Koristimo profesionalnu Kärcher opremu i sredstva koja dubinski čiste bez oštećenja tkanine.
              Svaki predmet procenjujemo individualno i prilagođavamo postupak materijalu i stepenu zaprljanosti.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Nakon pranja, ekstrakcijom uklanjamo svu vlagu i prljavštinu,
              tako da nameštaj suši brže i ostaje čist duže.
              Radimo uredno i poštujemo vaš prostor.
            </p>
          </section>

          {/* Cene */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Cene čišćenja nameštaja u Pančevu</h2>
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
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
            <p className="font-inter text-cream/40 text-xs">
              * Konačna cena zavisi od veličine i stepena zaprljanosti. Sve cene su fiksne i bez skrivenih troškova.
            </p>
          </section>

          {/* Lokalna dostupnost */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Čišćenje nameštaja na teritoriji Pančeva</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Dostupni smo za sve klijente na teritoriji Pančeva — bez obzira na koji deo grada se nalazite.
              Dolazimo sa svom potrebnom opremom i ne tražimo da ikuda donosite nameštaj.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Servis obavljamo direktno u vašem stanu, kući ili poslovnom prostoru.
              Jednostavno zakažite termin koji vama odgovara i mi ćemo se pobrinuti za ostatak.
            </p>
          </section>

          {/* Servis na adresi */}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Servis na vašoj adresi u Pančevu</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Pokrivamo Pančevo i okolna mesta. Dolazimo sa svom opremom —
              nije potrebno ništa posebno da pripremate.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Zakažite termin i mi dolazimo kada vama odgovara.
              Radimo brzo, temeljno i bez nereda.
            </p>
          </section>

          {/* CTA sekcija */}
          <section className="border border-gold/25 rounded-xl bg-gradient-to-br from-[#2a1506]/60 to-[#1a0a00]/60 p-6 md:p-8">
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-3">
              Pozovite za čišćenje nameštaja u Pančevu
            </h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Ukoliko želite da vaš nameštaj bude temeljno opran na teritoriji Pančeva —
              kontaktirajte nas i dogovorimo termin.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed mb-5">
              Dolazimo na vašu adresu u Pančevu, donosimo svu opremu i završavamo posao bez komplikacija.
              Cene su fiksne i znate unapred šta plaćate.
            </p>
            <a
              href="#kontakt"
              className="inline-block px-7 py-3 bg-gold text-dark-brown font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300"
            >
              Zatražite termin
            </a>
          </section>
        </SEOPageLayout>
        <Footer />
      </div>
    </>
  );
}