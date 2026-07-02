import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const IndustryCard = ({ title, description, image, delay }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }} style={{ height: '100%' }}>
    <Paper
      elevation={0}
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '450px',
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      {/* Top Half: High-tech image */}
      <Box
        sx={{
          height: '240px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Bottom Half: White text block */}
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#0a2540',
            fontWeight: 700,
            mb: 2,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666666',
            lineHeight: 1.6,
            fontFamily: '"Inter", sans-serif',
            mb: 4,
            flexGrow: 1,
            fontSize: '0.95rem'
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: '#B87333',
            fontWeight: 700,
            fontFamily: '"Inter", sans-serif',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              color: '#8C5A2B'
            }
          }}
        >
          Learn More &rarr;
        </Typography>
      </Box>
    </Paper>
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
            fontFamily: '"Inter", sans-serif',
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
            fontFamily: '"Inter", sans-serif'
          }}
        >
          We provide cutting-edge solutions across major tech sectors.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          
          {/* Semiconductor */}
          <Grid item xs={12} md={4}>
            <IndustryCard
              title="Semiconductor"
              description="We design and manufacture advanced semiconductor components for a wide range of industries, ensuring high performance and energy efficiency in all applications."
              image="/semiconductor.png"
              delay={0.1}
            />
          </Grid>

          {/* Automotive */}
          <Grid item xs={12} md={4}>
            <IndustryCard
              title="Automotive"
              description="Our innovative technologies support the automotive industry, from vehicle electronics to advanced driver-assistance systems (ADAS), ensuring safety and reliability on the road."
              image="/automotive.png"
              delay={0.3}
            />
          </Grid>

          {/* Healthcare */}
          <Grid item xs={12} md={4}>
            <IndustryCard
              title="Health Care"
              description="We provide cutting-edge solutions for the healthcare industry, enabling advanced medical devices and diagnostic equipment."
              image="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              delay={0.5}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default IndustriesSection;
