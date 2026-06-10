import React, { useState } from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    landSize: '',
    landUnit: 'hectares',
    cropType: '',
    serviceNeeded: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Quote request submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-brand-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in our drone services. We'll get back to you within 24 hours 
            with a customized quote for your property.
          </p>
          <div className="space-y-3">
            <a
              href="tel:0401234955"
              className="w-full bg-brand-600 text-white py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call us for urgent requests</span>
            </a>
            <a
              href="/"
              className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors block text-center"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free, No-Obligation Quote Today
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the form below and we'll get back to you within 24 hours with a customised quote for your property. 
            Our drone services are priced competitively and tailored to your specific agricultural needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Land Size */}
                <div>
                  <label htmlFor="landSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size *
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      id="landSize"
                      name="landSize"
                      required
                      value={formData.landSize}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="e.g. 100"
                    />
                    <select
                      name="landUnit"
                      value={formData.landUnit}
                      onChange={handleChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent w-40"
                    >
                      <option value="hectares">Hectares</option>
                      <option value="acres">Acres</option>
                    </select>
                  </div>
                </div>

                {/* Crop Type */}
                <div>
                  <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Crops or Pasture *
                  </label>
                  <input
                    type="text"
                    id="cropType"
                    name="cropType"
                    required
                    value={formData.cropType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="e.g. Wheat, Cattle pasture, Cotton, Mixed crops"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="weed-spraying">Weed Control Spraying</option>
                    <option value="pest-spraying">Pest Control Spraying</option>
                    <option value="fungicide-spraying">Fungicide Application</option>
                    <option value="fertilizer-spreading">Fertilizer Spreading</option>
                    <option value="seed-spreading">Seed Spreading</option>
                    <option value="pasture-improvement">Pasture Improvement</option>
                    <option value="aquatic-application">Aquatic Application</option>
                    <option value="specialty-crop">Specialty Crop Treatment</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name (optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Town/Suburb, State (e.g. Toowoomba, QLD)"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Tell us more about your specific requirements, timing, or any special considerations..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-brand-700 transition-colors"
                >
                  Request My Free Quote
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need to Speak to Someone?</h3>
                <div className="space-y-4">
                  <a
                    href="tel:0401234955"
                    className="flex items-center space-x-3 text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <Phone size={20} />
                    <div>
                      <p className="font-medium">0401 234 955</p>
                      <p className="text-sm text-gray-500">Call for urgent requests</p>
                    </div>
                  </a>
                  <a
                    href="mailto:ferdi.hover@gmail.com"
                    className="flex items-center space-x-3 text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <Mail size={20} />
                    <div>
                      <p className="font-medium">ferdi.hover@gmail.com</p>
                      <p className="text-sm text-gray-500">Email us directly</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-brand-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-sm text-gray-700">We'll review your requirements and property details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-sm text-gray-700">Our team will prepare a customized quote within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-sm text-gray-700">We'll contact you to discuss the quote and answer any questions</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Quote?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span>Completely free with no obligation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-blue-600" />
                    <span>Tailored to your specific property</span>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;