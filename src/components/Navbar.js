import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#f9004d' : '#1f1f25', // Updated to match screenshot
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
    padding: '0 15px',
    transition: 'color 0.3s, border-bottom 0.3s',
    position: 'relative',
  });

  const getLinkStyles = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#f9004d' : 'white', // Updated to match screenshot
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
    padding: '0 15px',
    transition: 'color 0.3s, border-bottom 0.3s',
    position: 'relative',
  });

  const dropdownStyles = {
    width: '100%', // Full width
    backgroundColor: 'black', // Updated to white background
    color: '#1f1f25',
    padding: '20px 50px', // Adjust padding as needed
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    rowGap: '15px', // Spacing between items
  };

  const menuItemStyles = {
    color: 'white', // Updated to match the main color scheme
    fontSize: '14px',
    padding: '5px 0',
    cursor: 'pointer',
    marginLeft:"20px"
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        color: '#1f1f25',
        boxShadow: 'none',
        transition: 'background-color 0.3s, color 0.3s',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 50px' }}> {/* Added padding to Toolbar for spacing */}
        <Typography
          variant="h6"
          sx={{
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
            color: '#1f1f25',
          }}
        >
          MyWebsite
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Link to="/" style={getLinkStyle('/')}>
            Home
          </Link>
          <Link to="/about" style={getLinkStyle('/about')}>
            About Us
          </Link>
          <Button
            onClick={handleMenuClick}
            sx={{
              textTransform: 'none',
              color: '#1f1f25', // Updated button text color to match links
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
              padding: '0 15px', // Consistent padding with links
            }}
          >
            MBBS Abroad
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              // mt: '45px',
              opacity:"0.8",
              '& .MuiPaper-root': {
                width: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'black', // Updated to match overall Navbar background
                color: '#1f1f25',
                boxShadow: 'none',
              },
            }}
          >
            <Box sx={dropdownStyles}>
              <MenuItem sx={{ fontWeight: 'bold', fontSize: '16px', cursor: 'default', color: '#f9004d' }}>Country</MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/course-duration" style={getLinkStyles('/mbbs-abroad/course-duration')}>
                  Course Duration
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/eligibility" style={getLinkStyles('/mbbs-abroad/eligibility')}>
                  Eligibility
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/course-fee" style={getLinkStyles('/mbbs-abroad/course-fee')}>
                  Course Fee
                </Link>
              </MenuItem>
              <MenuItem sx={{ fontWeight: 'bold', fontSize: '16px', cursor: 'default', color: '#f9004d' }}>Colleges</MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/college-1" style={getLinkStyles('/mbbs-abroad/college-1')}>
                  College 1
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/college-2" style={getLinkStyles('/mbbs-abroad/college-2')}>
                  College 2
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={menuItemStyles}>
                <Link to="/mbbs-abroad/college-3" style={getLinkStyles('/mbbs-abroad/college-3')}>
                  College 3
                </Link>
              </MenuItem>
            </Box>
          </Menu>
          <Link to="/news" style={getLinkStyle('/news')}>
            News
          </Link>
          <Link to="/scholarship" style={getLinkStyle('/scholarship')}>
            Scholarship
          </Link>
          <Link to="/admission-apply" style={getLinkStyle('/admission-apply')}>
            Admission/Apply
          </Link>
          <Link to="/portfolio" style={getLinkStyle('/admission-apply')}>
            Portfolio
          </Link>
          <Link to="/contact" style={getLinkStyle('/contact')}>
            Contact Us
          </Link>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setAnchorEl(null)}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#1f1f25' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
