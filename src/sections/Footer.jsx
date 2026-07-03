import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gradient-to-b from-[#0F3D3E] to-[#0A192F]" sx={{ pt: 12, pb: 6 }}>
      
      {/* Contact Form Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 12 }}>
        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 800, mb: 6, fontFamily: '"JetBrains Mono", sans-serif', fontSize: { xs: '2rem', md: '3rem' } }}>
          Ready to engineer your next interconnect?
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '500px', mx: 'auto' }}>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-[#112240] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#A66B3F] transition-colors placeholder-white/40" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-[#112240] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#A66B3F] transition-colors placeholder-white/40" 
          />
          <textarea 
            placeholder="Message" 
            rows="4" 
            className="w-full bg-[#112240] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#A66B3F] transition-colors placeholder-white/40 resize-none"
          ></textarea>
          <button 
            type="button" 
            className="mt-2 w-full px-6 py-3.5 rounded-sm bg-transparent border-2 border-[#A66B3F] text-white font-bold uppercase tracking-wider hover:bg-[#A66B3F]/10 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </Box>
      </Container>

      {/* Footer Grid */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 8, md: 4 }}>
            
            {/* Column 1: Brand */}
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="40" height="40" rx="4" stroke="#A66B3F" strokeWidth="2" />
                  <path d="M12 24H8 M12 32H8 M12 40H8 M52 24H56 M52 32H56 M52 40H56 M24 12V8 M32 12V8 M40 12V8 M24 52V56 M32 52V56 M40 52V56" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="28" r="6" stroke="#A66B3F" strokeWidth="1.5" />
                  <circle cx="28" cy="36" r="6" stroke="#FBF8F1" strokeWidth="1.5" />
                  <circle cx="36" cy="36" r="6" stroke="#A66B3F" strokeWidth="1.5" />
                </svg>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 800, color: '#FFFFFF', fontSize: '1.25rem' }}>
                  CuNest
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8, fontFamily: 'sans-serif' }}>
                Precision Interconnects for the Next Generation of Computing. Sub-millimeter accuracy for mission-critical hardware.
              </Typography>
            </Grid>

            {/* Column 2: Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Products
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Nest-Grip LGA Sockets</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Edge-Rate PCIe Slots</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Micro-Fit Power</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Custom Spring Probes</a>
              </Box>
            </Grid>

            {/* Column 3: Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link to="/about" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">About Us</Link>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Quality Assurance</a>
                <a href="#" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Careers</a>
                <Link to="/contact" className="text-[#94a3b8] hover:text-[#A66B3F] transition-colors duration-300 font-sans text-sm no-underline">Contact Support</Link>
              </Box>
            </Grid>

            {/* Column 4: Newsletter */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: 'sans-serif' }}>
                Stay Updated
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontFamily: 'sans-serif' }}>
                Subscribe to our newsletter for the latest in interconnect technology.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#112240] border border-white/10 rounded-full px-4 py-2 text-white outline-none focus:border-[#A66B3F] w-full text-sm transition-colors placeholder-white/40"
                />
                <button className="w-full px-6 py-2 rounded-sm bg-transparent border-2 border-[#A66B3F] text-white font-bold uppercase tracking-wider hover:bg-[#A66B3F]/10 hover:scale-[1.02] transition-all duration-300">
                  Subscribe
                </button>
              </Box>
            </Grid>

          </Grid>
          
          {/* Bottom Copyright Row */}
          <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'sans-serif', textAlign: { xs: 'center', md: 'left' } }}>
              &copy; {new Date().getFullYear()} CuNest Interconnects. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <a href="#" className="text-[#64748b] hover:text-white transition-colors duration-300 text-sm no-underline">Privacy Policy</a>
              <a href="#" className="text-[#64748b] hover:text-white transition-colors duration-300 text-sm no-underline">Terms of Service</a>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
