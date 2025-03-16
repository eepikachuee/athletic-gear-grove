
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    id: 1,
    name: "Football",
    description: "Professional equipment for the field",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/football"
  },
  {
    id: 2,
    name: "Basketball",
    description: "Court-ready apparel and footwear",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/basketball"
  },
  {
    id: 3,
    name: "Running",
    description: "Performance gear for every distance",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/running"
  },
  {
    id: 4,
    name: "Training",
    description: "Everything you need for the gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/training"
  },
  {
    id: 5,
    name: "Soccer",
    description: "Gear for the beautiful game",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/soccer"
  },
  {
    id: 6,
    name: "Tennis",
    description: "Equipment for court perfection",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/tennis"
  },
  {
    id: 7,
    name: "Swimming",
    description: "Performance swimwear and accessories",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/swimming"
  },
  {
    id: 8,
    name: "Golf",
    description: "Precision equipment for the course",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/golf"
  },
  {
    id: 9,
    name: "Cycling",
    description: "Gear for road and trail",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/cycling"
  },
  {
    id: 10,
    name: "Yoga",
    description: "Comfort and flexibility for your practice",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/yoga"
  },
  {
    id: 11,
    name: "Boxing",
    description: "Professional fighting gear",
    image: "https://images.unsplash.com/photo-1549824506-b7045a1a74a2?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/boxing"
  },
  {
    id: 12,
    name: "Hiking",
    description: "Outdoor essentials for every trail",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/hiking"
  }
];

const Categories = () => {
  const headerRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      categoriesRef.current?.children,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.6, 
        ease: "power2.out",
        delay: 0.3
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Categories</h1>
            <p className="text-muted-foreground">
              Browse all our sport categories and find the perfect gear for your athletic needs.
            </p>
          </div>
          
          <div ref={categoriesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-lg h-64"
              >
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300"></div>
                <img 
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out-expo group-hover:-translate-y-1">{category.name}</h3>
                  <p className="text-white/80 mb-4 transform transition-transform duration-300 ease-out-expo group-hover:-translate-y-1">{category.description}</p>
                  <div className="transform transition-transform duration-300 ease-out-expo translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block text-white text-sm font-medium">
                      Explore Category
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
