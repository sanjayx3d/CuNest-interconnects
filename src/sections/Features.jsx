import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';

const featuresData = [
  {
    title: 'PCB DESIGN',
    path: '/pcb-design',
    description: 'We specialize in designing high-quality, reliable PCBs tailored to your project\'s requirements, ensuring optimized performance and durability for your devices.',
    icon: (
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex justify-center"
      >
        <MemoryOutlinedIcon sx={{ fontSize: 64, color: '#1A1A2E' }} />
      </motion.div>
    )
  },
  {
    title: 'IC PACKAGING DESIGN',
    path: '/sipi-analysis',
    description: 'Our team designs cutting-edge IC packaging solutions that offer maximum protection, heat dissipation, and reliability for your integrated circuits.',
    icon: (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="flex justify-center"
      >
        <LayersOutlinedIcon sx={{ fontSize: 64, color: '#1A1A2E' }} />
      </motion.div>
    )
  },
  {
    title: 'SI & PI ANALYSIS',
    path: '/sipi-analysis',
    description: 'We provide comprehensive Signal Integrity (SI) and Power Integrity (PI) analysis to ensure optimal performance, minimal interference, and efficient power delivery.',
    icon: (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex justify-center"
      >
        <GraphicEqOutlinedIcon sx={{ fontSize: 64, color: '#1A1A2E' }} />
      </motion.div>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = [
  // Left Card (Slides in from left)
  {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  },
  // Center Card (Drops down from above)
  {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  },
  // Right Card (Slides in from right)
  {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }
];

const Features = () => {
  return (
    <div id="expertise" className="bg-white pt-20 md:pt-[140px] pb-24 md:pb-32 relative font-sans">
      <Container maxWidth="lg">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 font-sans bg-gradient-to-r from-[#8C5A2B] to-[#0F3D3E] text-transparent bg-clip-text">
            Your Blueprint. Our Expertise.
          </h2>
          <p className="max-w-[800px] mx-auto text-gray-700 text-lg leading-relaxed font-sans">
            CuNest provides end-to-end interconnect solutions tailored to the electronics industry. By combining advanced engineering with deep manufacturing knowledge, we bridge the gap between your concepts and market-ready hardware, optimizing both performance and time-to-market.
          </p>
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} variants={itemVariants[index]} className="h-full">
              <Link to={feature.path} className="block h-full no-underline">
                <motion.div 
                  whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }}
                  className="h-full bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center transition-colors duration-300"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-extrabold mb-4 tracking-wide font-sans bg-gradient-to-r from-[#8C5A2B] to-[#0F3D3E] text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-[#333333] font-medium leading-relaxed mb-8 flex-grow font-sans">
                    {feature.description}
                  </p>
                  <div className="text-[#B87333] font-bold uppercase tracking-widest text-sm flex items-center gap-2 font-sans">
                    Learn More <span>&rarr;</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Features;
