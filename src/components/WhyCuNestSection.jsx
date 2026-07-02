import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SpeedIcon from '@mui/icons-material/Speed';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  { title: 'Cost Effective & On-Time Delivery', icon: <SpeedIcon sx={{ fontSize: 36 }} />, description: 'Optimized production schedules with predictable delivery windows.' },
  { title: 'Fast Turnaround', icon: <ScheduleIcon sx={{ fontSize: 36 }} />, description: 'Focused engineering iterations and expedited review cycles.' },
  { title: 'Expedite Options', icon: <CheckCircleIcon sx={{ fontSize: 36 }} />, description: 'Priority support for high-value development programs.' },
  { title: 'Confidentiality', icon: <LockIcon sx={{ fontSize: 36 }} />, description: 'Secure design handling and discrete project governance.' },
];

function WhyCuNestSection() {
  return (
    <Box
      component={motion.section}
      id="why"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#0D0F12' }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, letterSpacing: '0.35em' }}>
          Why CuNest
        </Typography>
        <Typography variant="h3" sx={{ mb: 5, fontFamily: '"JetBrains Mono", sans-serif', maxWidth: 680 }}>
          Premium support and delivery for your most demanding package programs.
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
              >
                <Card
                  sx={{
                    p: 3,
                    minHeight: 190,
                    border: '1px solid rgba(197,119,58,0.16)',
                    background: 'rgba(197,119,58,0.03)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 60px rgba(197,119,58,0.12)',
                      borderColor: 'rgba(197,119,58,0.35)',
                    },
                    transition: 'all 0.35s ease',
                  }}
                >
                  <Box sx={{ color: '#C5773A', mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: '"JetBrains Mono", sans-serif' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {feature.description}
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

export default WhyCuNestSection;
