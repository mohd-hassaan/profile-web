import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WebIcon from '@mui/icons-material/Web';

function Services() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              padding: 2,
              color: 'text.secondary',
              fontFamily: 'sans-serif',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#ff3366',
                color: '#fff',
                '.MuiSvgIcon-root': {
                  color: '#fff',
                },
              },
            }}
          >
            <CardContent>
              <BusinessIcon sx={{ fontSize: 40, color: '#000', transition: 'color 0.3s' }} />
              <Typography variant="h6" component="div">
                Business Strategy
              </Typography>
              <Typography variant="body2">
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              padding: 2,
              color: 'text.secondary',
              fontFamily: 'sans-serif',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#ff3366',
                color: '#fff',
                '.MuiSvgIcon-root': {
                  color: '#fff',
                },
              },
            }}
          >
            <CardContent>
              <WebIcon sx={{ fontSize: 40, color: '#000', transition: 'color 0.3s' }} />
              <Typography variant="h6" component="div">
                Website Development
              </Typography>
              <Typography variant="body2" color="textSecondary">
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              textAlign: 'center',
              padding: 2,
              color: 'text.secondary',
              fontFamily: 'sans-serif',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#ff3366',
                color: '#fff',
                '.MuiSvgIcon-root': {
                  color: '#fff',
                },
              },
            }}
          >
            <CardContent>
              <WebIcon sx={{ fontSize: 40, color: '#000', transition: 'color 0.3s' }} />
              <Typography variant="h6" component="div">
                Website Development
              </Typography>
              <Typography variant="body2" color="textSecondary">
                I throw myself down among the tall grass by the stream as I lie close to the earth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
     
      </Grid>
    </Box>
  );
}

export default Services;
