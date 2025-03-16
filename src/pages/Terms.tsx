
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Terms = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: March 28, 2023</p>
              
              <h2>1. Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Athletix website and services.
                By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of
                the terms, you may not access the service.
              </p>
              
              <h2>2. Use of Our Services</h2>
              <p>
                You must follow any policies made available to you within the Services. You may use our Services only as
                permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms
                or policies or if we are investigating suspected misconduct.
              </p>
              
              <h2>3. Your Account</h2>
              <p>
                If you create an account with us, you are responsible for maintaining the security of your account and
                you are fully responsible for all activities that occur under the account. You must immediately notify us
                of any unauthorized uses of your account or any other breaches of security.
              </p>
              
              <h2>4. Purchases</h2>
              <p>
                All purchases through our site are governed by our Terms of Service. We reserve the right to refuse service
                to anyone for any reason at any time. Prices for products are subject to change without notice. We reserve
                the right to modify or discontinue the Service without notice at any time.
              </p>
              
              <h2>5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property
                of Athletix and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks
                may not be used in connection with any product or service without the prior written consent of Athletix.
              </p>
              
              <h2>6. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
                liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
                limited to a breach of the Terms.
              </p>
              
              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall Athletix, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of
                or inability to access or use the Service.
              </p>
              
              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your
                responsibility to check our Terms periodically for changes. Your continued use of the Service following
                the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@athletix.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
