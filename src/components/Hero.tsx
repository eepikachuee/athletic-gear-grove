
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop)',
          transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
          transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1), filter 2s cubic-bezier(0.19, 1, 0.22, 1)',
          filter: isLoaded ? 'blur(0)' : 'blur(8px)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div 
            className={`inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 opacity-0 ${
              isLoaded ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            New Collection 2024
          </div>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 ${
              isLoaded ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Elevate Your <br />
            Athletic Performance
          </h1>
          
          <p 
            className={`text-lg sm:text-xl text-white/90 mb-8 max-w-xl opacity-0 ${
              isLoaded ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Discover premium sportswear designed for maximum performance
            and unmatched comfort for every athlete.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 opacity-0 ${
              isLoaded ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
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
