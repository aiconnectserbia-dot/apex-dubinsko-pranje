import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import SEOServicesSection from '../components/landing/SEOServicesSection';
import PricingSection from '../components/landing/PricingSection';
import GallerySection from '../components/landing/GallerySection';
import ReviewsSection from '../components/landing/ReviewsSection';
import FAQSection from '../components/landing/FAQSection';
import Footer from '../components/landing/Footer';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "APEX Dubinsko Pranje",
  "description": "Profesionalno dubinsko čišćenje nameštaja, tepiha i automobila u Pančevu, Srbija",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pančevo",
    "addressRegion": "Vojvodina",
    "addressCountry": "RS"
  },
  "areaServed": "Pančevo i okolina",
  "serviceType": ["Dubinsko čišćenje nameštaja", "Pranje tepiha", "Dubinsko pranje automobila"],
  "priceRange": "700 - 15000 RSD"
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dubinsko čišćenje Pančevo | APEX – Profesionalni servis</title>
        <meta name="description" content="APEX — profesionalno dubinsko čišćenje nameštaja, tepiha i kola u Pančevu. Dolazimo na adresu. Kärcher oprema. Transparentne cene. Zakažite odmah!" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-dark-brown font-inter">
        <Navbar />
        <main>
          <HeroSection />
          <SEOServicesSection />
          <AboutSection />
          <ServicesSection />
          <PricingSection />
          <GallerySection />
          <ReviewsSection />
          <ContactSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}