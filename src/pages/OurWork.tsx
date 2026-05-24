import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, TrendingUp } from 'lucide-react';

const OurWork = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See What Drone Spraying Can Do For Your Farm
          </h1>
          <p className="text-xl text-brand-100 mb-8">
            We've helped Queensland farmers save time, reduce costs, and improve crop yields. 
            Here's a look at some of our recent projects.
          </p>
        </div>
      </section>

      {/* Featured Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Case Study 1 */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4 text-brand-600">
                  <MapPin size={20} className="mr-2" />
                  <span className="font-medium">Darling Downs, QLD</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  1,200 Hectare Wheat Operation
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Transformed a large-scale wheat operation with precision herbicide application. 
                  By switching from ground spraying to drone technology, this farming operation 
                  achieved 35% faster coverage and 25% reduction in chemical usage.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp size={20} className="text-brand-600 mr-2" />
                      <span className="font-semibold">Time Savings</span>
                    </div>
                    <p className="text-2xl font-bold text-brand-600">35%</p>
                    <p className="text-sm text-gray-600">Faster completion</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp size={20} className="text-blue-600 mr-2" />
                      <span className="font-semibold">Chemical Savings</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">25%</p>
                    <p className="text-sm text-gray-600">Less herbicide used</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                  alt="Wheat field before and after treatment"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Success Story
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Before & After Results</h2>
              <p className="text-lg text-gray-600">
                See the dramatic improvements our precision drone services deliver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg"
                    alt="Pasture improvement before"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    Before
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Pasture Weed Control</h3>
                  <p className="text-gray-600 text-sm">
                    Heavy thistle infestation reducing carrying capacity
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg"
                    alt="Pasture improvement after"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-brand-500 text-white px-2 py-1 rounded text-xs">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Clean, Productive Pasture</h3>
                  <p className="text-gray-600 text-sm">
                    95% weed reduction, improved grass species thriving
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg"
                    alt="Crop spraying results"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    During
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Precision Crop Spraying</h3>
                  <p className="text-gray-600 text-sm">
                    XAG P150 applying fungicide to cotton crop
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Farmers Share Their Results</h2>
              <p className="text-lg text-gray-600">
                Hear from real Australian farmers about their experience with our drone services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg"
                    alt="Drone spraying video"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Drone Operations Showcase</h3>
                  <p className="text-gray-600 mb-4">
                    Watch our XAG P150 in action across various Queensland farming operations
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Recent footage from 2024 season</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
                    alt="Farmer testimonial"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Success Stories</h3>
                  <p className="text-gray-600 mb-4">
                    Local farmers discuss the benefits they've seen from switching to drone technology
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>Farmers across Queensland</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-lg text-gray-600">
                Numbers that speak for themselves
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">500+</div>
                <p className="text-gray-600">Farms Serviced</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <p className="text-gray-600">Hectares Covered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">30%</div>
                <p className="text-gray-600">Average Time Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
                <p className="text-gray-600">Chemical Reduction</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-brand-600 text-white py-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to See These Results on Your Farm?</h2>
              <p className="text-xl text-brand-100 mb-6 max-w-2xl mx-auto">
                Join the growing number of Australian farmers revolutionizing their operations with precision drone technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Your Free Quote</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:0401234955"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors inline-flex items-center justify-center"
                >
                  Call: 0401 234 955
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;