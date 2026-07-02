import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

const ContactPage = () => {
  // Input fields styling
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
      '&:hover fieldset': { borderColor: '#CD7F32' },
      '&.Mui-focused fieldset': { borderColor: '#CD7F32' },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-24 bg-[#f8fafc] font-sans"
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10} mt={4}>
          <Typography variant="h2" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 800, color: '#0F3D3E', mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', maxWidth: '600px', mx: 'auto' }}>
            We'd love to hear from you. Fill out the form below or reach out using the contact details provided.
          </Typography>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: '24px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <Grid container>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={5} sx={{ backgroundColor: '#0F3D3E', color: '#FFFFFF', p: { xs: 4, md: 8 } }}>
              <Typography variant="h3" sx={{ fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 700, mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Contact For Any Queries
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5, gap: 2 }}>
                <PhoneIcon sx={{ color: '#CD7F32', mt: 0.5, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>Phone</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>+7010702123</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#CD7F32', mt: 0.5, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>Address</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.8 }}>
                    39 MGR Nagar, Saravanampatti,<br/>
                    Coimbatore, TN - 641035,<br/>
                    India
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={7} sx={{ backgroundColor: '#FFFFFF', p: { xs: 4, md: 8 } }}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Full Name</Typography>
                  <TextField fullWidth placeholder="John Doe" variant="outlined" sx={textFieldStyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Email address</Typography>
                  <TextField fullWidth placeholder="name@example.com" type="email" variant="outlined" sx={textFieldStyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Subject</Typography>
                  <TextField fullWidth placeholder="Subject" variant="outlined" sx={textFieldStyles} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Message</Typography>
                  <TextField fullWidth placeholder="Message" multiline rows={4} variant="outlined" sx={textFieldStyles} />
                </Box>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    backgroundColor: '#CD7F32', 
                    color: '#fff', 
                    py: 1.5, 
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { backgroundColor: '#a46528' }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default ContactPage;
