import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Performance Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
    category: "Footwear",
    isNew: true
  },
  {
    id: 2,
    name: "Breathable Training Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Compression Fitness Leggings",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1506902540976-51dac23c5663?w=800&auto=format&fit=crop&q=80",
    category: "Apparel",
    isNew: true
  },
  {
    id: 4,
    name: "Adjustable Jump Rope",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
    category: "Equipment"
  },
  {
    id: 5,
    name: "Lightweight Training Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=80",
    category: "Apparel"
  },
  {
    id: 6,
    name: "Advanced Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
    category: "Accessories",
    isNew: true
  },
  {
    id: 7,
    name: "Insulated Water Bottle",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Cushioned Training Socks",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3714d56a8d2?w=800&auto=format&fit=crop&q=80",
    category: "Accessories"
  }
];

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
    
    tl.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    const productItems = productsRef.current?.children;
    if (productItems?.length) {
      gsap.fromTo(
        productItems,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }
    
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} id="product-section" className="py-20 px-6 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div ref={headingRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
          <p className="text-muted-foreground">
            Discover our most popular athletic gear, trusted by professional athletes 
            and fitness enthusiasts worldwide.
          </p>
        </div>
        
        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
