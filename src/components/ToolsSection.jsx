import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const toolGroups = [
  { label: 'Signal Integrity', items: ['IBIS Models', 'Power Mesh', 'Impedance'] },
  { label: 'Package Layout', items: ['Layer Planning', 'BGA Fanout', 'Thermal Mesh'] },
  { label: 'Validation', items: ['DFM Checks', 'Gerber Output', 'Reliability Signoff'] },
];

function ToolsSection() {
  return (
    <Box
      component={motion.section}
      id="tools"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 10, md: 12 }, backgroundColor: '#0A0C0F' }}
    >
      <Container maxWidth="lg">

        <Grid container spacing={3}>
          {toolGroups.map((group, index) => (
            <Grid item xs={12} md={4} key={group.label}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <Box
                  sx={{
                    p: 3,
                    border: '1px solid rgba(197,119,58,0.16)',
                    background: 'rgba(197,119,58,0.03)',
                    borderRadius: 0,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Syne", sans-serif' }}>
                    {group.label}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {group.items.map((item) => (
                      <Chip key={item} label={item} variant="outlined" sx={{ color: '#E8E4DC', borderColor: 'rgba(197,119,58,0.22)' }} />
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

export default ToolsSection;
