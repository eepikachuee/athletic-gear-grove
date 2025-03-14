
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-bold text-xl md:text-2xl tracking-tighter"
          >
            ATHLETIX
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="link-underline font-medium">
              Home
            </Link>
            <Link to="/shop" className="link-underline font-medium">
              Shop
            </Link>
            <Link to="/collections" className="link-underline font-medium">
              Collections
            </Link>
            <Link to="/about" className="link-underline font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-500 ease-out-expo ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <Link
            to="/"
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/collections"
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
