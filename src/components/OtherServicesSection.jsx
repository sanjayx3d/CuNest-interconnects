import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  'Probe Card Designs',
  'Load Board Designs',
  'Mother & Daughter Board Designs',
  'High Speed Designs',
  'EMI / EMC Analysis',
  'SI and PI Simulation Services',
  'IC Package Substrate Designs',
];

function OtherServicesSection() {
  return (
    <Box
      component={motion.section}
      id="other-services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 10, md: 12 }, backgroundColor: '#0A0C0F' }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, letterSpacing: '0.35em' }}>
          Additional Services
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, fontFamily: '"JetBrains Mono", sans-serif', maxWidth: 680 }}>
          Supporting services that complete your package engineering pipeline.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {services.map((service) => (
            <motion.div key={service} whileHover={{ scale: 1.03 }}>
              <Chip
                label={service}
                variant="outlined"
                sx={{
                  borderColor: 'rgba(197,119,58,0.24)',
                  color: '#E8E4DC',
                  '&:hover': {
                    backgroundColor: 'rgba(197,119,58,0.12)',
                    borderColor: '#C5773A',
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default OtherServicesSection;
