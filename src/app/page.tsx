import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CollegeCollaborationsSection } from '@/components/sections/CollegeCollaborationsSection';
import { InternshipsSection } from '@/components/sections/InternshipsSection';
import { InternshipRegistrationSection } from '@/components/sections/InternshipRegistrationSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ScrollObserver } from '@/components/ui/ScrollObserver';
import { Preloader } from '@/components/ui/Preloader';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* 00. Brand Preloader with Letter Flip and Parting Shutter Animation */}
      <Preloader />

      {/* 00. Slow, Silky Smooth Momentum Inertia Scrolling (Template ScrollSmoother) */}
      <SmoothScroll />

      {/* Scroll Trigger Observation Engine */}
      <ScrollObserver />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero Section */}
        <HeroSection />

        {/* 02. About Us */}
        <AboutSection />

        {/* 03. Our Services */}
        <ServicesSection />

        {/* 04. Why Altruisty Innovation? */}
        <WhyChooseUsSection />

        {/* 05. Our Gallery */}
        <GallerySection />

        {/* 06. Our Clients (with Infinite Moving Logo Marquee) */}
        <ClientsSection />

        {/* 07. Our Partners */}
        <PartnersSection />

        {/* 08. College Event Collaborations / Past Events */}
        <CollegeCollaborationsSection />

        {/* 09. Internships */}
        <InternshipsSection />

        {/* 10. Internship Registration */}
        <InternshipRegistrationSection />

        {/* 11. Contact CTA */}
        <ContactCTASection />

        {/* 12. Contact Us */}
        <ContactSection />
      </main>

      {/* 13. Footer (Exact Design from index-3.html with Colossal Brand Name) */}
      <Footer />
    </div>
  );
}
