import { useState } from 'react';
import { Box, Card, Container, Tab, Tabs, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const models = [
  {
    label: 'MLO / KYOCERA',
    title: 'Design Model 1',
    summary:
      'Advanced multi-layer organic substrate package optimized for high-density signal routing, SI performance, and compact thermal-aware fanout architecture.',
    stats: [
      { label: 'Total C4 Pads', value: '1310' },
      { label: 'Minimum DIE Pitch', value: '150um' },
      { label: 'BGA Ball Count', value: '725' },
      { label: 'BGA Pitch', value: '800um' },
      { label: 'Package Size', value: '23 × 23 mm' },
      { label: 'Layer Stack-up', value: '3+2+3' },
    ],
    work: [
      'DIE & BGA Creation',
      'Capacitor Placement',
      'Cross section update',
      'Constraint setting',
      'PAD stack creation',
      'Signal Planning & Routing',
      'Length Matching (Skew)',
      'Power Plane segmentation',
      'Artwork Setup & Gerber Generation',
    ],
    challenges: [
      'Implemented SI recommendations for high-speed nets',
      'Maintained 5X spacing between differential pairs',
      'Optimized PDN using power vias',
      'Handled USB, PCIe, SerDes & DDR4 routing',
    ],
    images: [
      { src: '/model1-die.png', title: 'DIE' },
      { src: '/model1-bga.png', title: 'BGA' },
      { src: '/model1-routing.png', title: 'SIGNAL ROUTING' },
      { src: '/model1-power.png', title: 'POWER SEGMENTATION' },
      { src: '/model1-layer.png', title: 'ALL LAYER ROUTING' },
    ],
  },
  {
    label: 'MLO / FICT / 4-Site',
    title: 'Design Model 2',
    summary:
      'High-integrity four-site package design architecture engineered for advanced routing density and multi-site synchronization.',
    stats: [
      { label: 'Total C4 Pads', value: '2414' },
      { label: 'No Of Sites', value: '4' },
      { label: 'Minimum DIE Pitch', value: '140um' },
      { label: 'BGA Ball Count', value: '969/site' },
      { label: 'BGA Pitch', value: '800um' },
      { label: 'Layer Stack-up', value: '3+6+3' },
    ],
    work: [
      'DIE & BGA Creation',
      'Constraint setup',
      'PAD stack creation',
      'Signal Planning & Routing',
      'Length Matching',
      'Power Plane segmentation',
      'Artwork Setup',
      'Gerber Generation',
    ],
    challenges: [
      'Handled fixed one-to-one BGA assignment',
      'Managed restricted layer count routing',
      'Implemented Jogging Via concept',
      'Resolved criss-cross routing complexity',
    ],
    images: [
      { src: '/model2-die.png', title: 'DIE' },
      { src: '/model2-bga.png', title: 'BGA' },
      { src: '/model2-routing.png', title: 'SIGNAL ROUTING' },
      { src: '/model2-power.png', title: 'POWER SEGMENTATION' },
      { src: '/model2-layer.png', title: 'ALL SIGNAL ROUTING' },
    ],
  },
];

function ProjectsSection() {
  const [value, setValue] = useState(0);
  const current = models[value];

  return (
    <Box
      component={motion.section}
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9 }}
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#030712', // Dark background theme
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>


        {/* Custom Tabs Integration */}
        <Box
          sx={{
            mb: 5,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Tabs
            value={value}
            onChange={(e, next) => setValue(next)}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#10b981', // Your Emerald Color for layout active indicator
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'none',
                fontSize: 15,
                fontWeight: 600,
                pb: 1.5,
                transition: 'color 0.2s ease',
              },
              '& .Mui-selected': {
                color: '#10b981 !important', // Selected Emerald tab text
              },
            }}
          >
            {models.map((model) => (
              <Tab key={model.label} label={model.label} />
            ))}
          </Tabs>
        </Box>

        {/* Active Model Wrapper */}
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Main Info Summary Section */}
          <Box
            sx={{
              mb: 5,
              p: { xs: 3, md: 4 },
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backgroundColor: '#0b1329', // Dark Panel Sheet
              borderRadius: '16px',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontFamily: '"JetBrains Mono", sans-serif',
                color: '#ffffff',
              }}
            >
              {current.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.8,
                maxWidth: 900,
              }}
            >
              {current.summary}
            </Typography>
          </Box>

          {/* Configuration Grid Cards */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 6,
            }}
          >
            {current.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.04 }}
                viewport={{ once: true }}
                style={{ flex: '1 1 240px' }}
              >
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    backgroundColor: '#0b1329',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(16, 185, 129, 0.4)', // Hovering Emerald glow border
                      boxShadow: '0 10px 20px rgba(16, 185, 129, 0.05)',
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      mb: 1,
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"JetBrains Mono", sans-serif',
                      color: '#10b981', // Value rendered in Emerald accent
                      fontWeight: 600,
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Split lists: Responsibilities & Solutions */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              mb: 6,
            }}
          >
            {/* Responsibilities list */}
            <Box sx={{ flex: '1 1 420px' }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: '#0b1329',
                  borderRadius: '16px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontFamily: '"JetBrains Mono", sans-serif',
                    color: '#ffffff',
                  }}
                >
                  Work Description
                </Typography>

                <Box component="ul" sx={{ m: 0, pl: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                  {current.work.map((item) => (
                    <Typography
                      component="li"
                      key={item}
                      variant="body2"
                      sx={{
                        mb: 1.5,
                        lineHeight: 1.8,
                        '&::marker': { color: '#10b981' }, // Emerald marker lines
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Challenges list */}
            <Box sx={{ flex: '1 1 420px' }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: '#0b1329',
                  borderRadius: '16px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontFamily: '"JetBrains Mono", sans-serif',
                    color: '#ffffff',
                  }}
                >
                  Challenges & Solutions
                </Typography>

                <Box component="ul" sx={{ m: 0, pl: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                  {current.challenges.map((item) => (
                    <Typography
                      component="li"
                      key={item}
                      variant="body2"
                      sx={{
                        mb: 1.5,
                        lineHeight: 1.8,
                        '&::marker': { color: '#f59e0b' }, // Gold marker lines for challenges
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Unified Non-Overlap Structural Grid */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            {current.images.map((image, idx) => {
              const isFullWidth =
                image.title === 'SIGNAL ROUTING' ||
                image.title === 'ALL SIGNAL ROUTING';

              return (
                <motion.div
                  key={image.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  style={{
                    flex: isFullWidth ? '1 1 100%' : '1 1 420px',
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: '#0b1329',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: 'rgba(16, 185, 129, 0.4)', // Hover Emerald frame
                        boxShadow: '0 20px 40px rgba(16, 185, 129, 0.06)',
                      },
                    }}
                  >
                    {/* Top Segment - Product Graphic Layer */}
                    <Box
                      sx={{
                        backgroundColor: '#050b18', // Deep canvas contrast container
                        p: { xs: 2, sm: 4 },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        position: 'relative',
                      }}
                    >
                      {/* Floating Identity Chip */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          px: 1.5,
                          py: 0.5,
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          background: 'rgba(3, 7, 18, 0.85)',
                          backdropFilter: 'blur(8px)',
                          color: '#10b981', // Clean Emerald Text identifier
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          borderRadius: '6px',
                        }}
                      >
                        {image.title}
                      </Box>

                      <Box
                        component="img"
                        src={image.src}
                        alt={image.title}
                        sx={{
                          width: '100%',
                          height: isFullWidth 
                            ? { xs: 240, sm: 380, md: 480 } 
                            : { xs: 220, sm: 280 },
                          objectFit: 'contain',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          '&:hover': {
                            transform: 'scale(1.015)',
                          },
                        }}
                      />
                    </Box>

                    {/* Bottom Segment - Metadata Copy Block */}
                    <Box sx={{ p: { xs: 3, sm: 4 } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1.5,
                          fontFamily: '"JetBrains Mono", sans-serif',
                          color: '#ffffff',
                          fontWeight: 600,
                        }}
                      >
                        {image.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          lineHeight: 1.6,
                        }}
                      >
                        {image.title === 'DIE' &&
                          'High-density DIE structure with optimized substrate alignment and precision pad arrangement.'}
                        {image.title === 'BGA' &&
                          'Advanced BGA fanout architecture engineered for reliable signal distribution and package connectivity.'}
                        {image.title === 'SIGNAL ROUTING' &&
                          'SI-aware high-speed routing implementation with controlled trace spacing and optimized differential pair management.'}
                        {image.title === 'POWER SEGMENTATION' &&
                          'Power segmentation layout designed for stable current flow and reduced electrical interference.'}
                        {image.title === 'ALL LAYER ROUTING' &&
                          'Complete multilayer routing execution with optimized via planning and signal organization.'}
                        {image.title === 'ALL SIGNAL ROUTING' &&
                          'Comprehensive routing overview across all sites with balanced trace planning and spacing control.'}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
}

export default ProjectsSection;