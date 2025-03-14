
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand and mission column */}
          <div>
            <Link to="/" className="font-display font-bold text-2xl tracking-tighter inline-block mb-6">
              ATHLETIX
            </Link>
            <p className="text-white/70 mb-6">
              Premium sportswear designed for maximum performance and unmatched comfort for every athlete.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Shop column */}
          <div>
            <h4 className="font-medium text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop/men" className="text-white/70 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/shop/women" className="text-white/70 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/shop/accessories" className="text-white/70 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop/equipment" className="text-white/70 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/new-arrivals" className="text-white/70 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-white/70 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          {/* Company column */}
          <div>
            <h4 className="font-medium text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/stores" className="text-white/70 hover:text-white transition-colors">Store Locator</Link></li>
              <li><Link to="/sustainability" className="text-white/70 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/affiliates" className="text-white/70 hover:text-white transition-colors">Affiliates</Link></li>
              <li><Link to="/press" className="text-white/70 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          
          {/* Support column */}
          <div>
            <h4 className="font-medium text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/help" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="text-white/70 hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-white/70 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-white/70 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/accessibility" className="text-white/70 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with newsletter and copyright */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-6 md:mb-0">
            © {new Date().getFullYear()} ATHLETIX. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
