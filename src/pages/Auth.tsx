
import { AuthForms } from '@/components/AuthForms';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Auth() {
  useEffect(() => {
    // Simple fade-in animation for the form
    gsap.fromTo(
      '.auth-container',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black/90 to-black/70">
        <div className="auth-container w-full max-w-md">
          <AuthForms />
        </div>
      </main>
      <Footer />
    </div>
  );
}
