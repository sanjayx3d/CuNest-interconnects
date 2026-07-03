import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const IndustryCard = ({ title, description, image }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative group"
  >
    {/* Top Half (Image) with Seamless Blend */}
    <div className="relative h-64 w-full shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {/* The Seamless Blend (Crucial) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
    </div>
    
    {/* Bottom Half (Text) */}
    <div className="p-6 bg-white flex-grow flex flex-col relative z-10 -mt-4">
      <h3 className="font-bold text-[#0F3D3E] text-xl mb-3 font-sans">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-sans mb-6 flex-grow">
        {description}
      </p>
      <div className="text-[#A66B3F] font-bold uppercase tracking-widest text-sm flex items-center gap-2 font-sans cursor-pointer">
        Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </div>
  </motion.div>
);

function IndustriesSection() {
  return (
    <Box sx={{ pt: '140px', pb: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Main Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            color: '#0a2540',
            mb: 2,
            fontFamily: '"JetBrains Mono", sans-serif',
          }}
        >
          Industries we work with!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#666666',
            mb: 8,
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '1.1rem',
            fontFamily: '"JetBrains Mono", sans-serif'
          }}
        >
          We provide cutting-edge solutions across major tech sectors.
        </Typography>

        {/* Framer Motion Grid with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Semiconductor */}
          <IndustryCard
            title="Semiconductor"
            description="We design and manufacture advanced semiconductor components for a wide range of industries, ensuring high performance and energy efficiency in all applications."
            image="/semiconductor.png?v=2"
          />

          {/* Automotive */}
          <IndustryCard
            title="Automotive"
            description="Our innovative technologies support the automotive industry, from vehicle electronics to advanced driver-assistance systems (ADAS), ensuring safety and reliability on the road."
            image="/automotive.png?v=2"
          />

          {/* Healthcare */}
          <IndustryCard
            title="Health Care"
            description="We provide cutting-edge solutions for the healthcare industry, enabling advanced medical devices and diagnostic equipment."
            image="/healthcare.png?v=2"
          />
        </motion.div>
      </Container>
    </Box>
  );
}

export default IndustriesSection;
