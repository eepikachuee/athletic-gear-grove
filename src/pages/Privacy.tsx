
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Privacy = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: March 28, 2023</p>
              
              <h2>1. Introduction</h2>
              <p>
                At Athletix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or make purchases from our online store.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, make a purchase, 
                contact customer service, or otherwise interact with our services. This information may include:
              </p>
              <ul>
                <li>Personal information (name, email address, postal address, phone number)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account login credentials</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Manage your account and provide you with customer support</li>
                <li>Send you information about your purchases, account, or other transactions</li>
                <li>Communicate with you about products, services, offers, and promotions</li>
                <li>Improve our website, products, and services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with our legal obligations</li>
              </ul>
              
              <h2>4. Sharing Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers that perform services on our behalf</li>
                <li>Partners for marketing purposes (if you've opted in)</li>
                <li>Law enforcement agencies when required by law</li>
                <li>In connection with a business transfer or bankruptcy proceeding</li>
              </ul>
              
              <h2>5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul>
                <li>Accessing and obtaining a copy of your data</li>
                <li>Rectifying inaccurate information</li>
                <li>Requesting deletion of your information</li>
                <li>Restricting or objecting to processing</li>
                <li>Data portability</li>
                <li>Withdrawing consent at any time</li>
              </ul>
              
              <h2>6. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@athletix.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
