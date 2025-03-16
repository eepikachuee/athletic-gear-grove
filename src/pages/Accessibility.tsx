
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Accessibility = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Accessibility Statement</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                At Sports Elite, we are committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone, and applying the relevant
                accessibility standards.
              </p>
              
              <h2>Conformance Status</h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers
                to improve accessibility for people with disabilities. We strive to conform to WCAG 2.1 Level AA.
              </p>
              
              <h2>Accessibility Features</h2>
              <p>
                We have implemented the following features to make our website more accessible:
              </p>
              <ul>
                <li>
                  <strong>Keyboard Navigation:</strong> All functionality is available using a keyboard
                </li>
                <li>
                  <strong>Screen Reader Support:</strong> Our site is compatible with screen readers
                </li>
                <li>
                  <strong>Text Resizing:</strong> All text can be resized without loss of functionality
                </li>
                <li>
                  <strong>Color Contrast:</strong> We maintain appropriate color contrast ratios for text and interactive elements
                </li>
                <li>
                  <strong>Alternative Text:</strong> All images have appropriate alternative text descriptions
                </li>
                <li>
                  <strong>Form Labels:</strong> All form fields have appropriate labels
                </li>
              </ul>
              
              <h2>Compatibility with Browsers and Assistive Technology</h2>
              <p>
                We aim to support the widest array of browsers and assistive technologies as possible, including:
              </p>
              <ul>
                <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
                <li>Screen readers such as JAWS, NVDA, and VoiceOver</li>
                <li>Zoom and other magnification tools</li>
              </ul>
              
              <h2>Technical Specifications</h2>
              <p>
                Accessibility of our website relies on the following technologies to work with the particular
                combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p>
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
              
              <h2>Limitations and Alternatives</h2>
              <p>
                Despite our best efforts to ensure accessibility of our website, there may be some limitations.
                Below is a description of known limitations, and potential solutions:
              </p>
              <ul>
                <li>
                  <strong>PDFs:</strong> Not all PDF documents are fully accessible. We are working to
                  remediate existing PDFs and ensure future PDFs meet accessibility standards. If you
                  encounter a PDF that is not accessible, please contact us and we will provide the information
                  in an alternative format.
                </li>
                <li>
                  <strong>Videos:</strong> Some older videos may not have captions or audio descriptions.
                  We are working to update these. Please contact us if you encounter a video without
                  these features and require assistance.
                </li>
              </ul>
              
              <h2>Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of Sports Elite's website. Please let us know
                if you encounter accessibility barriers:
              </p>
              <ul>
                <li>Phone: +1 (800) 123-4567</li>
                <li>E-mail: accessibility@sportselite.com</li>
                <li>Contact form: <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
              <p>
                We try to respond to feedback within 2 business days.
              </p>
              
              <h2>Assessment and Compliance Approach</h2>
              <p>
                Sports Elite assessed the accessibility of our website by the following approaches:
              </p>
              <ul>
                <li>Self-evaluation</li>
                <li>External evaluation by accessibility experts</li>
                <li>Automated testing tools</li>
                <li>User testing with assistive technologies</li>
              </ul>
              
              <p>
                This statement was last updated on March 1, 2023.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
