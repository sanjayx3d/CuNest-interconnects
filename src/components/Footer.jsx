import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{ py: 6, backgroundColor: '#080A0D', borderTop: '1px solid rgba(197,119,58,0.12)' }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontFamily: '"Syne", sans-serif' }}>
            CuNest Interconnects
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Premium IC packaging design services for advanced semiconductor systems.
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Crafted with precision, engineered for impact.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
