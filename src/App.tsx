
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
