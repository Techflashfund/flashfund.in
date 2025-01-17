'use client'
import React, { useState } from 'react';
import { Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    newsletter: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form:', formData);
    alert('Form submitted!');
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    console.log('Newsletter submitted:', formData.newsletter);
    if (formData.newsletter) {
      alert('Newsletter subscription successful!');
      setFormData(prev => ({ ...prev, newsletter: '' }));
    }
  };

  // Simplified input style without pointer-events-auto
  const inputStyle = "w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500";

  return (
    <div className="bg-white">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Contact Information */}
        <div className="bg-purple-600 p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-purple-100 mb-8">Say something to start a live chat!</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <span>+91 9995103430</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <span>info@flashfund.in</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5" />
              <span>KITEZ Business Park Thoppinmoola, Poothole, Thrissur, Kerala 680004</span>
            </div>
          </div>

          <div className="flex gap-4 mt-auto">
            <a href="#" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={inputStyle}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className={inputStyle}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={inputStyle}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={inputStyle}
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message..."
                rows={4}
                className={inputStyle}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Copyright */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-purple-500 font-bold">⚡</div>
                <span className="text-white font-bold">flashfund</span>
              </div>
              <p className="text-sm">
                ©️2025<br />
                All right reserved
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500">About us</a></li>
                <li><a href="#" className="hover:text-purple-500">Blog</a></li>
                <li><a href="#" className="hover:text-purple-500">Contact us</a></li>
                <li><a href="#" className="hover:text-purple-500">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-500">Testimonials</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500">Help center</a></li>
                <li><a href="#" className="hover:text-purple-500">Terms of service</a></li>
                <li><a href="#" className="hover:text-purple-500">Legal</a></li>
                <li><a href="#" className="hover:text-purple-500">Privacy policy</a></li>
                <li><a href="#" className="hover:text-purple-500">Status</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-4">Stay up to date</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  name="newsletter"
                  value={formData.newsletter}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="flex-1 p-2 bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <button 
                  type="submit"
                  className="bg-purple-600 text-white px-4 rounded-r hover:bg-purple-700"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;