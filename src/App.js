// // src/App.js
// import React from 'react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './theme';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import ArticlesSection from './components/ArticlesSection';
// import Footer from './components/Footer';
// import "./index.css";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
     
//       <HeroSection />
//       <AboutSection />
//       <ArticlesSection />
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Adds vertical spacing */}
        <HeroSection />
      
      
      <div className="mt-[10rem]">
        <AboutSection />
      </div>
      
      <div className="my-8 mb-40">
        <ArticlesSection />
      </div>
      
      <div className="my-8">
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;
