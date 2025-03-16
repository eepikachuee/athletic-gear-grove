
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".contact-info-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3 }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div ref={contentRef}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have a question, feedback, or need assistance? Fill out the form below and our team will 
                  get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="contact-info-item flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">support@sportselite.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item flex items-start">
                    <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Headquarters</h3>
                      <p className="text-gray-600">
                        123 Sports Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 6PM EST<br />
                        Saturday: 10AM - 4PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-xl">
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
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Order Status</SelectItem>
                        <SelectItem value="return">Return/Exchange</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-[400px] shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256349179!2d-73.98784432346177!3d40.75090097138799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710682805069!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
