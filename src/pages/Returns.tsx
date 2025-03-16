
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Returns = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Returns & Refunds</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Return Policy</h2>
              <p>
                We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason,
                we offer a straightforward return policy to ensure your shopping experience is as stress-free as possible.
              </p>
              
              <h3>Return Eligibility</h3>
              <ul>
                <li>Items may be returned within 30 days of delivery</li>
                <li>Products must be in original, unworn condition with all tags attached</li>
                <li>Original packaging must be intact and included</li>
                <li>Proof of purchase (order number or receipt) is required</li>
              </ul>
              
              <div className="bg-gray-100 p-4 rounded-lg my-6">
                <p className="font-medium">Please Note:</p>
                <p>
                  For hygiene reasons, underwear, swimwear, and face masks cannot be returned unless they are defective
                  or were delivered incorrectly.
                </p>
              </div>
              
              <h2>Return Process</h2>
              <ol>
                <li>
                  <strong>Initiate your return:</strong> Log into your account and navigate to "Order History"
                  to start the return process, or contact our customer service team.
                </li>
                <li>
                  <strong>Prepare your package:</strong> Place the item(s) in the original packaging along with the
                  completed return form that was included with your order.
                </li>
                <li>
                  <strong>Ship your return:</strong> Use the prepaid return label if provided, or ship the package to
                  the address listed on the return form.
                </li>
                <li>
                  <strong>Wait for processing:</strong> Returns typically take 5-7 business days to process once
                  received at our warehouse.
                </li>
              </ol>
              
              <h2>Refund Information</h2>
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have
                received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
                If approved, your refund will be processed, and a credit will automatically be applied to your
                original method of payment within 3-5 business days. Please note that it may take an additional
                5-10 business days for the refund to appear in your account, depending on your payment provider.
              </p>
              
              <h3>Refund Methods</h3>
              <ul>
                <li>Credit/Debit Card purchases will be refunded to the original card</li>
                <li>PayPal purchases will be refunded to your PayPal account</li>
                <li>Store Credit or Gift Card purchases will be refunded as store credit</li>
              </ul>
              
              <h2>Exchanges</h2>
              <p>
                If you would like to exchange an item for a different size or color, please follow the return
                process and place a new order for the desired item. This ensures the fastest processing time
                and availability of your preferred item.
              </p>
              
              <h2>Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact our customer service team within 48 hours
                of delivery. We will work with you to resolve the issue promptly, which may include arranging for
                a return, replacement, or refund.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our return policy or need assistance with a return,
                please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">contact our customer service team</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
