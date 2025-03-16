
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import SizeGuide from "./pages/SizeGuide";
import Accessibility from "./pages/Accessibility";
import Careers from "./pages/Careers";
import Stores from "./pages/Stores";
import Sustainability from "./pages/Sustainability";
import Affiliates from "./pages/Affiliates";
import Press from "./pages/Press";
import Search from "./pages/Search";
import NewArrivals from "./pages/NewArrivals";
import Sale from "./pages/Sale";
import Membership from "./pages/Membership";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading screen
    const tl = gsap.timeline({
      onComplete: () => setLoading(false)
    });
    
    tl.to(".loader-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(".loader", {
      y: "-100%",
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.5
    });

    // Cleanup GSAP animations
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Loader component */}
        {loading && (
          <div className="loader fixed inset-0 bg-black flex items-center justify-center z-50">
            <h1 className="loader-text text-4xl md:text-6xl font-bold text-white opacity-0 transform translate-y-8">
              SPORTS ELITE
            </h1>
          </div>
        )}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Shop Pages */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<CategoryDetail />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search" element={<Search />} />
            
            {/* New Arrivals and Sales */}
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/membership" element={<Membership />} />
            
            {/* Help Center */}
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/accessibility" element={<Accessibility />} />
            
            {/* About Company */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/press" element={<Press />} />
            
            {/* Legal */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
