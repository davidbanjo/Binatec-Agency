import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home  from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
        </Routes>
    </>
  );
}

export default App;
