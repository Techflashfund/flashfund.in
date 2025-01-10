import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CreditCard, Shield, Clock, ArrowRight } from 'lucide-react';

const PurchaseFinanceSection = () => {
  const features = [
    { 
      icon: CreditCard,
      title: "Instant Approval",
      description: "Get immediate access to purchasing power with our streamlined process"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security ensures your financial data stays protected"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access finance options whenever you need, wherever you are"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Revolutionary Finance Solution</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 text-transparent bg-clip-text"
          >
            Purchase Finance
          </motion.h1>

          <span className='text-gray-400 font-semibold '>Registered  on <span className='text-blue-700 font-bold'>ONDC</span> Protocol
                      </span>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto m-8"
          >
            Unlock limitless purchasing power with our innovative solution. 
            Designed to help businesses thrive with seamless financial options.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border-2 border-purple-200 text-purple-600 hover:border-purple-300 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-purple-300 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center mb-6"
              >
                <feature.icon className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-purple-200 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0.3
              }}
              animate={{ 
                y: ["-20%", "120%"],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseFinanceSection;