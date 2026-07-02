import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const phases = [
  {
    title: 'Phase 1',
    items: [
      'Layout Setup',
      'Layer Estimation',
      'Cross Section Definition',
      'DIE Generation',
      'BGA Generation',
      'Constraint Setup',
      'DIE & BGA Fanout',
    ],
  },
  {
    title: 'Phase 2',
    items: [
      'IO Routing & Ball Assignment',
      'Power & Ground Planes',
      'Stitching Via Addition',
      'Adding Fiducial & Degassing',
      'Artwork Setup & Gerber Generation',
      'DFM Validation',
      'Final Files to Customer',
    ],
  },
];

function DesignFlowSection() {
  return (
    <Box
      component={motion.section}
      id="flow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#0D0F12', position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(197,119,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197,119,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>


        <Grid container spacing={3}>
          {phases.map((phase, index) => (
            <Grid item xs={12} md={6} key={phase.title}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <Box sx={{ p: 3, border: '1px solid rgba(197,119,58,0.16)', background: 'rgba(197,119,58,0.03)', backdropFilter: 'blur(10px)', minHeight: 420 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontFamily: '"JetBrains Mono", sans-serif' }}>
                    {phase.title}
                  </Typography>
                  <Box component="ol" sx={{ pl: 3, m: 0, color: 'text.secondary' }}>
                    {phase.items.map((item, idx) => (
                      <Box component="li" key={item} sx={{ mb: 2, lineHeight: 1.9 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default DesignFlowSection;
