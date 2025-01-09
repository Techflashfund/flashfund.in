'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ClipboardList, LineChart, ArrowRight } from 'lucide-react';



const FeatureCard = ({ title, description, icon: Icon, delay }) => (
  
    <motion.div
      
      
      className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden group backdrop-blur-sm"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          className="mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <Icon className="w-8 h-8 relative z-10" />
          </div>
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 text-indigo-600 font-semibold flex items-center gap-2 group relative"
        >
          <span className="relative">
            Know more
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/5 to-indigo-600/5 rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/5 to-purple-600/5 rounded-tr-[80px]" />
    </motion.div>
  
);

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    animate={{
      y: [-5, 5, -5],
    }}
    
  >
    {children}
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Checkout Finance",
      description: "Boost sales with instant financing at your checkout point, enabling seamless customer transactions.",
      icon: CreditCard,
    },
    {
      title: "Supply Chain Finance",
      description: "Optimize your supply chain with intelligent working capital solutions designed for growth.",
      icon: ClipboardList,
    },
    {
      title: "Working Capital",
      description: "Enhance supplier relationships with flexible financing options and streamlined operations.",
      icon: LineChart,
    },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <motion.div
          className="absolute inset-0 opacity-20"
          
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Quick, Easy Financing Solutions for MSME'S
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Empower Your Business with Comprehensive Financial Solutions to Excel! 
              Speed, Optimize Cash Flow, and Simplify Operations - All in Your Fingertips
            </p>
          </motion.div>
        

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;