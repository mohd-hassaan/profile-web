import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Google, LinkedIn, Instagram, Pinterest, Email } from '@mui/icons-material';

const socialIcons = [
  { icon: <Facebook />, label: 'Facebook', href: 'https://facebook.com' },
  { icon: <Twitter />, label: 'Twitter', href: 'https://twitter.com' },
  { icon: <Google />, label: 'Google+', href: 'https://plus.google.com' },
  { icon: <LinkedIn />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <Pinterest />, label: 'Pinterest', href: 'https://pinterest.com' },
];

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#333', color: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container display={"flex"} justifyContent={"space-between"}>
          {/* Left Column: Quick Links */}
          <Grid item >
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box>
              <Typography variant="body1" component="a" href="#branches" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Our Branches</Typography>
              <Typography variant="body1" component="a" href="#events" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Events</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              <Typography variant="body1" component="a" href="#contact" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Contact</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              
            </Box>
          </Grid>

           {/* Left Column: Quick Links */}
           <Grid item >
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box>
              <Typography variant="body1" component="a" href="#branches" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Our Branches</Typography>
              <Typography variant="body1" component="a" href="#events" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Events</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              <Typography variant="body1" component="a" href="#contact" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Contact</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              
            </Box>
          </Grid>

           {/* Left Column: Quick Links */}
           <Grid item >
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box>
              <Typography variant="body1" component="a" href="#branches" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Our Branches</Typography>
              <Typography variant="body1" component="a" href="#events" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Events</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              <Typography variant="body1" component="a" href="#contact" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Contact</Typography>
              <Typography variant="body1" component="a" href="#about" sx={{ display: 'block', mb: 1, color: '#bbb' }}>About Us</Typography>
              <Typography variant="body1" component="a" href="#careers" sx={{ display: 'block', mb: 1, color: '#bbb' }}>Careers</Typography>
              
            </Box>
          </Grid>

          {/* Right Column: Newsletter */}
          <Grid item >
            <Typography variant="h6" gutterBottom>Newsletter</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email />
              <Typography variant="body1" sx={{ color: '#bbb' }}>
                Stay updated with our latest news and offers.
              </Typography>
            </Box>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
              <TextField 
                label="Email Address" 
                variant="outlined" 
                fullWidth 
                sx={{ mb: 2, backgroundColor: '#444', borderRadius: '4px', input: { color: '#fff' } }} 
              />
              <TextField 
                label="Mobile Number" 
                variant="outlined" 
                fullWidth 
                sx={{ mb: 2, backgroundColor: '#444', borderRadius: '4px', input: { color: '#fff' } }} 
              />
              <Button variant="contained" color="primary">Subscribe Now</Button>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, borderTop: '1px solid #555', pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: '#bbb' }}>
            Copyright © 2024 Your Company. All Rights Reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialIcons.map(({ icon, label, href }) => (
              <IconButton 
                key={label} 
                component="a" 
                href={href} 
                target="_blank" 
                aria-label={label} 
                sx={{ color: '#fff', backgroundColor: '#444', '&:hover': { backgroundColor: '#555' } }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>

          <Box>
            <img src="path/to/company-logo.png" alt="Company Logo" style={{ maxHeight: '40px' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
