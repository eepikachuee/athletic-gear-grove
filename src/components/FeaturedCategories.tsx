
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type Category = {
  id: number;
  name: string;
  description: string;
  images: string[];
  link: string;
  sport: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Football",
    description: "Professional equipment for the field",
    images: [
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0c?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/football",
    sport: "team"
  },
  {
    id: 2,
    name: "Basketball",
    description: "Court-ready apparel and footwear",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/basketball",
    sport: "team"
  },
  {
    id: 3,
    name: "Running",
    description: "Performance gear for every distance",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594550723350-50224204ad07?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/running",
    sport: "individual"
  },
  {
    id: 4,
    name: "Training",
    description: "Everything you need for the gym",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/training",
    sport: "individual"
  },
  {
    id: 5,
    name: "Soccer",
    description: "Gear for the beautiful game",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/soccer",
    sport: "team"
  },
  {
    id: 6,
    name: "Tennis",
    description: "Equipment for court perfection",
    images: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602211844066-d3bb556e983b?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1640146327945-da7be8b3a9f9?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/tennis",
    sport: "individual"
  },
  {
    id: 7,
    name: "Swimming",
    description: "Performance swimwear and accessories",
    images: [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546910605-b79506c3e3db?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505578183806-3a82ace06dc2?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/swimming",
    sport: "individual"
  },
  {
    id: 8,
    name: "Golf",
    description: "Precision equipment for the course",
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634904786013-32c56a5ee82a?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "/shop/golf",
    sport: "individual"
  }
];

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({});
  const imageIntervals = useRef<Record<number, NodeJS.Timeout>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const filteredCategories = filter === "all" 
    ? categories 
    : categories.filter(cat => cat.sport === filter);

  // Preload all images to avoid flickering
  useEffect(() => {
    categories.forEach(category => {
      category.images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  // Handle image rotation on hover
  useEffect(() => {
    // Clear any existing intervals when component unmounts
    return () => {
      Object.values(imageIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  // Start the image rotation when a card is hovered
  const startImageRotation = (categoryId: number, categoryImages: string[]) => {
    // Clear any existing interval for this card
    if (imageIntervals.current[categoryId]) {
      clearInterval(imageIntervals.current[categoryId]);
    }

    // Initialize image index if not set
    if (!imageIndices[categoryId]) {
      setImageIndices(prev => ({ ...prev, [categoryId]: 0 }));
    }

    // Create new interval for image rotation
    imageIntervals.current[categoryId] = setInterval(() => {
      setImageIndices(prev => {
        const currentIndex = prev[categoryId] || 0;
        const nextIndex = (currentIndex + 1) % categoryImages.length;
        return { ...prev, [categoryId]: nextIndex };
      });
    }, 800); // Medium pace - change every 800ms
  };

  // Stop the image rotation when hover ends
  const stopImageRotation = (categoryId: number) => {
    if (imageIntervals.current[categoryId]) {
      clearInterval(imageIntervals.current[categoryId]);
      delete imageIntervals.current[categoryId];
    }
    // Reset to first image
    setImageIndices(prev => ({ ...prev, [categoryId]: 0 }));
  };

  useEffect(() => {
    // GSAP animation for section entrance
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );

    // GSAP animations for cards
    const cards = cardsRef.current?.children;
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [filter]); // Re-run when filter changes

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories</h2>
          <p className="text-muted-foreground mb-8">
            Explore our handpicked collection of premium sportswear categories, 
            designed for every activity and athletic need.
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <Select
              defaultValue="all"
              onValueChange={(value) => setFilter(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Sport Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="team">Team Sports</SelectItem>
                <SelectItem value="individual">Individual Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category) => {
            const currentImageIndex = imageIndices[category.id] || 0;
            return (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-lg h-80 card-hover"
                onMouseEnter={() => {
                  setHoveredIndex(category.id);
                  startImageRotation(category.id, category.images);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  stopImageRotation(category.id);
                }}
              >
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo"
                  style={{ 
                    backgroundImage: `url(${category.images[currentImageIndex]})`,
                    transform: hoveredIndex === category.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                ></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out-expo group-hover:-translate-y-1">{category.name}</h3>
                  <p className="text-white/80 mb-4 transform transition-transform duration-300 ease-out-expo group-hover:-translate-y-1">{category.description}</p>
                  <div className="transform transition-transform duration-300 ease-out-expo translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block text-white text-sm font-medium">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
