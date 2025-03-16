
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Performance Running Shoes",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
    size: "US 10",
    color: "Black"
  },
  {
    id: 2,
    name: "Breathable Training Tee",
    price: 34.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop&q=80",
    size: "M",
    color: "Blue"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const cartRef = useRef(null);
  const { toast } = useToast();

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  useEffect(() => {
    // GSAP animation for cart items
    gsap.fromTo(
      cartRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    // Animate the removal
    const itemEl = document.getElementById(`cart-item-${id}`);
    
    gsap.to(itemEl, {
      height: 0,
      opacity: 0,
      padding: 0,
      marginBottom: 0,
      duration: 0.3,
      onComplete: () => {
        setCartItems(cartItems.filter(item => item.id !== id));
        
        toast({
          title: "Item removed",
          description: "The item has been removed from your cart",
        });
      }
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "This would normally redirect to a checkout page",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link 
                to="/shop" 
                className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-black/90 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div ref={cartRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div 
                    id={`cart-item-${item.id}`}
                    key={item.id} 
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {item.color}, {item.size}
                      </div>
                      <div className="font-medium">${item.price.toFixed(2)}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button 
                        className="w-8 h-8 flex items-center justify-center border rounded"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center border rounded"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      className="text-red-500 hover:text-red-600 transition-colors"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link 
                    to="/shop" 
                    className="text-sm font-medium hover:underline"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <button
                  className="w-full py-3 bg-black text-white font-medium rounded-md flex items-center justify-center hover:bg-black/90 transition-colors"
                  onClick={handleCheckout}
                >
                  Checkout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <div className="mt-4 text-xs text-center text-muted-foreground">
                  Taxes calculated at checkout
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
