import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home  from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import Footer from "./components/footer/Footer"
import Cursor from './components/cursor/Cursor';

function App() {

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
