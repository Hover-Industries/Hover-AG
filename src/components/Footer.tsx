 
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Sprout } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Jackaroo Ag</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional drone spraying and spreading services across Queensland and beyond. 
              Save time, reduce costs, and improve your farm's productivity with precision agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:0401234955" className="text-gray-300 hover:text-white transition-colors">
                  0401 234 955
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-500" />
                <a href="mailto:feralrangers@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  feralrangers@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-green-500 mt-0.5" />
                <span className="text-gray-300">
                  Sunshine Coast, QLD
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Jackaroo Ag. All rights reserved. | Professional drone spraying services across Queensland and Australia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;