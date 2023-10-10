import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";
import Button from "@mui/material/Button";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Muhammad Rafiq</h1>
          <p>
            I'm{" "}
            <span>
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "UX/UI Designer",
                    "UX Researcher",
                    "UI Designer",
                    "Visual Designer",
                    "Interaction Designer",
                    "Motion/Animation Designer",
                    "Product Designer",
                    "Figma Expert",
                    "Adobe XD Expert",
                    "Illustration",
                    "Sketch",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="social-links">
            <Link to="https://twitter.com/Muhamma08970093"   target="_blank" className="twitter">
              <FaTwitter className="social-media-icon" />
            </Link>
            <Link
              to="https://www.facebook.com/sameer.lahari.1"
              className="facebook"
              target="_blank"
            >
              <FaFacebook className="social-media-icon" />
            </Link>
            <Link
              to="https://github.com/muhammadrafiq704"
              className="google-plus"
              target="_blank"
            >
              <FaGithub className="social-media-icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/muhammad-rafiq-337747231/"
              className="linkedin"
              target="_blank"
            >
              <FaLinkedin className="social-media-icon" />
            </Link>
            <Link
              to="https://www.behance.net/muhammadrafiq30"
              className="Behance"
              target="_blank"
            >
              <FaBehance className="social-media-icon" />
            </Link>
            <Link to="" className="Behance" target="_blank">
              <FaWhatsapp className="social-media-icon" />
            </Link>
            <Link to="" className="Behance" target="_blank">
              <FaInstagram className="social-media-icon" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1-9J994iVC4F-Iqk8RPNY-XqOBMlqqMvF/view?usp=drive_link"
              target="_blank"
              download="your-resume.pdf" // Add the "download" attribute with the desired file name
              className="greenBtn"
              rel="noreferrer"
            >
              <Button variant="contained">Download Resume</Button>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
