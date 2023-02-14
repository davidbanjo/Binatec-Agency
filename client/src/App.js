import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home  from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
    </>
  );
}

export default App;
