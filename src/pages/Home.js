import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import NewsSection from './News';
import Footer from './Footer';

function Home() {
  const items = [
    {
      name: "Random Image 1",
      description: "This is a description",
      image: "https://i.ytimg.com/vi/CW_VEUQ0Lg0/maxresdefault.jpg"
    },
    {
      name: "Random Image 2",
      description: "This is a description",
      image: "https://i.ytimg.com/vi/NtjFnqYKhKs/maxresdefault.jpg"
    },
    {
        name: "Random Image 1",
        description: "This is a description",
        image: "https://i.ytimg.com/vi/CW_VEUQ0Lg0/maxresdefault.jpg"  
    },
      {
        name: "Random Image 2",
        description: "This is a description",
        image: "https://static.vecteezy.com/system/resources/previews/000/381/921/original/abstract-technology-banner-template-vector.jpg"
      },
  ];

  const testimonials = [
    
    {
      name: "John Doe",
      year: "2023",
      testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jane Smith",
      year: "2022",
      testimony: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Robert Brown",
      year: "2021",
      testimony: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <Box 
    sx={{
      width: '98vw',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}
  >
      {/* Carousel Section */}
      <Carousel
        animation="slide"
        interval={2000}
        duration={500}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            style={{
              height: '100vh',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </Box>
        ))}
      </Carousel>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
              }}
              src="https://via.placeholder.com/500x700"
              alt="About Us"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" gutterBottom>
              Who we are - What we do
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Carousel
          animation="slide"
          interval={3000}
          duration={500}
        >
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              sx={{
                p: 3,
                m: 2,
                width: '300px', // Set a fixed width for the cards
                height: '450px', // Set a fixed height for vertical rectangles
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <CardContent>
                <Typography variant="body1" align="center" gutterBottom>
                  {testimonial.testimony}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  - {testimonial.name}, {testimonial.year}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 8, position: 'relative', backgroundColor: '#f5f5f5', padding: '40px 20px', borderRadius: '15px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Carousel
          animation="slide"
          interval={3000}
          duration={500}
          indicators={false} // Disable dots
          navButtonsAlwaysVisible={true} // Always show navigation buttons
        >
          {testimonials.map((testimonial, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Left Card */}
              {i > 0 && (
                <Card
                  sx={{
                    p: 2,
                    width: '200px',
                    height: '350px',
                    opacity: 0.5,
                    position: 'absolute',
                    left: 0,
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  }}
                >
                  <Avatar
                    alt={testimonials[i - 1].name}
                    src={testimonials[i - 1].image}
                    sx={{ width: 70, height: 70, mb: 2 }}
                  />
                  <CardContent>
                    <Typography variant="body2" align="center">
                      - {testimonials[i - 1].name}, {testimonials[i - 1].year}
                    </Typography>
                  </CardContent>
                </Card>
              )}

              {/* Middle Card */}
              <Card
                sx={{
                  p: 3,
                  width: '300px',
                  height: '450px',
                  transition: 'transform 0.3s ease-in-out',
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  zIndex: 2,
                }}
              >
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <CardContent>
                  <Typography variant="body1" align="center" gutterBottom>
                    {testimonial.testimony}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    - {testimonial.name}, {testimonial.year}
                  </Typography>
                </CardContent>
              </Card>

              {/* Right Card */}
              {i < testimonials.length - 1 && (
                <Card
                  sx={{
                    p: 2,
                    width: '200px',
                    height: '350px',
                    opacity: 0.5,
                    position: 'absolute',
                    right: 0,
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  }}
                >
                  <Avatar
                    alt={testimonials[i + 1].name}
                    src={testimonials[i + 1].image}
                    sx={{ width: 70, height: 70, mb: 2 }}
                  />
                  <CardContent>
                    <Typography variant="body2" align="center">
                      - {testimonials[i + 1].name}, {testimonials[i + 1].year}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          ))}
        </Carousel>
      </Container>

        <NewsSection />

        {/* <Footer /> */}
      
    </Box>
  );
}

export default Home;
