import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="container">
          <h3>Muhammad Rafiq</h3>
          <p>
            Get in touch with me with a one click from the following below channels.
            I am excited to meet you, listen your problems and providing solutions for them
          </p>
          <div className="social-links">
            <a href="https://twitter.com/Muhamma08970093" className="twitter">
            <FaTwitter className="social-media-icon" />
            </a>
            <a href="https://www.facebook.com/sameer.lahari.1" className="facebook">
            <FaFacebook className="social-media-icon" />
            </a>
            <a href="https://www.behance.net/muhammadrafiq30" className="Behance">
            <FaBehance className="social-media-icon" />
            </a>
            <a href="https://github.com/muhammadrafiq704" className="Github">
            <FaGithub className="social-media-icon" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rafiq-337747231/" className="linkedin">
            <FaLinkedin className="social-media-icon" />
            </a>
            <a href="" className="linkedin">
            <FaWhatsapp className="social-media-icon" />
            </a>
            <a href="" className="linkedin">
            <FaInstagram className="social-media-icon" />
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>MyPortfolio</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://www.linkedin.com/in/muhammad-rafiq-337747231/">Muhammad Rafiq</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
