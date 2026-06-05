import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pic from "../assets/images/ken.png";

const projects = [
    {
        image: pic,
        title: "Real Estate App",
        description: "A modern real estate application for buying and selling properties.",
        value: "Web Development",
    },
    {
        image: pic,
        title: "Real Estate App",
        description: "A modern real estate application for buying and selling properties.",
        value: "Web Development",
    },
    {
        image: pic,
        title: "Real Estate App",
        description: "A modern real estate application for buying and selling properties.",
        value: "Web Development",
    },
]

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-text-container">
        <div className="project-text">
          <span>My Work </span>
          <h1 className="project-name">Projects</h1>
        </div>

        <div className="project-span">
          <span>
            View All Projects <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((item, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={item.image} alt="project image" />
            </div>

            <div className="project-info">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>
                <p className="project-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
