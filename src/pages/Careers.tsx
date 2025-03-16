
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description: "We're looking for a Senior Product Designer to create exceptional sports apparel and equipment that combines style, performance, and innovation."
    },
    {
      id: 2,
      title: "E-commerce Marketing Manager",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time",
      description: "Join our marketing team to develop and execute strategies that drive online sales growth and enhance our digital brand presence."
    },
    {
      id: 3,
      title: "Supply Chain Analyst",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Help optimize our global supply chain operations, ensuring efficient production and delivery of products to our customers worldwide."
    },
    {
      id: 4,
      title: "Retail Store Manager",
      department: "Retail",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Lead and inspire a team of retail associates to deliver exceptional customer experiences in our flagship Los Angeles store."
    },
    {
      id: 5,
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote (US)",
      type: "Full-time",
      description: "Build and maintain responsive user interfaces for our e-commerce platform, ensuring a seamless shopping experience across all devices."
    },
    {
      id: 6,
      title: "Customer Experience Specialist",
      department: "Customer Service",
      location: "Miami, FL",
      type: "Part-time",
      description: "Provide exceptional support to our customers, addressing inquiries, resolving issues, and ensuring a positive brand experience."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div ref={contentRef}>
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                At Sports Elite, we're on a mission to inspire and equip athletes of all levels to achieve their 
                personal best. Our team is passionate, innovative, and dedicated to making a difference through sport.
              </p>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Purposeful Work</h3>
                  <p className="text-muted-foreground">
                    Make a real impact by helping people perform better, feel better, and push their limits through innovative products.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                  <p className="text-muted-foreground">
                    Work alongside diverse, talented individuals united by a passion for sports and innovation.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Total Wellbeing</h3>
                  <p className="text-muted-foreground">
                    Enjoy competitive benefits, flexible work arrangements, and programs that support your physical and mental health.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Benefits & Perks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Health & Wellness</h3>
                  <ul className="text-sm space-y-1">
                    <li>Comprehensive healthcare</li>
                    <li>Dental & vision coverage</li>
                    <li>Mental health support</li>
                    <li>Gym membership</li>
                  </ul>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                  <ul className="text-sm space-y-1">
                    <li>Flexible work hours</li>
                    <li>Remote work options</li>
                    <li>Paid time off</li>
                    <li>Parental leave</li>
                  </ul>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Growth & Development</h3>
                  <ul className="text-sm space-y-1">
                    <li>Tuition reimbursement</li>
                    <li>Professional development</li>
                    <li>Career advancement</li>
                    <li>Mentorship programs</li>
                  </ul>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Additional Perks</h3>
                  <ul className="text-sm space-y-1">
                    <li>Employee discounts</li>
                    <li>Product testing</li>
                    <li>Team events</li>
                    <li>401(k) with match</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <div className="hidden md:flex space-x-2">
                  <Button variant="outline">Filter</Button>
                  <Button variant="outline">All Departments</Button>
                  <Button variant="outline">All Locations</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {jobs.map(job => (
                  <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.department} · {job.location} · {job.type}</p>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                    <p>{job.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg mb-4">Don't see a role that fits your skills?</p>
                <Button size="lg">Submit General Application</Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
