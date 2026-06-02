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

const Hero = () => {
  return (
    <section>
      <div>
        <div className="hero-text">
          <span>Hello, I'm </span>
          <h1>Chinedu Daniel</h1>
          <h3>SOFTWARE ENGINEER</h3>
          <p>
            A Full-Stack Developer who builds fast, scalable, <br /> and modern
            web applications with a focus on clean UI, <br /> solid backend
            systems, and cloud-ready deployments.
          </p>
        </div>

        <div>
          <button>
            View My Work <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <button>
            Document CV <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div>
          <a href="https://github.com/chinedu-daniel/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/chinedu-daniel-precious-a96101310/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/Chinedu_PD">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/chinedu_daniel/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div>
        <img src={ProfilePic} alt="profile picture" />
      </div>
    </section>
  );
};

export default Hero;
