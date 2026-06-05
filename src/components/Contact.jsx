import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contacts">
      <div className="contact-container">
        <div className="contact-text">
          <span>Contact</span>
          <h1 className="contact-name">Let's Work Together</h1>
          <p className="contact-description">
            Have a project in mind or just want to say hi? Feel free to reach
            out! <br /> I'm always open to discussing new opportunities,
            collaborations, or <br /> just connecting with like-minded individuals.
          </p>
        </div>

        <div className="contact-buttons">
          <button className="contact-btn">Get In Touch <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
