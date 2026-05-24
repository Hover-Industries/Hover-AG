import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';

const StickyActions = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-3">
      {/* Call button */}
      <a
        href="tel:0401234955"
        className="bg-brand-600 text-white p-4 rounded-full shadow-lg hover:bg-brand-700 transition-colors flex items-center justify-center"
        aria-label="Call now"
      >
        <Phone size={24} />
      </a>

      {/* Quote button */}
      <Link
        to="/quote"
        className="bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors flex items-center justify-center"
        aria-label="Get quote"
      >
        <FileText size={24} />
      </Link>
    </div>
  );
};

export default StickyActions;