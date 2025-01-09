'use client'
import React, { useEffect } from 'react';

import { motion, useAnimation,   useInView } from 'framer-motion';
import {   Shield, BadgeDollarSign, Zap,  } from 'lucide-react';

import { Card, CardContent } from "@/components/ui/card";

const GlowingBorder = ({ children }) => (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/50 via-blue-600/50 to-blue-400/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative">{children}</div>
    </div>
  );


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

export const Statsgrid = () => {
  return (
    <FadeInWhenVisible delay={0.8}>
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { label: "Total Funding", value: "₹100Cr+", icon: BadgeDollarSign },
                  { label: "MSMEs Served", value: "1000+", icon: Shield },
                  { label: "Processing Time", value: "< 24hrs", icon: Zap }
                ].map((stat, index) => (
                  <GlowingBorder key={stat.label}>
                    <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border-blue-100/50 hover:border-blue-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50">
                      <CardContent className="p-8 relative z-10">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl w-fit mb-6"
                        >
                          <stat.icon className="w-8 h-8 text-blue-600" />
                        </motion.div>
                        <motion.div
                          className="relative"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 * index }}
                        >
                          <motion.h3 
                            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {stat.value}
                          </motion.h3>
                          <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        </motion.div>
                        <motion.p 
                          className="text-gray-600 mt-3 text-lg font-medium"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 * index }}
                        >
                          {stat.label}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </GlowingBorder>
                ))}
              </div>
            </FadeInWhenVisible>
  )
}
