
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-28 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-black/80 to-transparent absolute inset-0 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=2000&auto=format&fit=crop&q=80" 
          alt="Athletes training" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take Your Training to the Next Level
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Join our community of athletes and discover premium gear designed to enhance 
            your performance, no matter your sport or fitness level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors group"
            >
              Shop Now
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/membership" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              Join Membership
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
