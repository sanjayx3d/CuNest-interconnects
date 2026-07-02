import { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  MenuItem, 
  FormControl, 
  FormLabel, 
  FormGroup, 
  FormControlLabel, 
  Checkbox 
} from '@mui/material';
import { motion } from 'framer-motion';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    packageType: '',
    layerCount: '',
    ballCount: '',
    protocols: [],
    message: '',
    file: null
  });

  const packageTypes = ['Flip Chip', 'MLO', 'MLC', 'Interposer', 'Core-less Substrate', 'Other'];
  const highSpeedProtocols = ['DDR4/DDR5', 'PCIe', 'USB', 'SerDes', 'HDMI/DisplayPort'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (protocol) => {
    setFormData(prev => {
      const current = prev.protocols.includes(protocol)
        ? prev.protocols.filter(p => p !== protocol)
        : [...prev.protocols, protocol];
      return { ...prev, protocols: current };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🚀 *New Design Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company}

📦 *Package Technology:* ${formData.packageType}
📚 *Layer Stack-up:* ${formData.layerCount || "Not Specified"}
⚪ *Ball Count / BGA Pitch:* ${formData.ballCount || "Not Specified"}

🔗 *Protocols:*
${formData.protocols.length > 0 ? formData.protocols.join(", ") : "Not Specified"}

📝 *Project Requirements:*
${formData.message || "Not Provided"}
`;

    const whatsappNumber = "917200016747";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Input fields-க்கான பொதுவான MUI ஸ்டைல்ஸ்
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
      '&:hover fieldset': { borderColor: '#c5773a' },
      '&.Mui-focused fieldset': { borderColor: '#c5773a' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#c5773a' },
    '& .MuiInputBase-input': { color: '#fff' }
  };

  return (
    <Box
      component={motion.section}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 6, sm: 8, md: 12 }, backgroundColor: '#0A0C0F', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Grid Accent */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(197,119,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197,119,58,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.16,
          pointerEvents: 'none',
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 4, md: 0 }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              mb: 2,
              display: 'block',
              letterSpacing: { xs: '0.15em', md: '0.35em' },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Start Your Next Design
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontFamily: '"Syne", sans-serif',
              fontSize: {
                xs: '1.6rem',
                sm: '2.2rem',
                md: '2.75rem'
              },
              lineHeight: 1.2,
              color: '#fff',
              px: { xs: 1, sm: 0 }
            }}
          >
            We’re ready to bring your IC package vision into production.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 1, sm: 0 },
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Connect with the CuNest Interconnects team for a confidential consultation and engineering review.
          </Typography>
        </Box>

        {/* Technical Input Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.01)',
            p: { xs: 2.5, sm: 4, md: 6 },
            borderRadius: { xs: '16px', md: '24px' },
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            overflow: 'hidden'
          }}
        >
          <Grid container spacing={3}>
            {/* Basic Info */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Your Name" name="name" value={formData.name} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required type="email" label="Official Email" name="email" value={formData.email} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Company Name" name="company" value={formData.company} onChange={handleChange} sx={textFieldStyles} />
            </Grid>

            {/* Technical Parameters */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                required
                label="Package Design Technology"
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                sx={textFieldStyles}
              >
                {packageTypes.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Layer Stack-up (e.g., 3+2+3, 4 Layer)" name="layerCount" value={formData.layerCount} onChange={handleChange} sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Estimated Ball Count / BGA Pitch" name="ballCount" value={formData.ballCount} onChange={handleChange} sx={textFieldStyles} placeholder="e.g., 725 Balls / 800um Pitch" />
            </Grid>



            {/* Additional Project Requirements */}
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Project Requirements & Constraints" name="message" value={formData.message} onChange={handleChange} sx={textFieldStyles} placeholder="Share details about SI/PI constraints, thermal targets, or size requirements..." />
            </Grid>

            {/* Die Spec / Netlist File Upload */}
            <Grid item xs={12}>
              <Box sx={{ p: 3, border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                  Have a Netlist, Die Map, or Specification Document? (Optional)
                </Typography>
                <Button component="label" variant="outlined" size="small" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', '&:hover': { borderColor: '#c5773a', backgroundColor: 'rgba(197,119,58,0.08)' } }}>
                  Upload File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {formData.file && (
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#c5773a', fontWeight: 500 }}>
                    Selected: {formData.file.name}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  maxWidth: { xs: '100%', sm: '350px' },
                  py: 1.75,
                  backgroundColor: '#c5773a',
                  color: '#fff',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#a45f2b'
                  }
                }}
              >
                Submit Design Request
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;