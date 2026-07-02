import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu, setMenuOpen } from '../store/uiSlice';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/#expertise' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const scrollY = useSelector((state) => state.ui.scrollY);
  const dispatch = useDispatch();

  const isScrolled = scrollY > 50;

  const Logo = () => (
    <Link to="/" className="flex items-center gap-3 no-underline">
      <img src="/logo1_transparent.png" alt="CuNest Logo" style={{ width: '64px', height: '64px', objectFit: 'contain', filter: 'drop-shadow(0px 2px 4px rgba(255,255,255,0.2))' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ 
          fontFamily: '"JetBrains Mono", sans-serif', 
          fontWeight: 800, 
          fontSize: '1.2rem', 
          lineHeight: 1,
          textShadow: 'none'
        }}>
          <span style={{ color: '#CD7F32' }}>Cu</span><span style={{ color: '#FFFFFF' }}>Nest</span>
        </Typography>
        <Typography sx={{ 
          fontFamily: '"JetBrains Mono", sans-serif', 
          fontWeight: 600, 
          fontSize: '0.65rem', 
          letterSpacing: '0.15em',
          color: '#FFFFFF',
          lineHeight: 1,
          mt: 0.5,
          textShadow: 'none'
        }}>
          INTERCONNECTS
        </Typography>
      </Box>
    </Link>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: '#0F3D3E',
          backdropFilter: 'none',
          boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.2)' : 'none',
          borderBottom: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
          transition: 'all 0.3s ease',
          py: isScrolled ? 0.5 : 1
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Logo />

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.path}
                  className="relative group text-white hover:text-[#CD7F32] transition-colors font-bold text-[15px] tracking-[0.5px] no-underline py-1"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CD7F32] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link to="/pcb-fabrication">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(205, 127, 50, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-8 py-3 rounded-full bg-[#CD7F32] text-white text-[15px] font-bold uppercase tracking-[1px] hover:bg-[#b56e29] transition-all duration-300"
                >
                  PCB Fabrication
                </motion.button>
              </Link>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton 
              sx={{ display: { md: 'none' }, color: '#FFFFFF' }} 
              onClick={() => dispatch(toggleMenu())}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => dispatch(setMenuOpen(false))}
        PaperProps={{
          sx: { width: '280px', backgroundColor: '#0F3D3E', borderLeft: '1px solid rgba(255,255,255,0.1)' }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton sx={{ color: '#FFFFFF' }} onClick={() => dispatch(setMenuOpen(false))}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 6 }}><Logo /></Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} button component={Link} to={link.path} onClick={() => dispatch(setMenuOpen(false))} sx={{ py: 2 }}>
                <ListItemText 
                  primary={link.title} 
                  primaryTypographyProps={{ style: { fontFamily: '"JetBrains Mono", sans-serif', fontWeight: 600, color: '#FFFFFF' } }} 
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 4 }}>
            <Link to="/pcb-fabrication" onClick={() => dispatch(setMenuOpen(false))}>
              <button className="w-full px-6 py-4 rounded-full bg-[#CD7F32] text-white font-bold uppercase tracking-[0.5px] hover:bg-[#b56e29] transition-all">
                PCB Fabrication
              </button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
