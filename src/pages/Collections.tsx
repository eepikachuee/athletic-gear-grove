
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample collections data
const collections = [
  {
    id: 1,
    name: "Summer Athletics 2023",
    description: "High-performance gear designed for summer sports and training",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=2000&auto=format&fit=crop&q=80",
    link: "/collections/summer-athletics"
  },
  {
    id: 2,
    name: "Winter Training",
    description: "Cold-weather essentials for outdoor training sessions",
    image: "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=2000&auto=format&fit=crop&q=80",
    link: "/collections/winter-training"
  },
  {
    id: 3,
    name: "Marathon Essentials",
    description: "Everything you need for your next long-distance run",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=2000&auto=format&fit=crop&q=80",
    link: "/collections/marathon"
  },
  {
    id: 4,
    name: "Street Style",
    description: "Athletic wear with urban aesthetics for everyday comfort",
    image: "https://images.unsplash.com/photo-1591243315780-978fd00ff9db?w=2000&auto=format&fit=crop&q=80",
    link: "/collections/street-style"
  }
];

const Collections = () => {
  const headerRef = useRef(null);
  const collectionsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      collectionsRef.current?.children,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.3
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <div ref={headerRef} className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Collections</h1>
            <p className="text-muted-foreground text-lg">
              Explore our carefully curated collections designed for specific activities,
              sports and seasons. From marathon training to urban street style, we've got you covered.
            </p>
          </div>
          
          <div ref={collectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.id}
                to={collection.link}
                className="group block relative overflow-hidden rounded-xl h-80"
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors"></div>
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl font-bold mb-2">{collection.name}</h2>
                  <p className="text-white/80 mb-4">{collection.description}</p>
                  <span className="inline-block text-white font-medium group-hover:underline">
                    Explore Collection
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
