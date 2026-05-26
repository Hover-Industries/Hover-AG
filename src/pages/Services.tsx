import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Layers, Flag } from 'lucide-react';

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
                  Targeted aerial application for broadleaf weeds, invasive pests, pasture management, and crop protection — delivered with precision and efficiency.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Applications Include:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Herbicide application for weed control</li>
                    <li>• Fungicide application for disease prevention</li>
                    <li>• Insecticide application for pest management</li>
                    <li>• Foliar nutrient and liquid fertiliser application</li>
                    <li>• Plant growth regulators</li>
                    <li>• Spot spraying and broadacre treatment</li>
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
                  Accurate and efficient aerial spreading solutions for pasture improvement, crop establishment, and soil management.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Applications Include:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Granular fertiliser spreading (NPK and specialty blends)</li>
                    <li>• Pasture and cover crop seeding</li>
                    <li>• Lime and gypsum application</li>
                    <li>• Biological soil conditioners</li>
                    <li>• Granular herbicides and soil amendments</li>
                    <li>• Variable rate application services</li>
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
                src="/Images/Sports-field.png"
                alt="Sports Turf & Recreational Grounds"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Flag className="text-brand-600 mr-3" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">Sports Turf & Recreational Grounds</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Keep your playing surfaces in top condition with precision drone application. From local rugby ovals to council parks, we deliver targeted turf care that keeps grounds healthy, playable, and looking their best — without disrupting schedules or damaging surfaces with heavy equipment.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Applications Include:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Weed control for sports fields and ovals</li>
                    <li>• Fertiliser programs for healthy turf growth</li>
                    <li>• Pest and grub treatments</li>
                    <li>• Fungicide application for turf disease</li>
                    <li>• Oversowing and turf establishment</li>
                    <li>• Growth regulators for reduced mowing</li>
                  </ul>
                </div>
                <Link
                  to="/quote"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Quote for Sports Turf</span>
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