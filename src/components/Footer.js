// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../props/logo.png';
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', color: '#333', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="centre" alignItems="flex-start">
          {/* Logo Section */}
          <Grid item xs={12} md={3} align="center">
            <img className='w-[161px], h-[125px]' src={logo} />{/* Replace with an image if available */}

          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3} justifyContent="space-between" >
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '18.84px',
              lineHeight: '27.22px',
              fontWeight: '600',
              marginBottom: '10px',
              color: 'rgba(14, 35, 104, 1)',

            }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)',



            }}  >
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)'

            }}  >example2020@gmail.com</Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)'

            }}  >(904) 443-0343</Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={3} justifyContent="center">
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '18.84px',
              lineHeight: '27.22px',
              fontWeight: '600',
              marginBottom: '10px',
              color: 'rgba(14, 35, 104, 1)',

            }}>
              More
            </Typography>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 0.5 ,fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)'}}>
              About Us
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 0.5,fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)' }}>
              Products
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 0.5,fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)' }}>
              Career
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block' ,fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '14.66px',
              lineHeight: '23.03px',
              fontWeight: '400',
              marginBottom: '10px',
              color: ' rgba(100, 104, 116, 1)'}}>
              Contact Us
            </Link>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3} align="center">
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: 'Source Sans Pro, sans-serif',
              fontSize: '18.84px',
              lineHeight: '27.22px',
              fontWeight: '600',
              marginBottom: '10px',
              color: 'rgba(14, 35, 104, 1)',

            }}>
              Social Links
            </Typography>
            <IconButton color="primary" href="https://instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" href="https://twitter.com">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={4} align="center">
          <Typography variant="body2" color="textSecondary">
            © 2024 Food Truck Example
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
