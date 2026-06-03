import React from "react";

const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Skills",
    link: "/skills",
  },
  {
    name: "Contacts",
    link: "/contacts",
  },
];

const Footer = () => {
  return (
    <section className="footer-section">
      <p>&copy; 2026 <span>Chinedu Daniel</span>. All rights reserved.</p>

      <div className="footer-links">
        {navlinks.map((navlink, index) => (
          <a href={navlink.link} key={index}>
            {navlink.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
