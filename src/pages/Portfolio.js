import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, Button } from '@mui/material';

const portfolioItems = [
  {
    title: "Getting tickets to the big show",
    category: "Development",
    image: "https://via.placeholder.com/300x200", // Replace with your actual image URLs
  },
  {
    title: "Getting tickets to the big show",
    category: "Development",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Getting tickets to the big show",
    category: "Development",
    image: "https://via.placeholder.com/300x200",
  },
];

const PortfolioPage = () => {
  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Portfolio
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </Typography>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 200 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="overline" display="block">
                  {item.category}
                </Typography>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Button variant="outlined">CASE STUDY</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
