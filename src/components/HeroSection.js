// import React from 'react';
// import Group1 from '../props/Group1.png';
// import { Box, Typography, Button } from '@mui/material';
// import logo from '../props/logo.png';

// const HeroSection = () => {
//   return (
//     <div className='flex flex-row w-full h-[804px] p-0'>
//       <Box
//         sx={{
//           width: '50%', // Fixed width for the left box
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-start', // Align items to the top
//           padding: '0rem 6rem',
//         }}
//       >
//         <img className='w-[107px] h-[83px] mt-5 mb-[130px]' src={logo} alt="Logo" />

//         {/* Main Heading */}
//         <Typography
//           sx={{
//             fontFamily: 'Source Sans Pro, sans-serif',
//             fontSize: '62px',
//             fontWeight: '700',
//             marginBottom: '36px',
//             lineHeight: '69px',

//           }}
//           color='primary'
//           gutterBottom
//         >
//           Discover the <br />
//           <span className="text-red-500">Best</span> Food <br />
//           and Drinks
//         </Typography>

//         {/* Body Text */}
//         <Typography
//           sx={{
//             fontFamily: 'Open Sans, sans-serif', // Applying body font
//             fontSize: '1rem', // Adjust size as needed
            
//             marginBottom: '0.35em',
//           }} color="text.secondary" paragraph>
//           Naturally made Healthcare Products for the <br /> better care & support of your body.
//         </Typography>

//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           sx={{
//             borderRadius: '50px',
//             fontFamily: 'Open Sans, sans-serif',
//             marginTop: '30px',
//             padding: '14px 34px',
//             width: '190px',
//             height: '63px',
//             fontWeight: '700',
//             fontSize: '16px'
//           }}
//         >
//           Explore Now!
//         </Button>
//       </Box>

//       <Box
//         sx={{
//           width: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative' // Ensure this is relative to position the button
//         }}
//       >
//         <img src={Group1} alt="Pizza" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

//         {/* Transparent Button on Top Right of Image */}
//         <Button
//           variant="outlined" // This gives a border
//           color="inherit" // To inherit the default text color, which can be white
//           sx={{
//             position: 'absolute', // Position the button absolutely
//             top: '32px', // Adjust the position from the top
//             right: '40px', // Adjust the position from the right
//             fontWeight: 700,
//             color: 'white', // Set the text color to white
//             borderColor: 'white', // Set the border color to white
//             backgroundColor: 'transparent', // Make the button transparent
//             borderRadius: '50px',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional hover effect
//             },
//           }}
//         >
//           GET IN TOUCH
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import Group1 from '../props/Group1.png';
import { Box, Typography, Button } from '@mui/material';
import logo from '../props/logo.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        width: '100%',
        height: { xs: 'auto', md: '804px' },
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          padding: { xs: '2rem 1rem', md: '0rem 6rem' },
          mt: { xs: 3, md: 0 },
        }}
      >
        {/* Logo (Hidden on Mobile) */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: '107px',
            height: '83px',
            mt: 5,
            mb: 8,
            display: { xs: 'none', md: 'block' },
          }}
        />
        {/* Main Heading */}
        <Typography
          sx={{
            fontFamily: 'Source Sans Pro, sans-serif',
            fontSize: { xs: '2.5rem', md: '62px' },
            fontWeight: '700',
            lineHeight: { xs: '1.2', md: '69px' },
            mb: '1.5rem',
          }}
          color="primary"
          gutterBottom
        >
          Discover the <br />
          <span style={{ color: 'red' }}>Best</span> Food <br />
          and Drinks
        </Typography>
        {/* Body Text */}
        <Typography
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: { xs: '1.5', md: '1.75' },
            mb: '1rem',
          }}
          color="text.secondary"
          paragraph
        >
          Naturally made Healthcare Products for the <br /> better care & support of your body.
        </Typography>
        {/* Explore Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '50px',
            fontFamily: 'Open Sans, sans-serif',
            mt: '1.5rem',
            px: { xs: 3, md: 4 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: '1rem', md: '16px' },
          }}
        >
          Explore Now!
        </Button>
      </Box>
      {/* Right Section (Image and Transparent Button) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on mobile, half on desktop
          height: { xs: 'auto', md: '100%' }, // Auto height on mobile, full height on desktop
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden', // Prevents white space around the image
        }}
      >
        <img
          src={Group1}
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Transparent Button */}
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            position: 'absolute',
            top: { xs: '16px', md: '32px' },
            right: { xs: '16px', md: '40px' },
            fontWeight: 700,
            color: 'white',
            borderColor: 'white',
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            fontSize: { xs: '0.75rem', md: '1rem' },
            px: { xs: 2, md: 3 },
            py: { xs: 0.5, md: 1 },
          }}
        >
          GET IN TOUCH
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
