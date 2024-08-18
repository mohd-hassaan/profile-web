import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';

function ContactUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontSize: '60px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', fontFamily: 'Poppins, sans-serif', mb: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </Typography>

          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              sx={{ mb: 4 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f9004d',
                color: '#fff',
                fontWeight: 'bold',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#f9004d',
                  borderColor: '#f9004d',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://via.placeholder.com/600x600"  // Replace this with your actual image URL
            alt="Contact Us"
            sx={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
