
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Membership = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".membership-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        stagger: 0.2, 
        ease: "power2.out", 
        delay: 0.3 
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div ref={contentRef}>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Sports Elite Membership</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our elite membership program and unlock exclusive benefits, early access to products, 
                and personalized training resources to elevate your athletic performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Basic Membership */}
              <div className="membership-card bg-white border rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Basic</h3>
                  <p className="text-gray-500 mb-4">For casual athletes</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">Free</span>
                  </div>
                  <Button variant="outline" className="w-full mb-8">Join Now</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>10% off your first purchase</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Birthday discount coupon</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Email newsletter with training tips</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Access to member-only sales</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Premium Membership */}
              <div className="membership-card bg-white border-2 border-primary rounded-xl shadow-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold mb-1">Premium</h3>
                  <p className="text-gray-500 mb-4">For dedicated athletes</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-gray-500"> / month</span>
                  </div>
                  <Button className="w-full mb-8">Join Premium</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>All Basic benefits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>15% off all regular-priced items</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Free standard shipping on all orders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Early access to new product releases</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Exclusive training videos and content</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Quarterly gift with purchases over $100</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Elite Membership */}
              <div className="membership-card bg-white border rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Elite</h3>
                  <p className="text-gray-500 mb-4">For professional athletes</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="text-gray-500"> / month</span>
                  </div>
                  <Button variant="outline" className="w-full mb-8">Join Elite</Button>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>All Premium benefits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>20% off all items, including sale items</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Free expedited shipping</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Personal shopping assistant</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Exclusive product customization options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>1-on-1 virtual training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>VIP invitations to product launch events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">How do I join the membership program?</h3>
                  <p className="text-gray-600">
                    Simply create an account on our website and select your preferred membership tier. 
                    Follow the prompts to complete your registration and payment details if applicable.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Can I upgrade or downgrade my membership?</h3>
                  <p className="text-gray-600">
                    Yes, you can change your membership tier at any time from your account settings. 
                    Changes will take effect on your next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Is there a minimum commitment period?</h3>
                  <p className="text-gray-600">
                    No, our memberships are month-to-month with no long-term commitment. 
                    You can cancel anytime without penalty.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">When do I receive my membership benefits?</h3>
                  <p className="text-gray-600">
                    Most benefits are available immediately after joining. Exclusive content and 
                    early access notifications will be sent directly to your email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
