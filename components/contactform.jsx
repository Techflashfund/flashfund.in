import React from 'react';
import { Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className=" bg-white">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Contact Information */}
        <div className="bg-purple-600 p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-purple-100 mb-8">Say something to start a live chat!</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <span>+12345678</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <span>--@gmail.</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5" />
              <span>Thoppinmoola, Poothole, Thrissur, Kerala 680004</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-auto">
            <a href="#" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <Youtube className="w-5 h-5" />
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
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
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
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 bg-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-4 rounded-r hover:bg-purple-700">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;