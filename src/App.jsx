
  import { Routes, Route, Link } from 'react-router-dom';
import Home from './landing_page/Home';
import About from './landing_page/About';
import Contact from './landing_page/Contact';
import Navbar from './landing_page/Navbar';
 import Footer from './landing_page/Footer';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer />
    </>
  );
}

export default App;
