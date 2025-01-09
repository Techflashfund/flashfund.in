'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LineChart } from "lucide-react";



const HeroSection=()=> {
    const FloatingElement = ({ children, duration = 4, delay = 0 }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.div>
      );

  return (
    <div className="min-h-screen bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Curved Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
          <path
            d="M 0 300 Q 400 200 800 300 T 1600 300"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a90e2" />
              <stop offset="100%" stopColor="#63b3ed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 mb-4"
          >
            — Real Estate Fractional CFO Services and Bookkeeping
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Streamline Your Real Estate Finances
            <br />
            <span className="text-3xl md:text-5xl font-normal text-gray-300">
              with Expert Bookkeeping Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We provide you with peace of mind that your books are
            being handled by people who know the real estate industry
            inside and out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg"
            >
              Get your personalized plan
              <LineChart className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement delay={0.2}>
            <div className="absolute top-40 left-20">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-32 h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded" />
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="absolute top-60 right-40">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-48 h-16 bg-gradient-to-r from-blue-400/20 to-transparent rounded" />
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;