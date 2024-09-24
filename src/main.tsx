// IMPORTS =======================================================//
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS ====================================================//  

import Header from './layouts/Header';
import Footer from './layouts/Footer';

// PAGES =========================================================//
import Home from './pages/Home';

// STYLES ========================================================//
import './styles/main.scss';

// RENDER APPLICATION ============================================//
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

// END OF APPLICATION RENDER =====================================//