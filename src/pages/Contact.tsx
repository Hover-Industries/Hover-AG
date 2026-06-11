import React, { useState } from 'react';
import { CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mpqejkbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-brand-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-6">
            Thanks for reaching out. We'll get back to you as soon as possible, typically within a few hours.
          </p>
          <div className="space-y-3">
            <a
              href="tel:0401234955"
              className="w-full bg-brand-600 text-white py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call us now</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Talk About Your Farm's Needs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're ready to book our drone services or just have a few questions, we're here to help. 
            Call us directly or send us a message using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Tell us about your property, what services you're interested in, or any questions you have..."
                  ></textarea>
                </div>

                {error && (
                  <p className="text-sm text-red-600 text-center" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-brand-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll respond within a few hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch Directly</h3>
                <div className="space-y-6">
                  <a
                    href="tel:0401234955"
                    className="flex items-center space-x-4 p-4 rounded-lg border-2 border-brand-600 text-brand-600 hover:bg-brand-50 transition-colors"
                  >
                    <Phone size={24} />
                    <div>
                      <p className="font-semibold text-lg">0401 234 955</p>
                      <p className="text-sm text-gray-600">Click to call now</p>
                    </div>
                  </a>

                  <a
                    href="mailto:ferdi.hover@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-lg border border-gray-300 hover:border-brand-600 hover:text-brand-600 transition-colors"
                  >
                    <Mail size={24} />
                    <div>
                      <p className="font-semibold">ferdi.hover@gmail.com</p>
                      <p className="text-sm text-gray-600">Email us directly</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-300">
                    <MapPin size={24} className="text-gray-600" />
                    <div>
                      <p className="font-semibold">Sunshine Coast, QLD</p>
                      <p className="text-sm text-gray-600">Servicing all of Queensland and beyond</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-brand-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-brand-600" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 pt-3 border-t">
                    Emergency and urgent requests may be accommodated outside business hours. Please call for availability.
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;