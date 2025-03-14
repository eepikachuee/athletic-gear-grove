
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Running",
    description: "Performance gear for every distance",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/running"
  },
  {
    id: 2,
    name: "Training",
    description: "Everything you need for the gym",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/training"
  },
  {
    id: 3,
    name: "Basketball",
    description: "Court-ready apparel and footwear",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/basketball"
  },
  {
    id: 4,
    name: "Outdoor",
    description: "Gear for nature's challenges",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/outdoor"
  }
];

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories</h2>
          <p className="text-muted-foreground">
            Explore our handpicked collection of premium sportswear categories, 
            designed for every activity and athletic need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
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
