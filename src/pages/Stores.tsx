
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Stores = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  // Sample store locations
  const featuredStores = [
    {
      id: 1,
      name: "New York Flagship",
      address: "123 Fifth Avenue, New York, NY 10010",
      phone: "(212) 555-1234",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Los Angeles Store",
      address: "456 Rodeo Drive, Beverly Hills, CA 90210",
      phone: "(310) 555-5678",
      hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
      image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Chicago Outlet",
      address: "789 Michigan Avenue, Chicago, IL 60611",
      phone: "(312) 555-9012",
      hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-7PM",
      image: "https://images.unsplash.com/photo-1582495680412-65fa5c35e3ba?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const allStores = [
    {
      id: 4,
      name: "Miami Beach",
      address: "321 Collins Avenue, Miami Beach, FL 33139",
      phone: "(305) 555-3456",
      hours: "Mon-Sun: 9AM-10PM"
    },
    {
      id: 5,
      name: "Seattle Downtown",
      address: "654 Pine Street, Seattle, WA 98101",
      phone: "(206) 555-7890",
      hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM"
    },
    {
      id: 6,
      name: "Denver Outlet",
      address: "987 16th Street Mall, Denver, CO 80202",
      phone: "(303) 555-1234",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM"
    },
    {
      id: 7,
      name: "Austin Store",
      address: "246 Congress Avenue, Austin, TX 78701",
      phone: "(512) 555-5678",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM"
    },
    {
      id: 8,
      name: "Boston Flagship",
      address: "135 Newbury Street, Boston, MA 02116",
      phone: "(617) 555-9012",
      hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-7PM"
    },
    {
      id: 9,
      name: "Philadelphia Store",
      address: "864 Walnut Street, Philadelphia, PA 19107",
      phone: "(215) 555-3456",
      hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div ref={contentRef}>
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Stores</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Visit a Sports Elite store to experience our products firsthand, get expert advice,
                and enjoy personalized service. Find your nearest location below.
              </p>
            </section>
            
            <section className="mb-16">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input placeholder="Enter city, state or zip code" />
                </div>
                <Button>Find Stores</Button>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Featured Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {featuredStores.map(store => (
                  <div key={store.id} className="rounded-lg overflow-hidden border">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={store.image} 
                        alt={store.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
                      <p className="text-sm mb-1">{store.address}</p>
                      <p className="text-sm mb-1">{store.phone}</p>
                      <p className="text-sm text-muted-foreground mb-3">{store.hours}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Directions</Button>
                        <Button variant="outline" size="sm">Store Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">All Stores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {allStores.map(store => (
                  <div key={store.id} className="p-5 border rounded-lg">
                    <h3 className="font-semibold mb-2">{store.name}</h3>
                    <p className="text-sm mb-1">{store.address}</p>
                    <p className="text-sm mb-1">{store.phone}</p>
                    <p className="text-sm text-muted-foreground mb-3">{store.hours}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Directions</Button>
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
                  <h2 className="text-2xl font-bold mb-3">Store Services</h2>
                  <p className="mb-4">
                    Our stores offer a variety of services to enhance your shopping experience and help you
                    get the most out of your Sports Elite products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Personal shopping appointments
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Expert product fitting
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      In-store returns and exchanges
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Click & Collect online orders
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Gift wrapping
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-3">Book an Appointment</h3>
                    <p className="text-sm mb-4">
                      Reserve a time with our in-store experts for personalized service and product recommendations.
                    </p>
                    <Button className="w-full">Schedule Now</Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stores;
