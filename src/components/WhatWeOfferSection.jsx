import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'PCB DESIGN',
    description: "We specialize in designing high-quality, reliable PCBs tailored to your project's requirements, ensuring optimized performance and durability for your devices.",
  },
  {
    title: 'IC PACKAGING DESIGN',
    description: "Our team designs cutting-edge IC packaging solutions that offer maximum protection, heat dissipation, and reliability for your integrated circuits.",
  },
  {
    title: 'SI & PI ANALYSIS',
    description: "We provide comprehensive Signal Integrity (SI) and Power Integrity (PI) analysis to ensure optimal performance, minimal interference, and efficient power delivery.",
  },
];

function WhatWeOfferSection() {
  const navigate = useNavigate();

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: '#030B17' }}> {/* Deep Navy background for the section */}
      <Container maxWidth="lg">
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Inter", "Poppins", sans-serif',
              fontWeight: 800,
              color: '#ffffff',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            What We Offer
          </Typography>
          <Box
            sx={{
              width: '60px',
              height: '4px',
              backgroundColor: '#00E5FF', // Electric Cyan
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                onClick={() => index === 0 ? navigate('/pcb-design') : index === 2 ? navigate('/sipi-analysis') : null}
                elevation={0}
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 4,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #0A192F 0%, #02060D 100%)', // Deep navy-to-black gradient
                  border: '1px solid rgba(0, 229, 255, 0.1)', // Subtle cyan border
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: (index === 0 || index === 2) ? 'pointer' : 'default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 229, 255, 0.15)', // Electric Cyan glow
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.4,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Inter", "Poppins", sans-serif',
                      fontWeight: 700,
                      color: '#ffffff',
                      mb: 2.5,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Inter", "Poppins", sans-serif',
                      color: 'rgba(255, 255, 255, 0.7)', // Light opacity gray/white
                      lineHeight: 1.7,
                      fontSize: '1.05rem',
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatWeOfferSection;
