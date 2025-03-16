
import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Search as SearchIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Input } from "@/components/ui/input";

// Sample products data
const allProducts = [
  {
    id: 1,
    name: "Performance Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    category: "Footwear",
    isNew: true,
    description: "Premium running shoes with responsive cushioning."
  },
  {
    id: 2,
    name: "Breathable Training Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    category: "Apparel",
    description: "Lightweight training t-shirt with moisture-wicking technology."
  },
  {
    id: 3,
    name: "Compression Fitness Leggings",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1506902540976-51dac23c5663?w=800&auto=format&fit=crop&q=80",
    category: "Apparel",
    isNew: true,
    description: "High-performance compression leggings for maximum support."
  },
  {
    id: 4,
    name: "Adjustable Jump Rope",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
    category: "Equipment",
    description: "Professional adjustable jump rope for cardio training."
  },
  {
    id: 5,
    name: "Lightweight Training Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=80",
    category: "Apparel",
    description: "Comfortable training shorts with quick-dry technology."
  },
  {
    id: 6,
    name: "Advanced Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format&fit=crop&q=80",
    category: "Accessories",
    isNew: true,
    description: "Track your workouts, heart rate, and sleep patterns."
  },
  {
    id: 7,
    name: "Insulated Water Bottle",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
    category: "Accessories",
    description: "Keep your drinks cold for 24 hours or hot for 12 hours."
  },
  {
    id: 8,
    name: "Cushioned Training Socks",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3714d56a8d2?w=800&auto=format&fit=crop&q=80",
    category: "Accessories",
    description: "Extra cushioning in high-impact areas for comfort."
  }
];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const resultsRef = useRef(null);
  const formRef = useRef(null);

  // Perform search when query changes
  useEffect(() => {
    setLoading(true);
    
    // Simulate async search
    const timer = setTimeout(() => {
      if (!query.trim()) {
        setSearchResults([]);
        setLoading(false);
        return;
      }
      
      const filteredResults = allProducts.filter(product => {
        const searchTerm = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
        );
      });
      
      setSearchResults(filteredResults);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [query]);

  // Update search params when query changes
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  // Animation
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    
    if (searchResults.length > 0 && !loading) {
      gsap.fromTo(
        resultsRef.current?.children,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.5, 
          ease: "power2.out" 
        }
      );
    }
  }, [searchResults, loading]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already triggered by the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div ref={formRef} className="mb-12">
            <h1 className="text-3xl font-bold mb-6">Search Products</h1>
            
            <form onSubmit={handleSearchSubmit} className="max-w-2xl">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for products, categories, or features..."
                  className="pl-10 py-6 text-lg"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </form>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-pulse">Searching...</div>
            </div>
          ) : (
            <>
              {query && (
                <div className="mb-8">
                  <h2 className="text-lg font-medium">
                    {searchResults.length === 0
                      ? "No results found"
                      : `${searchResults.length} result${searchResults.length === 1 ? '' : 's'} for "${query}"`}
                  </h2>
                </div>
              )}
              
              {searchResults.length > 0 && (
                <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {searchResults.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  ))}
                </div>
              )}
              
              {query && searchResults.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-8">
                    Try searching with different keywords or browse our categories
                  </p>
                  <Link 
                    to="/categories" 
                    className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-black/90 transition-colors"
                  >
                    Browse Categories
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
