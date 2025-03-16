
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProductCard from '../components/ProductCard';
import { Badge } from '@/components/ui/badge';

const Sale = () => {
  const contentRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    // Animate the main content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Animate the sale banner
    gsap.fromTo(
      bannerRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.4)" }
    );
    
    // Animate product cards
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
  }, []);

  // Mock data for sale items
  const saleItemsData = [
    {
      id: "101",
      name: "Elite Performance Running Shoes",
      originalPrice: 129.99,
      salePrice: 89.99,
      category: "Footwear",
      image: "/placeholder.svg",
      discountPercentage: 30
    },
    {
      id: "102",
      name: "Compression Training Shirt",
      originalPrice: 49.99,
      salePrice: 34.99,
      category: "Apparel",
      image: "/placeholder.svg",
      discountPercentage: 30
    },
    {
      id: "103",
      name: "Lightweight Training Shorts",
      originalPrice: 45.99,
      salePrice: 29.99,
      category: "Apparel",
      image: "/placeholder.svg",
      discountPercentage: 35
    },
    {
      id: "104",
      name: "Water-Resistant Jacket",
      originalPrice: 99.99,
      salePrice: 69.99,
      category: "Outerwear",
      image: "/placeholder.svg",
      discountPercentage: 30
    },
    {
      id: "105",
      name: "Pro Sports Bra",
      originalPrice: 39.99,
      salePrice: 24.99,
      category: "Women",
      image: "/placeholder.svg",
      discountPercentage: 40
    },
    {
      id: "106",
      name: "Weight Training Gloves",
      originalPrice: 34.99,
      salePrice: 19.99,
      category: "Accessories",
      image: "/placeholder.svg",
      discountPercentage: 45
    },
    {
      id: "107",
      name: "Performance Socks (5-Pack)",
      originalPrice: 24.99,
      salePrice: 14.99,
      category: "Accessories",
      image: "/placeholder.svg",
      discountPercentage: 40
    },
    {
      id: "108",
      name: "Insulated Water Bottle",
      originalPrice: 29.99,
      salePrice: 19.99,
      category: "Accessories",
      image: "/placeholder.svg",
      discountPercentage: 35
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <div ref={contentRef}>
            <div 
              ref={bannerRef}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg p-8 md:p-12 mb-12 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">SEASONAL SALE</h1>
              <p className="text-xl md:text-2xl mb-6">Up to 50% off on selected items</p>
              <p className="text-lg">Limited time offer. While supplies last.</p>
            </div>
            
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <Badge className="px-4 py-2 text-base cursor-pointer">All Sale Items</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base cursor-pointer">Footwear</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base cursor-pointer">Apparel</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base cursor-pointer">Accessories</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base cursor-pointer">Men</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base cursor-pointer">Women</Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {saleItemsData.map((product) => (
                  <div key={product.id} className="product-card relative">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-red-500 hover:bg-red-600">
                        {product.discountPercentage}% OFF
                      </Badge>
                    </div>
                    <ProductCard
                      name={product.name}
                      price={product.salePrice}
                      originalPrice={product.originalPrice}
                      category={product.category}
                      image={product.image}
                      id={product.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Sale Terms & Conditions</h2>
              <p className="text-gray-700">
                Sale prices are valid until stock lasts or until the end of the month. 
                Cannot be combined with other discounts or promotions. 
                No rain checks. All sales are final, no returns or exchanges on discounted items.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sale;
