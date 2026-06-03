import { faBriefcase, faGraduationCap, faLocationArrow, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const info = [
    {
        icon: faUser,
        title: "Experience",
        value: "2+ Years"
    },
    {
        icon: faGraduationCap,
        title: "Education",
        value: "B.Sc. Biotechnology"
    },
    {
        icon: faBriefcase,
        title: "Projects",
        value:"10+ Completed"
    },
    {
        icon: faLocationDot,
        title: "Location",
        value: "Lagos"
    }
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text-container">
        <div className="about-text">
          <span>About Me </span>
          <h1 className="about-name">About Me</h1>
          <p className="about-description">
            I’m a Full Stack Developer passionate about building <br /> complete web
            experiences from intuitive front-end interfaces <br /> to robust backend
            systems and deployed cloud solutions. <br />
            I enjoy turning ideas into real-world products that are user-friendly.
          </p>
        </div>

        <div className="about-buttons">
          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      <div className="about-grid">
        {info.map((item, index) => (
            <div key={index} className="about-card">
                <div className="about-icon">
                    <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.value}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default About;
