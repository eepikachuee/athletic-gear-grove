
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Press = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div ref={contentRef}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Press and Media</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Welcome to the Sports Elite press room. Find the latest news, media resources, 
                and contact information for press inquiries.
              </p>
              
              <h2>Press Releases</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold">Sports Elite Announces Sustainable Product Line</h3>
                  <p className="text-sm text-gray-500">June 15, 2023</p>
                  <p>
                    Sports Elite has announced a new line of athletic wear made from 100% recycled materials, 
                    furthering its commitment to sustainability and reducing environmental impact.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">Read more</a>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold">Partnership with Olympic Gold Medalist Announced</h3>
                  <p className="text-sm text-gray-500">March 3, 2023</p>
                  <p>
                    Sports Elite is proud to announce a multi-year partnership with Olympic gold medalist 
                    and world champion runner Maya Williamson.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">Read more</a>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold">Sports Elite Opens Flagship Store in New York</h3>
                  <p className="text-sm text-gray-500">November 10, 2022</p>
                  <p>
                    Sports Elite has opened its largest flagship store in the heart of New York City, 
                    featuring an innovative retail experience and exclusive product offerings.
                  </p>
                  <a href="#" className="text-blue-600 hover:underline">Read more</a>
                </div>
              </div>
              
              <h2 className="mt-12">Media Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Company Logos</h3>
                  <p className="mb-4">Download our brand logos in various formats for press usage.</p>
                  <a href="#" className="text-blue-600 hover:underline">Download Logo Pack</a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Product Images</h3>
                  <p className="mb-4">High-resolution product images for media use.</p>
                  <a href="#" className="text-blue-600 hover:underline">Browse Image Library</a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Executive Bios</h3>
                  <p className="mb-4">Biographies and headshots of Sports Elite leadership team.</p>
                  <a href="#" className="text-blue-600 hover:underline">View Executive Profiles</a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Brand Guidelines</h3>
                  <p className="mb-4">Official brand guidelines and usage policies.</p>
                  <a href="#" className="text-blue-600 hover:underline">View Guidelines</a>
                </div>
              </div>
              
              <h2 className="mt-12">Media Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-bold">For press inquiries, please contact:</p>
                <p>Media Relations Department</p>
                <p>Email: press@sportselite.com</p>
                <p>Phone: (555) 123-4567</p>
                <p className="mt-4">
                  Please note that we strive to respond to all media inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
