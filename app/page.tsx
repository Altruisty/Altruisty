import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyAltruisty } from '@/components/sections/WhyAltruisty';
import { Gallery } from '@/components/sections/Gallery';
import { Clients } from '@/components/sections/Clients';
import { Partners } from '@/components/sections/Partners';
import { CollegeCollaborations } from '@/components/sections/CollegeCollaborations';
import { Internships } from '@/components/sections/Internships';
import { InternshipForm } from '@/components/sections/InternshipForm';
import { LetsBuild } from '@/components/sections/LetsBuild';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyAltruisty />
      <Gallery />
      <Clients />
      <Partners />
      <CollegeCollaborations />
      <Internships />
      <InternshipForm />
      <LetsBuild />
      <Contact />
      <Footer />
    </>
  );
}

