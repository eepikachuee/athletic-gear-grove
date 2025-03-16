
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Shipping = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Shipping Information</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                At Sports Elite, we strive to provide reliable and efficient shipping services. Please review
                our shipping policies below.
              </p>
              
              <h2>Shipping Methods and Delivery Times</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left border-b">Shipping Method</th>
                      <th className="px-6 py-3 text-left border-b">Expected Delivery Time</th>
                      <th className="px-6 py-3 text-left border-b">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 border-b">Standard Shipping</td>
                      <td className="px-6 py-4 border-b">3-5 business days</td>
                      <td className="px-6 py-4 border-b">$5.99 (Free over $75)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b">Express Shipping</td>
                      <td className="px-6 py-4 border-b">1-2 business days</td>
                      <td className="px-6 py-4 border-b">$12.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b">Overnight Shipping</td>
                      <td className="px-6 py-4 border-b">Next business day</td>
                      <td className="px-6 py-4 border-b">$19.99</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border-b">International Shipping</td>
                      <td className="px-6 py-4 border-b">7-14 business days</td>
                      <td className="px-6 py-4 border-b">Varies by location</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2>Processing Time</h2>
              <p>
                Orders are typically processed within 1-2 business days after purchase. During high-volume
                periods, such as holidays or special sales events, processing may take an additional 1-2 days.
              </p>
              
              <h2>Tracking Your Order</h2>
              <p>
                Once your order has been shipped, you will receive a confirmation email with tracking information.
                You can also track your order by logging into your account and navigating to the "Order History"
                section.
              </p>
              
              <h2>International Shipping</h2>
              <p>
                We ship to most countries worldwide. International shipping costs and delivery times vary based
                on the destination. Please note that the recipient is responsible for any customs duties, taxes,
                or import fees that may apply.
              </p>
              
              <h2>Shipping Restrictions</h2>
              <p>
                Some products may not be available for shipping to all locations due to local regulations or
                shipping constraints. If you have any questions about shipping to your location, please
                <a href="/contact" className="text-blue-600 hover:underline"> contact our customer service team</a>.
              </p>
              
              <h2>Shipping Address</h2>
              <p>
                It is the customer's responsibility to provide accurate shipping information. We are not
                responsible for orders shipped to incorrect addresses provided by the customer.
              </p>
              
              <h2>Delivery Issues</h2>
              <p>
                If you experience any issues with your delivery, including damaged packages, missing items,
                or significant delays, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a> within
                7 days of the delivery date.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
