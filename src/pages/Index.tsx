
import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfoSection />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
