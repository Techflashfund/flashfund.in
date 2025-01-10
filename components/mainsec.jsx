'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, ChevronRight, TrendingUp,Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Feautersgrid } from '../components/feautersgrid';
import FeaturesSection from '../components/feautrecard';
import PurchaseFinanceSection from '../components/Purchasefinance';
import WorkingCapital from '../components/workingcapital';

import SupplyChainFinance from '../components/supplychain';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay, type: "spring", stiffness: 50 }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ y: 40, opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

const FloatingElement = ({ children }) => (
  <motion.div
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);


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
const inputStyle = "w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500";
export const Mainsec = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  const [formData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    newsletter: ''
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Background with patterns */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Gradient orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.02, 0.04, 0.02],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-full h-full bg-gradient-radial blur-3xl ${
              i === 0 ? 'from-purple-400/5' : 
              i === 1 ? 'from-indigo-500/5' : 
              i === 2 ? 'from-violet-600/5' : 'from-purple-700/5'
            } via-transparent to-transparent`}
            style={{
              top: `${-50 + i * 20}%`,
              left: `${-50 + i * 20}%`,
            }}
          />
        ))}

        {/* Animated floating elements */}
        {dimensions.width > 0 && [...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 2 === 0 ? 'from-purple-400/5 to-indigo-600/5' : 'from-indigo-500/5 to-violet-700/5'
            }`}
            initial={{
              scale: 0.8,
              opacity: 0.05,
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.1, 0.05],
              x: [null, dimensions.width, -dimensions.width],
              y: [null, -dimensions.height/2, dimensions.height/2],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.nav 
        style={{ opacity: navbarOpacity }}
        className="fixed w-full z-50 backdrop-blur-sm bg-white/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/P1-removebg-preview.png"
                alt="flashfund"
                width={150}
                height={75}
                className="w-32 md:w-auto"
              />
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-12">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Products', id: 'products' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-gray-800 hover:text-indigo-600 relative group px-3 py-2 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </motion.button>
              ))}
            </div>
            
            <Image 
              src='/ondc-network-vertical.png'  
              alt="ondc logo"
              width={120}
              height={75}
              className="w-32 md:w-auto"
            />
          </div>
        </div>
      </motion.nav>

      {/* Main content with section IDs */}
      <motion.div className="relative z-10" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48">
          {/* Home Section */}
          <section  className="text-center max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <FloatingElement>
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-100/50 border border-purple-200/50 rounded-full px-6 py-2 mb-8 relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-800">Revolutionizing MSME Financing</span>
                </motion.div>
              </FloatingElement>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-400/20 blur-2xl" />
                  <span className="relative font-medium">
                    Next Generation Financial Solutions with
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold"> flashfund </span>
                  </span>
                </span>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <motion.p 
                className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Financing through the 
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold"> ONDC </span>
                Network with Advanced Analytics
              </motion.p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <div  className="mt-12 flex flex-wrap justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    size="lg"
                    className="relative group overflow-hidden bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-500 hover:from-purple-600 hover:via-indigo-700 hover:to-purple-600 text-white px-8 py-6 shadow-lg shadow-indigo-500/25"
                  >
                    <span className="relative z-10 flex items-center text-lg">
                      Get Started
                      <ArrowUpRight className="w-5 h-5 ml-2" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600"
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-indigo-200 hover:border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-8 py-6 relative group shadow-lg shadow-indigo-100/25"
                  >
                    <span className="relative z-10 text-lg flex items-center">
                      See How It Works
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Products Section */}
          <section >
            <Feautersgrid />
            <FeaturesSection />
            <PurchaseFinanceSection />
            <WorkingCapital />
            <SupplyChainFinance />
          </section>

          {/* About Section */}
          <section id="about">
            {/* Add your about content here */}
          </section>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section id="contact">
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
      </section>
    </div>
  );
};

export default Mainsec;