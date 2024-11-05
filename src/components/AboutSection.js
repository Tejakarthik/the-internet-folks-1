// // // src/components/AboutSection.js
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import spoon from '../props/spoon.png';

// const AboutSection = () => {
//   return (
//     <div
//       className="w-full h-[467px] my-50 flex justify-around"
//       style={{
//         background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
//       }}
//     >
//       <Box display="flex" flexDirection="row" justifyContent="space-between">
//         <Box
//           sx={{
//             flex: 1,
//             overflow: 'hidden',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         >
//           <img className="w-[384px] h-[468px] object-fill" src={spoon} alt="About Us" />
//         </Box>

//         {/* Right Box with Inner Content Box */}
//         <Box
//           sx={{
//             flex: 1,
//             ml: 18,
//             display: 'flex',
//             justifyContent: 'center', // Center the inner box vertically 
//             alignItems: 'center'  // Align inner box to start horizontally
//           }}
//         >
//           {/* Inner Box with Fixed Dimensions */}
//           <Box
//             sx={{
//               width: '447px',
//               height: '254px',
//               display: 'flex',
//               flexDirection: 'column',


//               padding: '1rem' // Optional padding for spacing within the inner box
//             }}
//           >
//             <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '45px', fontWeight: '600', lineHeight: '27px' }} color='primary' gutterBottom>
//               About Us
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: 'Open Sans, sans-serif',
//                 fontSize: '15px',
//                 fontWeight: '400',
//                 lineHeight: '27px',
//                 marginTop:'10px',

//               }} color="text.secondary" paragraph>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
//             </Typography>
//             <Button
//               variant="contained"
//               color="secondary"
//               size="small"
//               sx={{
//                 borderRadius: '50px',
//                 fontFamily: 'Open Sans, sans-serif',
//                 marginTop: '10px',
//                 padding: '14px 34px',
//                 width: '160px',
//                 height: '43px',
//                 fontWeight: '700',
//                 fontSize: '13px'
//               }}>
//               Read More
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </div >
//   );
// };

// export default AboutSection;



import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import spoon from '../props/spoon.png';

const AboutSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '467px',
        my: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
        px: { xs: 2, md: 5 }, // Padding for responsiveness
      }}
    >
      {/* Left Box with Image - Hidden on Mobile */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on md and up
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={spoon}
          alt="About Us"
          style={{
            width: '384px',
            height: '468px',
            objectFit: 'cover'
          }}
        />
      </Box>

      {/* Right Box with About Us Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, md: 0 }
        }}
      >
        <Box
          sx={{
            maxWidth: '447px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '30px', md: '45px' },
              fontWeight: '600',
              lineHeight: '1.2',
            }}
            color="primary"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '27px',
              mt: 1,
              color: 'text.secondary'
            }}
            paragraph
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              borderRadius: '50px',
              fontFamily: 'Open Sans, sans-serif',
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: '700',
              fontSize: '13px'
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;

