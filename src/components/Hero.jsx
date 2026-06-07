import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfilePic from "../assets/images/chinedu.jpg";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    icon: faGithub,
    url: "https://github.com/chinedu-daniel/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/chinedu-daniel-precious-a96101310/",
  },
  {
    icon: faTwitter,
    url: "https://x.com/Chinedu_PD",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/chinedu_daniel/",
  },
];

const cv =
  "https://docs.google.com/document/d/1v3SamM9zFGcI1kTI6f3z6tUl_GmXp69b8eT3ySvrALk/edit?usp=sharing";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <div className="hero-text">
          <span>Hello, I'm </span>
          <h1 className="hero-name">Chinedu Daniel</h1>
          <h3 className="hero-title">SOFTWARE ENGINEER</h3>
          <p className="hero-description">
            I build fast, scalable and modern web applications.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="view-work-btn">
              View My Work <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>

          <a href={cv} target="_blank">
            <button className="download-btn">
              Download CV <FontAwesomeIcon icon={faDownload} />
            </button>
          </a>
        </div>

        <div className="hero-social-links">
          {links.map((link, index) => (
            <a href={link.url} target="_blank" key={index}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </section>
  );
};

export default Hero;
