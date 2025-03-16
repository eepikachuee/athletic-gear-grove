
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample product data
const products = [
  {
    id: "1",
    name: "Performance Running Shoes",
    price: 129.99,
    description: "Premium running shoes designed for maximum comfort and performance. Featuring responsive cushioning and breathable mesh upper, these shoes are perfect for both serious runners and casual joggers.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Black", "White", "Red"],
    category: "Footwear",
    rating: 4.8,
    reviewCount: 128,
    isNew: true
  },
  {
    id: "2",
    name: "Breathable Training Tee",
    price: 34.99,
    description: "Lightweight and breathable training t-shirt made with moisture-wicking fabric to keep you dry during workouts. The relaxed fit allows for full range of motion.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Gray", "Black"],
    category: "Apparel",
    rating: 4.5,
    reviewCount: 86
  }
];

// Sample related products
const relatedProducts = [
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
    category: "Accessories",
    isNew: true
  }
];

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const productRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching product data
    setLoading(true);
    const productData = products.find(p => p.id === id);
    
    // Simulate network delay
    setTimeout(() => {
      if (productData) {
        setProduct(productData);
        setSelectedSize(productData.sizes[0]);
        setSelectedColor(productData.colors[0]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  useEffect(() => {
    if (product && !loading) {
      // GSAP animation for product details
      gsap.fromTo(
        productRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [product, loading]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedColor}, ${selectedSize}) x ${quantity}`,
      variant: "default",
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
      variant: "default",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-6 md:px-8 flex items-center justify-center">
          <div className="animate-pulse">Loading product details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-6 md:px-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="mb-6 text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop" className="px-6 py-3 bg-black text-white rounded-md">
            Return to Shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <div ref={productRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    className={`aspect-square rounded overflow-hidden ${
                      selectedImage === idx ? "ring-2 ring-black" : ""
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product details */}
            <div className="space-y-6">
              {product.isNew && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-black text-white rounded-full">
                  New Arrival
                </span>
              )}
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="text-2xl font-bold">${product.price}</div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Colors</h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color: string) => (
                      <button
                        key={color}
                        className={`px-4 py-2 border rounded-md text-sm ${
                          selectedColor === color 
                            ? "border-black bg-black text-white" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md text-sm ${
                          selectedSize === size 
                            ? "border-black bg-black text-white" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Quantity</h3>
                  <div className="flex items-center space-x-2">
                    <button 
                      className="w-10 h-10 border rounded-md flex items-center justify-center"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-10 text-center">{quantity}</span>
                    <button 
                      className="w-10 h-10 border rounded-md flex items-center justify-center"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  className="px-8 py-3 bg-black text-white font-medium rounded-md flex items-center justify-center hover:bg-black/90 transition-colors"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button 
                  className="px-8 py-3 border border-black rounded-md flex items-center justify-center hover:bg-black/5 transition-colors"
                  onClick={handleWishlist}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </button>
              </div>
              
              <div className="pt-8 border-t">
                <h3 className="font-medium mb-3">Description</h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Related products section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <ProductCard {...relatedProduct} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
