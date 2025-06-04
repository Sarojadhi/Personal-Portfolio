
  import { Routes, Route, Link } from 'react-router-dom';
import Home from './landing_page/Home';
import About from './landing_page/About';
import Contact from './landing_page/Contact';
 

function App() {
  return (
    <>
    <Link to="/Logo">LOGO</Link>
      <Link to="/">HOME</Link>
      <Link to ="/About">About</Link>
      <Link to ="/Contact">Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;
