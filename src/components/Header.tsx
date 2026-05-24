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

  const navLinkClass = (path: string) =>
    `${isActive(path) ? 'text-white font-semibold' : 'text-white/90'} hover:text-white font-medium transition-colors`;

  const contactLinkClass =
    'flex items-center space-x-1 text-sm text-white/90 hover:text-white transition-colors';

  return (
    <header className="bg-brand-600 shadow-md sticky top-0 z-50 relative">
      {/* Large logo overlay (hidden once scrolled) */}
      <Link
        to="/"
        className={`absolute left-4 top-[-1rem] z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <img src="/Images/AG Logo 1.png" alt="Hover Ag" className="block h-44 md:h-56 lg:h-64 w-auto object-contain" />
      </Link>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {isScrolled ? (
            <Link to="/" className="flex items-center gap-3 text-3xl font-bold text-white">
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

          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <div className="flex items-center space-x-4">
              <a href="tel:0401234955" className={contactLinkClass}>
                <Phone size={14} />
                <span>0401 234 955</span>
              </a>
              <a href="mailto:ferdi.hover@gmail.com" className={contactLinkClass}>
                <Mail size={14} />
                <span>ferdi.hover@gmail.com</span>
              </a>
            </div>
            <nav className="flex space-x-8 items-center">
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
              <Link to="/services" className={navLinkClass('/services')}>
                Services
              </Link>
              <Link to="/contact" className={navLinkClass('/contact')}>
                Contact
              </Link>
              <Link
                to="/quote"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                Get Quote
              </Link>
            </nav>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 mb-4 pb-4 border-b border-white/10">
              <a href="tel:0401234955" className={contactLinkClass} onClick={() => setIsMenuOpen(false)}>
                <Phone size={16} />
                <span>0401 234 955</span>
              </a>
              <a href="mailto:ferdi.hover@gmail.com" className={contactLinkClass} onClick={() => setIsMenuOpen(false)}>
                <Mail size={16} />
                <span>ferdi.hover@gmail.com</span>
              </a>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={navLinkClass('/')} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className={navLinkClass('/services')} onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className={navLinkClass('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link
                to="/quote"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold text-center"
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
