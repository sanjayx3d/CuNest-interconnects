import { Box, Card, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

const bullets = [
  'High-density substrate signal integrity optimization',
  'Package thermal analysis and material stack guidance',
  'BGA, LGA, and fine-pitch routing strategy',
  'Cross-section definition, fanout and layer planning',
  'Reliability-focused DFM validation and review workflows',
];

const tools = [
  { title: 'Package CAD', description: 'Design rule driven substrate layout.', icon: <EngineeringIcon /> },
  { title: 'Signal & Power', description: 'Power mesh and impedance-aware routing.', icon: <BoltIcon /> },
  { title: 'System Integration', description: 'Cross-domain assembly and thermal planning.', icon: <SettingsEthernetIcon /> },
  { title: 'Quality Control', description: 'Controlled release and documentation.', icon: <VerifiedUserIcon /> },
];

function ExpertiseSection() {
  return (
    <Box
      component={motion.section}
      id="expertise"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#0A0C0F' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="stretch">
          <Grid item xs={12} md={5}>

            <List sx={{ pl: 0 }}>
              {bullets.map((bullet) => (
                <ListItem key={bullet} disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: '#C5773A' }}>
                    <Box component="span" sx={{ width: 8, height: 8, bgcolor: '#C5773A', borderRadius: '50%' }} />
                  </ListItemIcon>
                  <ListItemText primary={bullet} primaryTypographyProps={{ color: 'text.primary', fontSize: 14, lineHeight: 1.85 }} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {tools.map((tool, index) => (
                <Grid item xs={12} sm={6} key={tool.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        minHeight: 170,
                        border: '1px solid rgba(197,119,58,0.18)',
                        background: 'rgba(197,119,58,0.03)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 20px 60px rgba(197,119,58,0.12)',
                          borderColor: 'rgba(197,119,58,0.35)',
                        },
                      }}
                    >
                      <Box sx={{ color: '#C5773A', mb: 2 }}>{tool.icon}</Box>
                      <Typography variant="h6" sx={{ mb: 1, fontFamily: '"JetBrains Mono", sans-serif' }}>
                        {tool.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        {tool.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ExpertiseSection;
