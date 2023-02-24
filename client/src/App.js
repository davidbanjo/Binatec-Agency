import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home  from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import Footer from "./components/footer/Footer"
import Cursor from './components/cursor/Cursor';
import Error from './pages/error/Error';

function App() {

  const fixedHeader = document.querySelector(".secondHeaderLevel")

  return (
    <div onScroll={() => {
      if (window.scrollY >= 48) {
            fixedHeader.classList.add("navbarFixed")
            console.log("youre over 48 pixels")
          }
    }}>
      <Navbar />
      <Cursor />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
