// IMPORTS =======================================================//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS ====================================================//  
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';

// STYLES ========================================================//
import './styles/main.scss';

// RENDER APPLICATION ============================================//
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
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
} else {
  console.error('Root element not found');
}
// END OF APPLICATION RENDER =====================================//