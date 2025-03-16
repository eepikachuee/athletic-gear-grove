
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';

const NewArrivals = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        stagger: 0.1, 
        ease: "power2.out", 
        delay: 0.3 
      }
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  // Mock data for new arrivals
  const newArrivalsData = [
    {
      id: "1",
      name: "Pro Performance Running Shoes",
      price: 129.99,
      category: "Footwear",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Breathable Compression Shirt",
      price: 54.99,
      category: "Apparel",
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Ultra-Light Training Shorts",
      price: 39.99,
      category: "Apparel",
      image: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Weather-Resistant Running Jacket",
      price: 89.99,
      category: "Outerwear",
      image: "/placeholder.svg"
    },
    {
      id: "5",
      name: "Seamless High-Impact Sports Bra",
      price: 44.99,
      category: "Women",
      image: "/placeholder.svg"
    },
    {
      id: "6",
      name: "Adjustable Weight Training Gloves",
      price: 32.99,
      category: "Accessories",
      image: "/placeholder.svg"
    },
    {
      id: "7",
      name: "Quick-Dry Performance Socks (3-Pack)",
      price: 19.99,
      category: "Accessories",
      image: "/placeholder.svg"
    },
    {
      id: "8",
      name: "Smart Fitness Tracker Watch",
      price: 149.99,
      category: "Technology",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <div ref={contentRef}>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">New Arrivals</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our latest athletic gear designed to elevate your performance and style.
                These just-dropped items represent the cutting edge in sports technology and design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {newArrivalsData.map((product) => (
                <div key={product.id} className="product-card">
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    id={product.id}
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="px-8 py-6 text-lg">
                View All New Products
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
