
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample category data
const categoryData = {
  football: {
    name: "Football",
    description: "Professional equipment for the field",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop",
  },
  basketball: {
    name: "Basketball",
    description: "Court-ready apparel and footwear",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop",
  },
  running: {
    name: "Running",
    description: "Performance gear for every distance",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop",
  },
  training: {
    name: "Training",
    description: "Everything you need for the gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
  },
  soccer: {
    name: "Soccer",
    description: "Gear for the beautiful game",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940&auto=format&fit=crop",
  },
  tennis: {
    name: "Tennis",
    description: "Equipment for court perfection",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop",
  },
  swimming: {
    name: "Swimming",
    description: "Performance swimwear and accessories",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop",
  },
  golf: {
    name: "Golf",
    description: "Precision equipment for the course",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop",
  },
  men: {
    name: "Men's Collection",
    description: "Performance sportswear for men",
    image: "https://images.unsplash.com/photo-1581093804475-577d67f96a0b?q=80&w=2940&auto=format&fit=crop",
  },
  women: {
    name: "Women's Collection",
    description: "Performance sportswear for women",
    image: "https://images.unsplash.com/photo-1458442310124-dde6edb43d10?q=80&w=2940&auto=format&fit=crop",
  },
  accessories: {
    name: "Accessories",
    description: "Essential accessories for every sport",
    image: "https://images.unsplash.com/photo-1611077086648-b604eec78a26?q=80&w=2940&auto=format&fit=crop",
  },
  equipment: {
    name: "Equipment",
    description: "Professional sports equipment",
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=2940&auto=format&fit=crop",
  }
};

// Sample products data (reused from ProductSection)
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

const CategoryDetail = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryInfo, setCategoryInfo] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    // Get category info
    if (category && categoryData[category as keyof typeof categoryData]) {
      setCategoryInfo(categoryData[category as keyof typeof categoryData]);
      
      // Filter products (this would normally be a database query)
      // For demo purposes, just show all products
      setFilteredProducts(products);
    }
  }, [category]);

  useEffect(() => {
    if (categoryInfo) {
      // Hero animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      // Products animation
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
    }
  }, [categoryInfo]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-6 md:px-8 flex items-center justify-center">
          <div>Category not found</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="pt-32 pb-16 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img 
              src={categoryInfo.image} 
              alt={categoryInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryInfo.name}</h1>
              <p className="text-white/90 text-lg">{categoryInfo.description}</p>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <h2 className="text-2xl font-bold">{categoryInfo.name} Products</h2>
              <div className="flex items-center gap-2">
                <select className="px-4 py-2 bg-white border rounded-md text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            
            <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
