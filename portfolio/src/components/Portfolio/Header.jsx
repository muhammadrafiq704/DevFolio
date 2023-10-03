import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome, faFileAlt, faToolbox, faBriefcase, faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <React.Fragment>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
              <FontAwesomeIcon icon={faHome} className="icon" /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link scrollto">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/skill" className="nav-link scrollto">
              <FontAwesomeIcon icon={faCode} className="icon" /> <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link scrollto">
              <FontAwesomeIcon icon={faFileAlt} className="icon" /> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link scrollto">
              <FontAwesomeIcon icon={faBriefcase} className="icon" /> <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link scrollto">
              <FontAwesomeIcon icon={faToolbox} className="icon" /> <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link scrollto">
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
