
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoGallery from '../components/VideoGallery';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductSection from '../components/ProductSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    gsap.to(window, {
      duration: 0.1,
      scrollTo: {
        y: 0,
        autoKill: false
      },
      ease: "power2.out"
    });

    // Setup page transitions
    const sections = mainRef.current?.children;
    if (sections?.length) {
      gsap.set(sections, { opacity: 0, y: 20 });
      
      Array.from(sections).forEach((section, index) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out"
        });
      });
    }

    // Create scroll animations for section transitions
    ScrollTrigger.batch(".section-transition", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        });
      },
      once: true
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <VideoGallery />
        <FeaturedCategories />
        <ProductSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
