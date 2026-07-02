import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background-primary pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
        >
          CuNest. Engineered Interconnects. Delivered Flawlessly.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl text-slate-dark max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Great systems deserve great connections. CuNest Interconnects brings the same engineering rigor, process discipline, and customer-centric ethos that defines CuNest—now purpose-built for high-performance cabling, harnesses, and flexible interconnects. Every assembly is a testament to our belief: with the right team and the right processes, great things don't just happen. They're engineered.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            Explore Products
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-300 text-slate-dark font-bold uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 bg-white transition-all duration-300 hover:-translate-y-1">
            View Catalog
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
