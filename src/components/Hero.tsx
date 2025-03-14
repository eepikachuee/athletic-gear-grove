
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const animatedTextRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // GSAP animations
    const timeline = gsap.timeline();
    
    timeline
      .fromTo(heroRef.current, 
        { scale: 1.1, filter: 'blur(8px)' }, 
        { scale: 1, filter: 'blur(0)', duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(textRef.current?.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out' },
        "-=0.8"
      )
      .fromTo(buttonRef.current?.children, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
        "-=0.4"
      );
    
    // Animated text effect for "every sports"
    if (animatedTextRef.current) {
      const chars = animatedTextRef.current.innerText.split('');
      animatedTextRef.current.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        animatedTextRef.current.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 1.5 + (index * 0.05),
          ease: 'back.out',
          onStart: () => {
            gsap.set(span, { y: -20 });
          }
        });
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2940&auto=format&fit=crop)',
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl" ref={textRef}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            Football Collection 2024
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Dominate <br />
            The Field
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
            Professional quality football gear for players at <span ref={animatedTextRef} className="font-bold text-white">every sports</span> level.
            Engineered for performance, designed for champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4" ref={buttonRef}>
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
