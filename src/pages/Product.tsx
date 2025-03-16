import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Share2, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Simulated product data
const product = {
  id: "1",
  name: "Pro Performance Running Shoe",
  description: "Engineered for optimal performance and comfort, these running shoes feature advanced cushioning technology and responsive design to enhance your running experience.",
  price: 129.99,
  category: "Footwear",
  rating: 4.8,
  reviewCount: 124,
  colors: ["Black", "White", "Red"],
  sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&auto=format&fit=crop&q=80"
  ],
  features: [
    "Lightweight cushioned midsole for all-day comfort",
    "Breathable engineered mesh upper keeps feet cool",
    "Durable rubber outsole provides excellent traction",
    "Responsive design returns energy with each step",
    "Reinforced heel counter for added stability"
  ],
  specifications: {
    material: "Synthetic mesh, rubber",
    weight: "255g (US 9)",
    support: "Neutral",
    closure: "Lace-up",
    maintenance: "Spot clean with mild soap and water, air dry"
  }
};

// Related products
const relatedProducts = [
  {
    id: "2",
    name: "Performance Training Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    category: "Apparel"
  },
  {
    id: "3",
    name: "Moisture-Wicking Running Socks",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3714d56a8d2?w=800&auto=format&fit=crop&q=80",
    category: "Accessories"
  },
  {
    id: "4",
    name: "Lightweight Compression Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    category: "Apparel",
    isNew: true
  },
  {
    id: "5",
    name: "Reflective Running Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    category: "Accessories"
  }
];

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const breadcrumbRef = useRef(null);
  const productRef = useRef(null);
  const tabsRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      breadcrumbRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    
    gsap.fromTo(
      productRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 }
    );
    
    gsap.fromTo(
      tabsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.3 }
    );
    
    gsap.fromTo(
      relatedRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.4 }
    );
  }, []);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart!`);
    // Implement actual cart logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          {/* Breadcrumb navigation */}
          <div className="mb-8 text-sm flex items-center gap-2" ref={breadcrumbRef}>
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <Link to="/shop" className="text-muted-foreground hover:text-primary">Shop</Link>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <Link to={`/shop/${product.category.toLowerCase()}`} className="text-muted-foreground hover:text-primary">{product.category}</Link>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <span className="text-foreground">{product.name}</span>
          </div>
          
          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" ref={productRef}>
            {/* Product images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === image ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-auto aspect-square object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              {/* Color selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button 
                      key={color} 
                      className={`px-4 py-2 border rounded ${selectedColor === index ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary'}`}
                      onClick={() => setSelectedColor(index)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, index) => (
                    <button 
                      key={size} 
                      className={`px-4 py-2 border rounded ${selectedSize === index ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary'}`}
                      onClick={() => setSelectedSize(index)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity selection */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 border rounded-l-md flex items-center justify-center hover:bg-gray-100"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <div className="w-16 h-10 border-t border-b flex items-center justify-center">
                    {quantity}
                  </div>
                  <button 
                    className="w-10 h-10 border rounded-r-md flex items-center justify-center hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  className="flex-1 border border-input px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
              </div>
              
              {/* Share */}
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Share this product</span>
              </div>
            </div>
          </div>
          
          {/* Product details tabs */}
          <div className="mb-20" ref={tabsRef}>
            <Tabs defaultValue="features">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-6 border rounded-md">
                <h3 className="text-xl font-bold mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specs" className="p-6 border rounded-md">
                <h3 className="text-xl font-bold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground capitalize">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-6 border rounded-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">Write a Review</button>
                </div>
                <p className="text-muted-foreground">This is where customer reviews would appear. Implement API call to fetch real reviews.</p>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related products */}
          <div ref={relatedRef}>
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {relatedProducts.map(product => (
                  <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-1">
                    <Link to={`/product/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
