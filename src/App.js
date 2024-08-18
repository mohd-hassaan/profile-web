import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './pages/Footer';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles.css';
import PortfolioPage from './pages/Portfolio';
import ContactUs from './pages/ContactUs';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          key={location.key}  // Ensure the transition is keyed by the route
          classNames="slide"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
}

export default App;
