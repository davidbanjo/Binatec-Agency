import './App.css';
import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home  from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import Footer from "./components/footer/Footer"
import Cursor from './components/cursor/Cursor';

function App() {

  useEffect(() => {

    const options = {
        damping: 0.01,
        renderByPixels: true,
        alwaysShowTracks	: true
    };

    Scrollbar.init(document.body, options);
}, [])

  return (
    <>
      <Navbar />
      <Cursor />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
