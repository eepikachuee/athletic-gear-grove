
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
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Main content animation
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
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
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
