
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Sustainability = () => {
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
        <div className="container mx-auto max-w-6xl">
          <div ref={contentRef}>
            <section className="mb-20">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  At Sports Elite, we believe in creating high-performance products that don't compromise 
                  our planet's future. Our sustainability mission focuses on innovative materials, 
                  responsible manufacturing, and giving back to the communities we serve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 border rounded-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Innovating with recycled, organic, and sustainable materials in our products.
                    </p>
                  </div>
                  <div className="p-5 border rounded-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Manufacturing</h3>
                    <p className="text-sm text-muted-foreground">
                      Reducing our carbon footprint through efficient production and ethical labor practices.
                    </p>
                  </div>
                  <div className="p-5 border rounded-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting environmental initiatives and promoting sport as a force for positive change.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-20">
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1536939459926-301728717817?w=1200&auto=format&fit=crop&q=80" 
                    alt="Sustainable materials" 
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Sustainable Materials</h2>
                  <p className="mb-4">
                    We're constantly innovating to incorporate more sustainable materials in our products. 
                    By 2025, our goal is to use at least 50% recycled polyester in all apparel and footwear.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-medium">Recycled Polyester</span>
                        <p className="text-sm text-muted-foreground">Made from post-consumer plastic bottles, reducing landfill waste.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-medium">Organic Cotton</span>
                        <p className="text-sm text-muted-foreground">Grown without harmful pesticides or synthetic fertilizers.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-medium">Bio-Based Materials</span>
                        <p className="text-sm text-muted-foreground">Developing innovative materials from renewable resources like algae and sugar cane.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">45% of our products now use recycled materials</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-20">
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-10">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1567057420215-0afa6684a33a?w=1200&auto=format&fit=crop&q=80" 
                    alt="Sustainable manufacturing" 
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Responsible Manufacturing</h2>
                  <p className="mb-6">
                    We're committed to reducing our environmental impact throughout our supply chain. This includes 
                    minimizing waste, conserving water, reducing energy use, and ensuring fair labor practices.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-emerald-600 font-bold text-3xl mb-1">40%</div>
                      <p className="text-sm">Reduction in water use since 2018</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-emerald-600 font-bold text-3xl mb-1">65%</div>
                      <p className="text-sm">Renewable energy in our facilities</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-emerald-600 font-bold text-3xl mb-1">30%</div>
                      <p className="text-sm">Reduction in carbon emissions</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-emerald-600 font-bold text-3xl mb-1">90%</div>
                      <p className="text-sm">Factories audited for ethical standards</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We're on track to achieve carbon neutrality in our operations by 2025, and across our entire 
                    supply chain by 2030.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Sustainability Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-lg p-6">
                  <div className="text-2xl font-bold mb-4">2025</div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>50% recycled materials in all products</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Carbon neutral operations</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Zero waste to landfill from our facilities</p>
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-6">
                  <div className="text-2xl font-bold mb-4">2030</div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>75% recycled or renewable materials</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Carbon neutral supply chain</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>100% renewable energy across all operations</p>
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-6">
                  <div className="text-2xl font-bold mb-4">2040</div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>100% circular business model</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Net positive impact on environment</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Industry leader in sustainable innovation</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
              <p className="mb-6">
                Sustainability is a team effort. Here's how you can join us in making a positive impact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Recycle Your Gear</h3>
                  <p className="text-sm mb-3">
                    Bring your used Sports Elite products to any of our retail locations for recycling,
                    and receive a 15% discount on your next purchase.
                  </p>
                  <a href="#" className="text-sm font-medium hover:underline">Learn about our recycling program →</a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shop Sustainable</h3>
                  <p className="text-sm mb-3">
                    Look for our "Planet Friendly" label on products that meet our highest sustainability standards.
                  </p>
                  <a href="#" className="text-sm font-medium hover:underline">Browse sustainable products →</a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Join Our Community</h3>
                  <p className="text-sm mb-3">
                    Participate in local clean-up events, tree planting, and other initiatives organized by
                    our Sports Elite community groups.
                  </p>
                  <a href="#" className="text-sm font-medium hover:underline">Find community events →</a>
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

export default Sustainability;
