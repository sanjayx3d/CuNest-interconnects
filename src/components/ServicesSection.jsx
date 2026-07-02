import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LayersIcon from '@mui/icons-material/Layers';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GridOnIcon from '@mui/icons-material/GridOn';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

const cards = [
  { title: 'Flip Chip', icon: <DeveloperBoardIcon sx={{ fontSize: 36 }} />, description: 'High-density interconnects for next-gen package scaling.' },
  { title: 'Multi-Layer Organic', icon: <LayersIcon sx={{ fontSize: 36 }} />, description: 'Robust organic substrate stacks with signal integrity focus.' },
  { title: 'Multi-Layer Ceramic', icon: <PrecisionManufacturingIcon sx={{ fontSize: 36 }} />, description: 'Ceramic packages engineered for thermal and reliability margins.' },
  { title: 'Interposer', icon: <SettingsInputCompositeIcon sx={{ fontSize: 36 }} />, description: 'Complex silicon interposer routing for advanced system integration.' },
  { title: 'Core-less Substrate', icon: <GridOnIcon sx={{ fontSize: 36 }} />, description: 'Ultra-thin core-less designs for compact high-performance modules.' },
];

function ServicesSection() {
  return (
    <Box
      component={motion.section}
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ position: 'relative', py: { xs: 10, md: 14 }, backgroundColor: '#0B0E12', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(197,119,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197,119,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.24,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, letterSpacing: '0.35em' }}>
          Package Design Technologies
        </Typography>
        <Typography variant="h3" sx={{ maxWidth: 660, mb: 5, fontFamily: '"JetBrains Mono", sans-serif' }}>
          Premium substrate engineering for advanced IC packaging.
        </Typography>
        <Grid container spacing={3}>
          {cards.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <Card
                  sx={{
                    p: 3,
                    minHeight: 220,
                    border: '1px solid rgba(197,119,58,0.18)',
                    background: 'rgba(197,119,58,0.03)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 18px 60px rgba(197,119,58,0.12)',
                      borderColor: 'rgba(197,119,58,0.35)',
                    },
                  }}
                >
                  <Box sx={{ mb: 3, color: '#C5773A' }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: '"JetBrains Mono", sans-serif' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;
