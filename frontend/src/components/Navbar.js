import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  let location = useLocation();
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: '70px', marginRight: '10px' }} />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="navbar-collapse navbar-light" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> {/* Centering and equal spacing */}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                About Us
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/telebot">
                    AI Doctor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/summary">
                    Report Summarizer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hospital">
                    Nearest Clinic
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`} to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Login and Sign Up Buttons */}
          <div className="d-flex">
            <Link className="btn btn-primary mx-2 my-0" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-2 my-0" to="/signup" role="button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
