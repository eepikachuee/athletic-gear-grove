
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cookies = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: March 28, 2023</p>
              
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
                <li><strong>Performance cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
                <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <p>
                <strong>Session Cookies:</strong> These temporary cookies expire when you close your browser or when the session times out.
              </p>
              <p>
                <strong>Persistent Cookies:</strong> These remain on your device until they expire or you delete them.
              </p>
              
              <h2>4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
                or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, so it's 
                best to consult your browser's help documentation.
              </p>
              <p>
                Please note that blocking or deleting cookies may impact your experience on our website, as some features 
                may not function properly.
              </p>
              
              <h2>5. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third parties on our website. These third parties may include analytics services, 
                social media platforms, and advertising networks. The third parties have their own privacy policies which 
                govern their use of such information.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new 
                Cookie Policy on this page.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at privacy@athletix.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
