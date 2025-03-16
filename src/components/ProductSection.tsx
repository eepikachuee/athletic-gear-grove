import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from './ProductCard';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Featured products mock data
const featuredProducts = {
  trending: [
    {
      id: "1",
      name: "Performance Running Shoes",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
      category: "Footwear",
      isNew: true
    },
    {
      id: "2",
      name: "Breathable Training Tee",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      category: "Apparel"
    },
    {
      id: "3",
      name: "Compression Fitness Leggings",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1506902540976-51dac23c5663?w=800&auto=format&fit=crop&q=80",
      category: "Apparel",
      isNew: true
    },
    {
      id: "4",
      name: "Adjustable Jump Rope",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
      category: "Equipment"
    }
  ],
  bestSellers: [
    {
      id: "5",
      name: "Lightweight Training Shorts",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=80",
      category: "Apparel"
    },
    {
      id: "6",
      name: "Advanced Fitness Tracker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format&fit=crop&q=80",
      hoverImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
      category: "Accessories",
      isNew: true
    },
    {
      id: "7",
      name: "Insulated Water Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
      category: "Accessories"
    },
    {
      id: "8",
      name: "Cushioned Training Socks",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1586350977771-b3714d56a8d2?w=800&auto=format&fit=crop&q=80",
      category: "Accessories"
    }
  ],
  newArrivals: [
    {
      id: "9",
      name: "Performance Workout Gloves",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=80",
      category: "Accessories",
      isNew: true
    },
    {
      id: "10",
      name: "Impact Resistance Skipping Rope",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=800&auto=format&fit=crop&q=80",
      category: "Equipment"
    },
    {
      id: "11",
      name: "Lightweight Running Jacket",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
      category: "Apparel",
      isNew: true
    },
    {
      id: "12",
      name: "Premium Yoga Mat",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80",
      category: "Equipment"
    }
  ]
};

const ProductSection = () => {
  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=200",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      productsRef.current?.children,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="py-20 px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of premium sports equipment and apparel designed to enhance your performance and take your game to the next level.
          </p>
        </div>
        
        <Tabs defaultValue="trending" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="best-sellers">Best Sellers</TabsTrigger>
              <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="trending">
            <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {featuredProducts.trending.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="best-sellers">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {featuredProducts.bestSellers.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new-arrivals">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {featuredProducts.newArrivals.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div ref={ctaRef} className="text-center">
          <Link 
            to="/shop" 
            className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All Products 
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
