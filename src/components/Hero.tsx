
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const sportsImages = [
  "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop", // football
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop", // basketball
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940&auto=format&fit=crop", // soccer
  "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=2940&auto=format&fit=crop", // running
  "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop", // tennis
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const animatedTextRef = useRef(null);
  const imageIntroRef = useRef(null);
  const imageOverlayRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Image intro animation - Apple-style
    const introTimeline = gsap.timeline({
      onComplete: () => {
        setIntroComplete(true);
        // Start the main content animation after intro completes
        startMainAnimation();
      }
    });
    
    // Create image animation
    if (imageIntroRef.current) {
      // Preload images to avoid flicker
      sportsImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
      // Initial state - blank white screen
      gsap.set(imageIntroRef.current, { opacity: 0 });
      gsap.set(imageOverlayRef.current, { opacity: 1 });
      
      // Fade in first image with dramatic reveal
      introTimeline.to(imageOverlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      introTimeline.to(imageIntroRef.current, {
        opacity: 1, 
        duration: 0.5,
        ease: "power2.inOut"
      }, "-=0.4");
      
      // Rapid sequence of sports images with Apple-style transitions
      sportsImages.forEach((src, index) => {
        if (index === 0) return; // Skip first image as it's already shown
        
        // Add image change
        introTimeline.add(() => {
          if (imageIntroRef.current) {
            imageIntroRef.current.style.backgroundImage = `url(${src})`;
          }
        });
        
        // Apple-style cross-fade transitions
        introTimeline.to(imageOverlayRef.current, {
          opacity: 0.2,
          duration: 0.2,
          ease: "power1.in"
        });
        
        introTimeline.to(imageOverlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out"
        });
        
        // Subtle parallax zoom effect (Apple-style)
        introTimeline.fromTo(imageIntroRef.current,
          { scale: 1.05 },
          { scale: 1, duration: 0.5, ease: "power2.out" },
          "<"
        );
      });
      
      // Final transition to the main content
      introTimeline.to(imageIntroRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut"
      });
      
      introTimeline.to(imageOverlayRef.current, {
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.in"
      }, "-=0.5");
      
      introTimeline.to(imageOverlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
    
    function startMainAnimation() {
      // Apple-style main content animation - staggered fade-in from bottom
      const timeline = gsap.timeline();
      
      timeline
        .fromTo(heroRef.current, 
          { opacity: 0.7, scale: 1.03 }, 
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(textRef.current?.children, 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' },
          "-=0.8"
        )
        .fromTo(buttonRef.current?.children, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
          "-=0.3"
        );
      
      // Animated text effect for "every sports" - Apple style character animation
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
            duration: 0.2,
            delay: 1.5 + (index * 0.03),
            ease: 'power3.out',
            onStart: () => {
              gsap.set(span, { y: -15 });
            }
          });
        });
      }
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image intro overlay */}
      <div 
        ref={imageIntroRef}
        className={`absolute inset-0 bg-cover bg-center z-30 ${introComplete ? 'hidden' : ''}`}
      ></div>
      <div 
        ref={imageOverlayRef}
        className={`absolute inset-0 bg-white z-40 opacity-0 ${introComplete ? 'hidden' : ''}`}
      ></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop)',
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl" ref={textRef}>
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
              to="/categories" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              More Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
