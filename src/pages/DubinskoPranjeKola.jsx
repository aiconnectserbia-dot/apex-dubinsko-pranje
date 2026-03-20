import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SEOPageLayout from '../components/seo/SEOPageLayout';

const faqs = [
  { q: 'Koliko traje dubinsko pranje kola u Pančevu?', a: 'Zavisno od veličine automobila, pranje traje 2–4 sata. Mali auto oko 2 sata, SUV ili karavan 3–4 sata.' },
  { q: 'Kolika je cena dubinskog pranja kola u Pančevu?', a: 'Mali auto košta 7.000 din, limuzina 10.000 din, SUV ili karavan 12.000 din, a veliki SUV 15.000 din.' },
  { q: 'Dolazite li na adresu za pranje kola?', a: 'Da, dolazimo gde god je vaše vozilo parkirano — ispred kuće, posla ili bilo gde u Pančevu. Nemamo fiksnu lokaciju, servis dolazi do vas.' },
  { q: 'Šta uključuje dubinsko pranje kola?', a: 'Pranje uključuje kompletno čišćenje enterijera: sedišta, tepiha, dashe, vrata, plafona i gepeka. Uklanjamo prljavštinu, mrlje i neprijatne mirise iz vozila.' },
  { q: 'Da li se peraju i kožna sedišta?', a: 'Da, peremo i kožna i tkaninska sedišta, prilagođavajući postupak materijalu da ne dođe do oštećenja.' },
];

const relatedServices = [
  { title: 'Dubinsko čišćenje', path: '/dubinsko-ciscenje-pancevo' },
  { title: 'Čišćenje nameštaja', path: '/ciscenje-namestaja-pancevo' },
  { title: 'Pranje tepiha', path: '/pranje-tepiha-pancevo' },
];

export default function DubinskoPranjeKola() {
  return (
    <>
      <Helmet>
        <title>Dubinsko pranje kola Pančevo | APEX – Enterijer kao iz salona</title>
        <meta name="description" content="Dubinsko pranje automobila u Pančevu — dolazimo na vašu adresu. Mali auto od 7.000 din. Čistimo sedišta, tepihe, dash. Rezervišite termin!" />
        <link rel="canonical" href="https://apex-pranje.rs/dubinsko-pranje-kola-pancevo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <SEOPageLayout
          h1="Dubinsko pranje kola Pančevo"
          subtitle="Enterijer vašeg automobila čist kao iz salona — dolazimo na adresu"
          faqs={faqs}
          relatedServices={relatedServices}
        >
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Šta obuhvata dubinsko pranje kola?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-4">
              Dubinsko pranje automobila je detaljno čišćenje kompletnog enterijera vozila. Za razliku od standardnog pranja, ovaj postupak čisti svaki detalj — od sedišta i tepiha do dashe, vrata i plafona — koristeći profesionalnu opremu i sredstva.
            </p>
            <ul className="space-y-2 font-inter text-cream/60 text-sm leading-relaxed">
              {[
                'Sedišta — tkaninska i kožna',
                'Tepisi u unutrašnjosti i gepeku',
                'Tabla, vrata i rukohvati',
                'Plafon i stub',
                'Uklanjanje neprijatnih mirisa',
                'Tretman protiv bakterija',
              ].map(item => (
                <li key={item} className="flex gap-2"><span className="text-gold">✓</span> {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Zašto dubinski prati automobil?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">
              Enterijer automobila je prostor u kom provodimo dosta vremena, a koji retko dubinski čistimo. Akumulirani prašina, bakterije, tečnosti i mirisi (hrana, cigarete, kućni ljubimci) ne nestaju sami od sebe.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              Profesionalnim pranjem vraćamo enterijeru higijenu i svežinu, što je posebno važno ako vozite decu ili ste alergični na prašinu.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Cene dubinskog pranja kola u Pančevu</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['Mali auto', '7.000 din'],
                ['Limuzina (srednja)', '10.000 din'],
                ['SUV / Karavan', '12.000 din'],
                ['Veliki SUV', '15.000 din'],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between border-b border-gold/10 pb-2">
                  <span className="font-inter text-cream/60">{name}</span>
                  <span className="font-inter text-gold font-semibold">{price}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-cream/40 text-xs mt-4">* Cena može varirati zavisno od stepena zaprljanosti</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Dolazimo kod vas — Pančevo i okolina</h2>
            <p className="font-inter text-cream/60 leading-relaxed">
              Naš servis dolazi na vašu lokaciju u Pančevu — ispred kuće, posla, parking. Donosimo svu opremu sa sobom. Vi samo parkirate auto i prepuštate nam ostatak. Kontaktirajte nas za termin.
            </p>
          </section>
        </SEOPageLayout>
        <Footer />
      </div>
    </>
  );
}