import { faBriefcase, faGraduationCap, faLocationArrow, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section" id="about">
      <div className="about-text-container">
        <div className="about-text">
          <span>About Me </span>
          {/* <h1 className="about-name">About Me</h1> */}
          <p className="about-description">
            I’m a Full Stack Developer passionate about building <br /> complete web
            experiences from intuitive front-end interfaces <br /> to robust backend
            systems and deployed cloud solutions. <br />
            I enjoy turning ideas into real-world products that are user-friendly.
          </p>

          {showMore && (
            <p className="about-description">
              With over 2 years of experience, I have a strong foundation in both <br />
              front-end and back-end development. I have worked on various projects, <br />
              ranging from small business websites to complex web applications. I am <br />
              proficient in technologies such as React, Node.js, Express, and MongoDB. 
            </p>
          )}
        </div>

        <div className="about-buttons">
          <button className="read-more-btn" onClick={() => {setShowMore(!showMore)}}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
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
