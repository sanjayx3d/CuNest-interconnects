import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const serviceCards = [
  { title: 'PCB Design', desc: 'Advanced routing and stackup for high-speed signals.' },
  { title: 'IC Packaging', desc: 'Next-generation interconnect solutions for microchips.' },
  { title: 'SI & PI Analysis', desc: 'Ensuring signal and power integrity at every layer.' },
];

export default function HeroServicesSection() {
  const containerRef = useRef(null);
  
  // Parallax for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const ySlow = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black">
      
      {/* 1. Deep Gradient Background with Parallax */}
      <motion.div 
        style={{ y: ySlow }} 
        className="absolute inset-0 z-0 h-[130%] w-full origin-top bg-gradient-to-br from-[#0F3D3E] via-[#0A192F] to-black"
      >
        {/* Copper Particle Network Animation */}
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 0.2 + 0.05}
              fill="#A66B3F"
              initial={{ y: 0, opacity: 0.1 }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.1, 0.9, 0.1]
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          {/* Subtle connecting lines (Circuit Grid) */}
          <g opacity="0.15">
            {Array.from({ length: 15 }).map((_, i) => (
              <React.Fragment key={`bg-line-${i}`}>
                <line x1="0" y1={i * 6.66} x2="100" y2={i * 6.66} stroke="#A66B3F" strokeWidth="0.05" />
                <line x1={i * 6.66} y1="0" x2={i * 6.66} y2="100" stroke="#A66B3F" strokeWidth="0.05" />
              </React.Fragment>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6">
        
        {/* 2. Glassmorphism Container */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 max-w-6xl w-full mx-auto border border-white/10 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* 3. Staggered Typography */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight mb-2 tracking-tight"
              style={{ fontFamily: '"Space Mono", "JetBrains Mono", monospace' }}
            >
              CuNest
            </motion.h1>

            <motion.h2 
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-4xl font-bold text-[#A66B3F] uppercase tracking-widest mb-6"
            >
              Engineered Interconnects.
            </motion.h2>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0"
            >
              Great systems deserve great connections.
            </motion.p>
            
            {/* 5. CTAs */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#A66B3F] to-[#CD7F32] text-white font-bold uppercase tracking-wider shadow-lg"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 4. Floating Chip Illustration */}
          <motion.div 
            className="hidden md:flex flex-1 justify-center items-center"
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="280" height="280" viewBox="0 0 100 100" className="drop-shadow-[0_0_30px_rgba(166,107,63,0.3)]">
              <rect x="20" y="20" width="60" height="60" rx="4" fill="#0A192F" stroke="#A66B3F" strokeWidth="1.5" />
              <rect x="30" y="30" width="40" height="40" rx="2" fill="#0F3D3E" stroke="#CD7F32" strokeWidth="1" />
              
              {/* Pulsing Core */}
              <motion.rect 
                x="40" y="40" width="20" height="20" rx="1" fill="#A66B3F"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Connection Pins */}
              {[1, 2, 3, 4, 5].map(i => (
                <React.Fragment key={`pin-${i}`}>
                  <line x1={20 + i*10} y1="20" x2={20 + i*10} y2="12" stroke="#CD7F32" strokeWidth="1.5" />
                  <line x1={20 + i*10} y1="80" x2={20 + i*10} y2="88" stroke="#CD7F32" strokeWidth="1.5" />
                  <line x1="20" y1={20 + i*10} x2="12" y2={20 + i*10} stroke="#CD7F32" strokeWidth="1.5" />
                  <line x1="80" y1={20 + i*10} x2="88" y2={20 + i*10} stroke="#CD7F32" strokeWidth="1.5" />
                </React.Fragment>
              ))}
              
              {/* Intricate Inner Circuit traces */}
              <path d="M 30 35 L 25 35 M 35 30 L 35 25 M 70 65 L 75 65 M 65 70 L 65 75 M 30 65 L 25 65 M 35 70 L 35 75 M 70 35 L 75 35 M 65 30 L 65 25" stroke="#A66B3F" strokeWidth="0.5" />
            </svg>
          </motion.div>

        </div>
      </div>

      {/* Task 3: Animated Service Cards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => (
            <AnimatedServiceCard key={idx} card={card} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Subcomponent for Animated Service Card (Task 3)
function AnimatedServiceCard({ card, index }) {
  // Creative hardware animations mapped to specific service cards
  const renderBackgroundSVG = () => {
    switch (index) {
      case 0: // PCB Design - CPU Socket & Motherboard Routing
        return (
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Motherboard Grid */}
            <rect x="0" y="0" width="100" height="100" fill="transparent" stroke="#A66B3F" strokeWidth="0.1" strokeDasharray="5 5" opacity="0.3" />
            
            {/* CPU Socket Outer */}
            <rect x="35" y="35" width="30" height="30" rx="2" stroke="#A66B3F" strokeWidth="1" fill="rgba(166,107,63,0.1)" />
            
            {/* CPU Inner Core - Pulsing */}
            <motion.rect 
              x="40" y="40" width="20" height="20" rx="1" fill="#A66B3F"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* High-speed data traces radiating out from CPU */}
            {[
              "M 35 45 L 20 45 L 10 35",
              "M 35 55 L 20 55 L 10 65",
              "M 65 45 L 80 45 L 90 35",
              "M 65 55 L 80 55 L 90 65",
              "M 45 35 L 45 20 L 35 10",
              "M 55 35 L 55 20 L 65 10",
              "M 45 65 L 45 80 L 35 90",
              "M 55 65 L 55 80 L 65 90"
            ].map((path, i) => (
              <React.Fragment key={i}>
                <path d={path} fill="transparent" stroke="#A66B3F" strokeWidth="0.3" opacity="0.4" />
                <motion.path
                  d={path} fill="transparent" stroke="#A66B3F" strokeWidth="1" strokeDasharray="5 15"
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "linear" }}
                />
              </React.Fragment>
            ))}
            
            {/* Vias (nodes) at the ends of traces */}
            {[
              {x: 10, y: 35}, {x: 10, y: 65}, {x: 90, y: 35}, {x: 90, y: 65},
              {x: 35, y: 10}, {x: 65, y: 10}, {x: 35, y: 90}, {x: 65, y: 90}
            ].map((node, i) => (
              <motion.circle
                key={`node-${i}`} cx={node.x} cy={node.y} r="1.5" fill="#A66B3F"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </svg>
        );
      case 1: // IC Packaging - Flip-chip BGA & Wirebonds
        return (
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* BGA Substrate / Package outline */}
            <rect x="25" y="25" width="50" height="50" rx="3" stroke="#A66B3F" strokeWidth="1" strokeDasharray="4 2" fill="transparent" opacity="0.6"/>
            
            {/* Silicon Die */}
            <motion.rect 
              x="40" y="40" width="20" height="20" fill="rgba(166,107,63,0.2)" stroke="#A66B3F" strokeWidth="0.5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            {/* Wire bonds connecting Die to Package pads */}
            {[
              { d: "M 40 45 Q 30 40 25 45", cx: 25, cy: 45 },
              { d: "M 40 55 Q 30 60 25 55", cx: 25, cy: 55 },
              { d: "M 60 45 Q 70 40 75 45", cx: 75, cy: 45 },
              { d: "M 60 55 Q 70 60 75 55", cx: 75, cy: 55 },
              { d: "M 45 40 Q 40 30 45 25", cx: 45, cy: 25 },
              { d: "M 55 40 Q 60 30 55 25", cx: 55, cy: 25 },
              { d: "M 45 60 Q 40 70 45 75", cx: 45, cy: 75 },
              { d: "M 55 60 Q 60 70 55 75", cx: 55, cy: 75 }
            ].map((wire, i) => (
              <React.Fragment key={i}>
                {/* Wire bond curve */}
                <motion.path
                  d={wire.d} fill="transparent" stroke="#A66B3F" strokeWidth="0.8"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.15, ease: "easeInOut" }}
                />
                {/* Connection pads on package */}
                <circle cx={wire.cx} cy={wire.cy} r="1" fill="#A66B3F" opacity="0.6" />
              </React.Fragment>
            ))}

            {/* Grid of BGA balls below the package (abstracted as small dots) */}
            {Array.from({ length: 5 }).map((_, row) => 
              Array.from({ length: 5 }).map((_, col) => (
                <motion.circle
                  key={`bga-${row}-${col}`}
                  cx={30 + col * 10} cy={30 + row * 10} r="0.8" fill="#A66B3F"
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: (row + col) * 0.2, ease: "easeInOut" }}
                />
              ))
            )}
          </svg>
        );
      case 2: // SI & PI Analysis - Eye Diagram & High-Speed Differential Pairs
        return (
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Oscilloscope Grid Background */}
            <g opacity="0.2">
              {Array.from({ length: 10 }).map((_, i) => (
                <React.Fragment key={i}>
                  <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#A66B3F" strokeWidth="0.2" />
                  <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#A66B3F" strokeWidth="0.2" />
                </React.Fragment>
              ))}
            </g>

            {/* High Speed Differential Pairs Weaving */}
            {[
              "M 0 30 C 30 30 30 70 50 70 C 70 70 70 30 100 30",
              "M 0 35 C 30 35 30 75 50 75 C 70 75 70 35 100 35"
            ].map((path, i) => (
              <React.Fragment key={`diff-${i}`}>
                <path d={path} fill="transparent" stroke="#A66B3F" strokeWidth="0.3" opacity="0.4" />
                <motion.path
                  d={path} fill="transparent" stroke="#A66B3F" strokeWidth="1.5" strokeDasharray="10 20"
                  animate={{ strokeDashoffset: [30, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </React.Fragment>
            ))}

            {/* Eye Diagram Overlay */}
            <g transform="translate(25, 10) scale(0.5)">
              <rect x="0" y="0" width="100" height="40" rx="2" stroke="#A66B3F" strokeWidth="1" fill="rgba(15,61,62,0.8)" opacity="0.8" />
              {/* Eye shape paths */}
              {[
                "M 10 20 Q 50 -10 90 20",
                "M 10 20 Q 50 50 90 20",
                "M 10 20 Q 30 0 50 20 T 90 20",
                "M 10 20 Q 30 40 50 20 T 90 20"
              ].map((eyePath, i) => (
                <motion.path
                  key={`eye-${i}`}
                  d={eyePath} fill="transparent" stroke="#A66B3F" strokeWidth="1"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ repeat: Infinity, duration: 0.5 + i * 0.1, ease: "easeInOut" }}
                />
              ))}
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative h-80 rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Task 3 Layer 1: Background - Animated Circuit SVG */}
      <div className="absolute inset-0 bg-[#0F3D3E] z-0 overflow-hidden">
        {renderBackgroundSVG()}
      </div>

      {/* Task 3 Layer 2: Foreground - Glass effect container */}
      <div className="absolute inset-3 z-10 bg-white/90 backdrop-blur-sm group-hover:bg-white/40 transition-all duration-500 rounded-xl p-6 flex flex-col justify-end border border-white/50 group-hover:border-white/30">
        <h3 className="text-2xl font-bold text-[#0F3D3E] mb-3 drop-shadow-sm group-hover:text-white transition-colors duration-500">{card.title}</h3>
        <p className="text-gray-700 group-hover:text-white/90 font-medium transition-colors duration-500 leading-snug">
          {card.desc}
        </p>
        
        {/* Subtle interaction affordance */}
        <div className="mt-4 flex items-center text-[#A66B3F] group-hover:text-white transition-colors duration-500 font-bold text-sm">
          <span>Explore</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
