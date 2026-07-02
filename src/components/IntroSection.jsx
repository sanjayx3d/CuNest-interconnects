import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

function IntroSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: 'rgba(248, 249, 250, 0.9)', // Slight transparency to let potential background show through
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Image / Icon Placeholder */}
          <Grid item xs={12} md={4.5}> {/* Roughly 35% */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: true }}
              style={{ height: '100%', width: '100%' }}
            >
              <Box 
                sx={{ 
                height: '100%', 
                minHeight: { xs: '300px', md: '500px' },
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                alt="Circuit Harness" 
                className="w-full h-full object-cover absolute top-0 left-0"
              />
              <Box 
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 61, 62, 0.4)', // Dark Teal tint to match theme
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <SettingsInputComponentIcon sx={{ fontSize: '5rem', color: '#FFFFFF', opacity: 0.9 }} />
              </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Glassmorphism Text Container */}
          <Grid item xs={12} md={7.5}> {/* Roughly 65% */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  p: { xs: 4, md: 8 },
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  maxWidth: '600px',
                  mx: 'auto',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#1A1A2E', // Dark Navy/Charcoal
                    mb: 2,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    lineHeight: 1.3,
                    letterSpacing: '1px'
                  }}
                >
                  CuNest. Engineered Interconnects.<br />Delivered Flawlessly.
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    color: '#CD7F32', // Copper/Gold
                    mb: 4,
                    fontSize: { xs: '1.1rem', md: '1.4rem' }
                  }}
                >
                  Great systems deserve great connections.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    color: '#4B5563', // Dark Gray
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 1.8,
                  }}
                >
                  CuNest Interconnects brings the same engineering rigor, process discipline, and customer-centric ethos that defines CuNest—now purpose-built for high-performance cabling, harnesses, and flexible interconnects. Every assembly is a testament to our belief: with the right team and the right processes, great things don't just happen. They're engineered.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}

export default IntroSection;
