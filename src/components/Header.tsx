import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 relative">
      {/* Single large logo overlay spanning both bars (hidden once scrolled) */}
      <Link
        to="/"
        className={`absolute left-4 top-[-1rem] z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <img src="/Images/AG Logo 1.png" alt="Hover Ag" className="block h-44 md:h-56 lg:h-64 w-auto object-contain" />
      </Link>
      {/* Top bar: big logo on left, centered contact */}
      <div className="bg-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center text-sm">
          {/* Left spacer to balance layout (no brand text here) */}
          <div className="justify-self-start" />
          {/* Contact (center) */}
          <div className="justify-self-center flex items-center space-x-4">
            <a href="tel:0401234955" className="flex items-center space-x-1 hover:text-green-100">
              <Phone size={14} />
              <span>0401 234 955</span>
            </a>
            <a href="mailto:ferdi.hover@gmail.com" className="hidden sm:flex items-center space-x-1 hover:text-green-100">
              <Mail size={14} />
              <span>ferdi.hover@gmail.com</span>
            </a>
          </div>
          {/* Spacer (right) */}
          <div />
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand text aligned inline with nav when scrolled */}
          {isScrolled ? (
            <Link to="/" className="flex items-center gap-3 text-3xl font-bold text-gray-900">
              <img
                src="/Images/AG Logo 1.png"
                alt=""
                aria-hidden="true"
                className="h-[4.5rem] w-auto shrink-0 object-contain -my-[1.125rem]"
              />
              <span>Hover Ag</span>
            </Link>
          ) : (
            <div />
          )}

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${isActive('/services') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${isActive('/') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`${isActive('/services') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/quote"
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;