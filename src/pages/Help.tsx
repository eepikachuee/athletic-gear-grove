
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Help = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Help Center</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Frequently Asked Questions</h2>
              
              <h3>Orders & Deliveries</h3>
              <p>
                <strong>How can I track my order?</strong><br />
                You can track your order in the "Orders" section of your account. You will also receive tracking 
                information via email once your order has been shipped.
              </p>
              
              <p>
                <strong>What is your delivery timeframe?</strong><br />
                Standard delivery typically takes 3-5 business days. Express delivery is available for 1-2 business days.
                International shipping may take 7-14 business days.
              </p>
              
              <h3>Returns & Refunds</h3>
              <p>
                <strong>What is your return policy?</strong><br />
                We offer a 30-day return policy for most items. Products must be in original condition with tags attached.
                Please visit our <a href="/returns" className="text-blue-600 hover:underline">Returns Page</a> for more details.
              </p>
              
              <p>
                <strong>How long does it take to process a refund?</strong><br />
                Once we receive your return, it typically takes 3-5 business days to process. The refund may take an 
                additional 5-10 business days to appear in your account, depending on your payment provider.
              </p>
              
              <h3>Products & Sizing</h3>
              <p>
                <strong>How do I find the right size?</strong><br />
                We recommend using our <a href="/size-guide" className="text-blue-600 hover:underline">Size Guide</a> to find your perfect fit.
                Each product page also includes specific sizing information.
              </p>
              
              <h3>Contact Us</h3>
              <p>
                Still have questions? We're here to help!<br />
                Visit our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a> to get in touch with our 
                customer service team.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
