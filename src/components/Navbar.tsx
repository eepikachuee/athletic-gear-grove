
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    // Focus search input when search is opened
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo ${
        isScrolled ? 'py-4 glass backdrop-blur-md bg-black/20' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white"
          >
            ATHLETIX
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="link-underline font-medium text-white hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="link-underline font-medium text-white hover:text-white/80 transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="link-underline font-medium text-white hover:text-white/80 transition-colors">
              Collections
            </Link>
            <Link to="/about" className="link-underline font-medium text-white hover:text-white/80 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 text-white"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Cart button */}
            <Link
              to="/cart"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 text-white"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            
            {/* User profile/login button */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 text-white">
                  <User className="w-5 h-5" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="px-4 py-3 border-b">
                  <h3 className="font-medium">Account</h3>
                </div>
                <div className="px-4 py-4 flex flex-col gap-3">
                  <Link to="/login" className="text-sm font-medium py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-center">
                    Sign In
                  </Link>
                  <Link to="/register" className="text-sm font-medium py-2 px-4 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 text-center">
                    Create Account
                  </Link>
                  <Link to="/profile" className="text-sm font-medium py-2 px-4 border rounded-md hover:bg-accent text-center">
                    My Profile
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 text-white"
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
        className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-out-expo ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <Link
            to="/"
            className="text-2xl font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-2xl font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/collections"
            className="text-2xl font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-2xl font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-2xl font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Profile
          </Link>
        </nav>
      </div>

      {/* Search overlay - Apple style */}
      <div 
        className={`fixed inset-0 bg-black/95 z-50 transition-opacity duration-300 
                    ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-6 md:px-8 pt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-white">Search</h2>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-white hover:text-white/80"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
            <div className="flex items-center border-b border-white/20 focus-within:border-white pb-2">
              <Search className="w-5 h-5 text-white/50" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none text-white text-xl pl-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
