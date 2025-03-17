
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
  const videoOverlayRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Parallax video effect on scroll
    const parallaxVideo = () => {
      if (videoRef.current) {
        const scrollPos = window.scrollY;
        const videoEl = videoRef.current as HTMLElement;
        // Scale up slightly and move video on scroll for parallax effect
        gsap.to(videoEl, {
          y: scrollPos * 0.15,
          scale: 1 + scrollPos * 0.0005,
          duration: 0.5,
          ease: "power1.out"
        });
        
        // Increase overlay opacity on scroll
        if (videoOverlayRef.current) {
          const overlayEl = videoOverlayRef.current as HTMLElement;
          const opacity = Math.min(0.3 + scrollPos * 0.001, 0.7);
          gsap.to(overlayEl, {
            backgroundColor: `rgba(0, 0, 0, ${opacity})`,
            duration: 0.5
          });
        }
      }
    };
    
    // Add scroll listener for parallax effect
    window.addEventListener('scroll', parallaxVideo);
    
    // Main content animation
    const timeline = gsap.timeline();
    
    // Video zoom in effect on load - similar to playagrande.com
    timeline
      .fromTo(videoRef.current, 
        { scale: 1.2, opacity: 0.7 }, 
        { scale: 1.05, opacity: 1, duration: 2.5, ease: 'power2.out' }
      )
      .fromTo(heroRef.current, 
        { opacity: 0.7 }, 
        { opacity: 1, duration: 1.2, ease: 'power2.out' },
        "-=2"
      )
      .fromTo(textRef.current?.children, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' },
        "-=1.5"
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
    
    return () => {
      window.removeEventListener('scroll', parallaxVideo);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with overlay - styled similarly to playagrande.com */}
      <div 
        ref={videoOverlayRef}
        className="absolute inset-0 bg-black/30 z-10"
      ></div>
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        <video 
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.05]" /* Start slightly zoomed in for the parallax effect */
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl" ref={textRef}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display tracking-tight">
            Dominate <br />
            <span className="text-white/90">The Field</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Professional quality football gear for players at <span ref={animatedTextRef} className="font-bold text-white">every sports</span> level.
            Engineered for performance, designed for champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5" ref={buttonRef}>
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/categories" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
