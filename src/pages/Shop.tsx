import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample products data
const products = [
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
  },
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
  },
  {
    id: "9",
    name: "Performance Workout Gloves",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=80",
    category: "Accessories"
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
];

const Shop = () => {
  const productsRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      productsRef.current?.children,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.6, 
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
          <div ref={headerRef} className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <Link to="/shop/men" className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-md text-sm font-medium">Men</Link>
                <Link to="/shop/women" className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-md text-sm font-medium">Women</Link>
                <Link to="/shop/accessories" className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-md text-sm font-medium">Accessories</Link>
                <Link to="/shop/equipment" className="px-4 py-2 bg-black/5 hover:bg-black/10 rounded-md text-sm font-medium">Equipment</Link>
              </div>
              <div className="flex items-center gap-2">
                <select className="px-4 py-2 bg-white border rounded-md text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
          
          <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard {...product} />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
