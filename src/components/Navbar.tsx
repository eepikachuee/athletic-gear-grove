
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { useScrollPosition } from '../hooks/use-scroll-position';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    // Close menu when scrolling
    if (isMenuOpen && scrollPosition > 50) {
      setIsMenuOpen(false);
    }
  }, [scrollPosition, isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
        : 'py-5 bg-black/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              SPORTS ELITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              Shop
            </Link>
            <Link to="/new-arrivals" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              New Arrivals
            </Link>
            <Link to="/categories" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              Categories
            </Link>
            <Link to="/about" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              About
            </Link>
            <Link to="/contact" className={`text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/search" className={`hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/profile" className={`hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className={`hover:opacity-80 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/95 z-40 md:hidden">
              <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold text-white"
                >
                  SPORTS ELITE
                </Link>
                <div className="flex flex-col space-y-6 items-center">
                  <Link 
                    to="/shop" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/new-arrivals" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    New Arrivals
                  </Link>
                  <Link 
                    to="/categories" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    Categories
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex items-center space-x-8 mt-8">
                  <Link 
                    to="/search" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Search className="w-6 h-6" />
                  </Link>
                  <Link 
                    to="/profile" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <User className="w-6 h-6" />
                  </Link>
                  <Link 
                    to="/cart" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ShoppingBag className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
