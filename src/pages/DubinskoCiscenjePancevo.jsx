import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import SEOPageLayout from '../components/seo/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Koliko traje dubinsko čišćenje u Pančevu?', a: 'Vreme zavisi od vrste i veličine predmeta. Garniture se obično čiste 1–2 sata, dušeci oko 45 minuta, a auti 2–4 sata. Nakon dolaska na adresu procenićemo tačno vreme.' },
  { q: 'Kolika je cena dubinskog čišćenja u Pančevu?', a: 'Cene počinju od 700 din za stolicu, 3.000 din za trosed, a tepisi se naplaćuju od 450–600 din/m². Sve cene su transparentne i možete ih videti u našem cenovniku.' },
  { q: 'Da li dolazite na adresu u Pančevu?', a: 'Da, dolazimo na vašu adresu u Pančevu i okolini sa kompletnom profesionalnom opremom. Ne morate ništa da donosite.' },
  { q: 'Koliko se suši nameštaj posle čišćenja?', a: 'Nameštaj je spreman za upotrebu nakon 4–6 sati, u zavisnosti od materijala i ventilacije u prostoriji. Preporučujemo dobru cirkulaciju vazduha za brže sušenje.' },
  { q: 'Da li su sredstva bezbedna za decu i kućne ljubimce?', a: 'Da, koristimo profesionalna sredstva koja su potpuno bezbedna za decu i kućne ljubimce, a istovremeno efikasno uklanjaju prljavštinu i bakterije.' },
];

const relatedServices = [
  { title: 'Čišćenje nameštaja', path: '/ciscenje-namestaja-pancevo' },
  { title: 'Pranje tepiha', path: '/pranje-tepiha-pancevo' },
  { title: 'Dubinsko pranje kola', path: '/dubinsko-pranje-kola-pancevo' },
];

export default function DubinskoCiscenjePancevo() {
  return (
    <>
      <Helmet>
        <title>Dubinsko čišćenje Pančevo | APEX – Profesionalni servis</title>
        <meta name="description" content="Dubinsko čišćenje nameštaja, tepiha i automobila u Pančevu. Dolazimo na adresu, koristimo Kärcher opremu. Transparentne cene. Pozovite danas!" />
        <link rel="canonical" href="https://apex-pranje.rs/dubinsko-ciscenje-pancevo" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "APEX Dubinsko Pranje",
          "description": "Profesionalno dubinsko čišćenje nameštaja, tepiha i automobila u Pančevu",
          "address": { "@type": "PostalAddress", "addressLocality": "Pančevo", "addressCountry": "RS" },
          "areaServed": "Pančevo i okolina",
          "serviceType": "Dubinsko čišćenje"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <SEOPageLayout
          h1="Dubinsko čišćenje Pančevo"
          subtitle="Profesionalni servis koji dolazi do vas — Pančevo i okolina"
          faqs={faqs}
          relatedServices={relatedServices}
        >
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Šta je dubinsko čišćenje?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-4">
              Dubinsko čišćenje je profesionalni postupak kojim se iz nameštaja, tepiha i automobilskih enterijera uklanjaju duboko usađena prljavština, bakterije, grinje i neprijatni mirisi. Za razliku od površinskog čišćenja, ovaj postupak prodire duboko u vlakna materijala i vraća predmetima svežinu i higijenu.
            </p>
            <p className="font-inter text-cream/60 leading-relaxed">
              U APEX-u koristimo profesionalnu Kärcher opremu i certifikovana sredstva za pranje koja su bezbedna za celu porodicu, uključujući decu i kućne ljubimce.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Kako radimo?</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-3">Naš proces je jednostavan i efikasan:</p>
            <ol className="list-decimal list-inside space-y-2 font-inter text-cream/60 text-sm leading-relaxed">
              <li><strong className="text-cream/80">Pregled i procena</strong> — dolazimo na adresu i procenjujemo stanje predmeta</li>
              <li><strong className="text-cream/80">Predobrada</strong> — nanosimo sredstvo koje razgrađuje prljavštinu</li>
              <li><strong className="text-cream/80">Dubinsko pranje</strong> — vrućom vodom i parom čistimo vlakna pod pritiskom</li>
              <li><strong className="text-cream/80">Ekstrakcija</strong> — usisavamo svu vlagu i rastvorenu prljavštinu</li>
              <li><strong className="text-cream/80">Sušenje</strong> — nameštaj je spreman za korišćenje za 4–6 sati</li>
            </ol>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Zašto odabrati APEX u Pančevu?</h2>
            <ul className="space-y-3 font-inter text-cream/60 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-gold">✓</span> Dolazimo na vašu adresu u Pančevu — bez prenošenja teškog nameštaja</li>
              <li className="flex gap-2"><span className="text-gold">✓</span> Koristimo Kärcher profesionalnu opremu za vrhunske rezultate</li>
              <li className="flex gap-2"><span className="text-gold">✓</span> Transparentne cene — znate unapred koliko plaćate</li>
              <li className="flex gap-2"><span className="text-gold">✓</span> Sredstva bezbedna za decu i kućne ljubimce</li>
              <li className="flex gap-2"><span className="text-gold">✓</span> Brz odziv i fleksibilni termini</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Cene dubinskog čišćenja u Pančevu</h2>
            <p className="font-inter text-cream/60 leading-relaxed mb-4">
              Naše cene su formiran jasno i bez skrivenih troškova. Evo okvirnih cena za najčešće usluge:
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['Stolica', '700–1.000 din'],
                ['Dvosed', '3.000 din'],
                ['Trosed', '4.500 din'],
                ['Ugaona garnitura', '5.500–7.000 din'],
                ['Singl dušek', 'od 2.500 din'],
                ['Bračni dušek', 'od 3.500 din'],
              ].map(([name, price]) => (
                <div key={name} className="flex justify-between border-b border-gold/10 pb-2">
                  <span className="font-inter text-cream/60">{name}</span>
                  <span className="font-inter text-gold font-semibold">{price}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-cream/40 text-xs mt-4">* Konačna cena zavisi od veličine i stepena zaprljanosti</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-cream mb-4">Gde radimo — Pančevo i okolina</h2>
            <p className="font-inter text-cream/60 leading-relaxed">
              Naše usluge dubinskog čišćenja dostupne su u celom Pančevu, kao i u okolnim mestima. Dolazimo na vašu adresu sa kompletnom opremom, tako da vam nije potrebno ništa posebno da pripremate. Kontaktirajte nas i dogovorite termin koji vama odgovara.
            </p>
          </section>
        </SEOPageLayout>
        <Footer />
      </div>
    </>
  );
}