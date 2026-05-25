import { Link } from 'react-router-dom';
import { Clock, Target, Leaf, ArrowRight, CheckCircle, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg"
          >
            <source src="/videos/Herofixed.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Precision Application Services
            <span className="text-yellow-400 text-3xl md:text-5xl"> Across Queensland & Beyond</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Save time, save chemicals, and get perfect coverage with our professional drone spraying and spreading services. 
            Trusted by farmers across Australia for superior results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/quote"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0401234955"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Call Now: 0401 234 955
            </a>
          </div>
        </div>
      </section>
      {/* Services Grid */}
<section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drone Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional agricultural solutions tailored to Australian farming conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src="/Images/Drone spraying Place card.jpg"
                alt="Crop Spraying"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Crop Spraying</h3>
                <p className="text-sm text-gray-200">Weed, pest & disease control</p>
              </div>
            </Link>

            <Link to="/services" className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src="/Images/Drone spreading place card.jpg"
                alt="Fertiliser Spreading"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Fertiliser Spreading</h3>
                <p className="text-sm text-gray-200">Precise nutrient application</p>
              </div>
            </Link>

            <Link to="/services" className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src="/Images/Pastures.jpg"
                alt="Pasture Improvement"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Pasture Improvement</h3>
                <p className="text-sm text-gray-200">Boost grazing productivity</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hover Ag?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of Australian farmers who have revolutionized their operations with our precision drone technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Faster Than Traditional Methods</h3>
              <p className="text-gray-600">
                Cover more land in less time. Our XAG P150 drones can spray up to 20 hectares per hour, 
                dramatically reducing your application time compared to ground-based equipment.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Precision Application</h3>
              <p className="text-gray-600">
                Reduce waste and protect your crops with GPS-guided precision. Variable rate application 
                ensures every part of your field gets exactly what it needs.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe & Sustainable</h3>
              <p className="text-gray-600">
                No heavy machinery compacting your soil. Reduce chemical drift, protect beneficial insects, 
                and minimize environmental impact while maximizing effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Mid-page CTA */}
      <section className="py-16 bg-brand-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm Operations?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Get a customized quote for your property. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0401234955"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Hover Ag Difference
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>20x faster coverage</strong> than traditional ground spraying methods</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>30% less chemical usage</strong> through precision application technology</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>Zero soil compaction</strong> - protect your valuable topsoil</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>All-weather capability</strong> - spray when conditions are right</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>Professional service</strong> with fully licensed and insured operators</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg"
                alt="XAG P150 Drone in field"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Saving Time and Money Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing number of Australian farmers choosing precision drone technology for better results.
          </p>
          <Link
            to="/quote"
            className="bg-yellow-500 text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Your Free Quote Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;