import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#0A1628', py: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* Column 1: Brand */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              {/* SVG Logo */}
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="12" width="40" height="40" rx="4" stroke="#B87333" strokeWidth="2" />
                <path d="M12 24H8 M12 32H8 M12 40H8 M52 24H56 M52 32H56 M52 40H56 M24 12V8 M32 12V8 M40 12V8 M24 52V56 M32 52V56 M40 52V56" stroke="#E8B884" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="28" r="6" stroke="#B87333" strokeWidth="1.5" />
                <circle cx="28" cy="36" r="6" stroke="#E8B884" strokeWidth="1.5" />
                <circle cx="36" cy="36" r="6" stroke="#B87333" strokeWidth="1.5" />
              </svg>
              <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 800, color: '#FFFFFF' }}>
                CuNest
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8, fontFamily: '"Inter", sans-serif' }}>
              Precision Interconnects for the Next Generation of Computing. Sub-millimeter accuracy for mission-critical hardware.
            </Typography>
          </Grid>

          {/* Column 2: Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Nest-Grip LGA Sockets</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Edge-Rate PCIe Slots</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Micro-Fit Power</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Custom Spring Probes</MuiLink>
            </Box>
          </Grid>

          {/* Column 3: Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>About Us</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Quality Assurance</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Careers</MuiLink>
              <MuiLink href="#" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: '#B87333' }, fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Contact Support</MuiLink>
            </Box>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Subscribe to our newsletter for the latest in interconnect technology.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-navy border border-white/10 rounded-full px-4 py-2 text-white outline-none focus:border-copper w-full text-sm transition-colors"
              />
              <button className="w-full rounded-full bg-gradient-to-r from-copper to-copper-light text-white font-bold py-2 shadow-md hover:shadow-lg transition-all">
                Subscribe
              </button>
            </Box>
          </Grid>

        </Grid>
        
        <Box sx={{ mt: 12, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#64748b', fontFamily: '"Inter", sans-serif' }}>
            &copy; {new Date().getFullYear()} CuNest Interconnects. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink href="#" sx={{ color: '#64748b', '&:hover': { color: '#fff' } }}>Privacy Policy</MuiLink>
            <MuiLink href="#" sx={{ color: '#64748b', '&:hover': { color: '#fff' } }}>Terms of Service</MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
