import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Country from "../pages/Countries";
import Contact from "../pages/contact";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react"; // Import useState for toggle functionality
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <>
      <Router>
        <nav className="navbar">
          <h1>Logo</h1>
          
          {/* Hamburger menu icon */}
          <div className="hamburger" onClick={toggleMenu}>
           {isMenuOpen?<RxCross1 />:<CiMenuBurger />}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/About" onClick={() => setIsMenuOpen(false)}>About-us</Link>
            </li>
            <li>
              <Link to="/Country" onClick={() => setIsMenuOpen(false)}>Country</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Country" element={<Country />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
