import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const newsItems = [
    {
      title: "Breaking News 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Latest Update 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Tech News 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Industry Insight 4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://via.placeholder.com/150"
    }
  ];

function NewsSection() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f4f4f4' }}>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          News
        </Typography>
        <Carousel
          animation="slide"
          interval={3000}
          duration={500}
          navButtonsAlwaysVisible
          indicators={false}
          
        >
          {newsItems.map((news, i) => (
            <Card
              key={i}
              sx={{
                p: 2,
                m: 2,
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '250px',
                transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: '250px', 
                  height: 'auto', 
                  objectFit: 'cover', 
                  borderRadius: '16px 0 0 16px' 
                }}
                image={news.image}
                alt={news.title}
              />
              <CardContent 
                sx={{ 
                  flex: '1 0 auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  borderRadius: '0 16px 16px 0' 
                }}
              >
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default NewsSection;
