import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Layers, Sprout } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-600 text-white py-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Drone Application services
          </h1>
          <p className="text-lg text-brand-100">
            Precision spraying and spreading solutions for modern Australian agriculture
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Images/Drone spraying Place card.jpg"
                alt="Crop Spraying Service"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Droplets className="text-blue-600 mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">Spraying Services</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Targeted spraying for broadleaf weeds, invasive pests, and crop diseases — applied with pinpoint accuracy. 
                  Our XAG P150 drones deliver precise droplet sizes and application rates for maximum effectiveness while 
                  minimizing chemical waste and environmental impact.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What we spray:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Herbicides for weed control</li>
                    <li>• Fungicides for disease prevention</li>
                    <li>• Insecticides for pest management</li>
                    <li>• Growth regulators and foliar nutrients</li>
                  </ul>
                </div>
                <Link
                  to="/quote"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Quote for Spraying</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Images/Drone spreading place card.jpg"
                alt="Spreading Service"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Layers className="text-yellow-600 mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">Spreading Services</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Even distribution every time, helping your pasture and crops thrive. Variable rate technology ensures 
                  optimal coverage patterns, reducing waste and maximizing the effectiveness of your fertilizer, 
                  seed, and granular applications.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What we spread:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Granular fertilizers (NPK, specialty blends)</li>
                    <li>• Seeds for pasture establishment</li>
                    <li>• Lime and gypsum applications</li>
                    <li>• Biological soil conditioners</li>
                  </ul>
                </div>
                <Link
                  to="/quote"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Quote for Spreading</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Images/Pastures.jpg"
                alt="Pasture Improvement"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Sprout className="text-brand-600 mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">Pasture Improvement</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Boost grazing productivity with targeted nutrient spreading and weed suppression. Our comprehensive 
                  pasture programs combine precision fertilizer application with selective herbicide treatments to 
                  maximize carrying capacity and improve pasture quality.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Pasture solutions include:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Broad-leaf weed control in pastures</li>
                    <li>• Fertilizer programs for improved growth</li>
                    <li>• Oversowing with improved species</li>
                    <li>• Soil pH correction and conditioning</li>
                  </ul>
                </div>
                <Link
                  to="/quote"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Quote for Pasture Work</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

          

          {/* Service Areas */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Based on the Sunshine Coast, we service properties throughout Queensland and beyond. 
              From small market gardens to large-scale cropping operations, no job is too big or too small.
            </p>
            <div className="bg-brand-600 text-white py-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-brand-100 mb-6">
                Get a customized quote for your specific agricultural needs
              </p>
              <Link
                to="/quote"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;