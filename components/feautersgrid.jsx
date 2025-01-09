'use client'
import React from 'react';

import { motion} from 'framer-motion';
import {  Wallet, Shield, LineChart} from 'lucide-react';

import { Card, CardContent } from "@/components/ui/card";

const GlowingBorder = ({ children }) => (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/50 via-blue-600/50 to-blue-400/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative">{children}</div>
    </div>
  );

export const Feautersgrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-32 mb-20">
    {[
      { 
        icon: Wallet, 
        title: 'Smart Financing',
        desc: ' instant approvals with dynamic credit scoring and flexible terms tailored to your business.'
      },
      { 
        icon: Shield, 
        title: 'Bank-Grade Security',
        desc: 'Advanced encryption, multi-factor authentication, and real-time fraud detection for complete peace of mind.'
      },
      { 
        icon: LineChart, 
        title: 'Predictive Analytics',
        desc: 'Machine learning algorithms provide actionable insights and cash flow forecasting for informed decisions.'
      }
    ].map((feature, index) => (
      <GlowingBorder key={feature.title}>
        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        ></motion.div>
        <Card className="h-full group relative overflow-hidden bg-white backdrop-blur-xl border-blue-100/50 hover:border-blue-200/50 transition-all duration-500 hover:shadow-xl shadow-2xl  hover:shadow-blue-100/50">
          <CardContent className="p-8 relative z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl w-fit mb-6"
            >
              <feature.icon className="w-8 h-8 text-blue-600" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-purple-700"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 * index }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 * index }}
            >
              {feature.desc}
            </motion.p>
          </CardContent>
        </Card>
        <motion.div/>
      </GlowingBorder>
    ))}
  </div>
  )
}
