
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
  image: string;
  link: string;
  sport: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Football",
    description: "Professional equipment for the field",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/football",
    sport: "team"
  },
  {
    id: 2,
    name: "Basketball",
    description: "Court-ready apparel and footwear",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/basketball",
    sport: "team"
  },
  {
    id: 3,
    name: "Running",
    description: "Performance gear for every distance",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/running",
    sport: "individual"
  },
  {
    id: 4,
    name: "Training",
    description: "Everything you need for the gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/training",
    sport: "individual"
  },
  {
    id: 5,
    name: "Soccer",
    description: "Gear for the beautiful game",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/soccer",
    sport: "team"
  },
  {
    id: 6,
    name: "Tennis",
    description: "Equipment for court perfection",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/tennis",
    sport: "individual"
  },
  {
    id: 7,
    name: "Swimming",
    description: "Performance swimwear and accessories",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/swimming",
    sport: "individual"
  },
  {
    id: 8,
    name: "Golf",
    description: "Precision equipment for the course",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/golf",
    sport: "individual"
  }
];

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const filteredCategories = filter === "all" 
    ? categories 
    : categories.filter(cat => cat.sport === filter);

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
          {filteredCategories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg h-80 card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo"
                style={{ 
                  backgroundImage: `url(${category.image})`,
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
