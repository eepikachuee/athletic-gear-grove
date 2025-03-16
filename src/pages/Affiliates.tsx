
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Affiliates = () => {
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    instagram: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Affiliate application submitted:', formData);
    toast({
      title: "Application Submitted",
      description: "We've received your affiliate application and will contact you soon.",
    });
    setFormData({
      name: '',
      email: '',
      website: '',
      instagram: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div ref={contentRef}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Affiliate Program</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Join the Sports Elite Affiliate Program and earn commissions by promoting 
                our premium athletic gear. As an affiliate, you'll get early access to new products, 
                exclusive promotional materials, and competitive commission rates.
              </p>
              
              <h2>Why Become an Affiliate?</h2>
              <ul>
                <li>Earn 10-15% commission on every sale you generate</li>
                <li>30-day cookie duration</li>
                <li>Monthly payments via PayPal or bank transfer</li>
                <li>Exclusive access to new product launches</li>
                <li>Custom discount codes for your audience</li>
                <li>Dedicated affiliate support team</li>
              </ul>
              
              <h2>Who Can Apply?</h2>
              <p>
                We're looking for affiliates who are passionate about sports, fitness, and quality athletic gear. 
                Our program is ideal for:
              </p>
              <ul>
                <li>Fitness influencers and content creators</li>
                <li>Sports bloggers and reviewers</li>
                <li>Athletes and coaches</li>
                <li>Fitness professionals and gym owners</li>
                <li>Health and wellness websites</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Apply to Become an Affiliate</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">Website or Blog URL</label>
                  <Input 
                    id="website" 
                    name="website" 
                    value={formData.website} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium mb-2">Instagram Handle (optional)</label>
                  <Input 
                    id="instagram" 
                    name="instagram" 
                    value={formData.instagram} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your audience and how you plan to promote our products
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliates;
