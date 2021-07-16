import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="footer_logo_venue">The Venue</div>
        <div className="footer_copyright">Nancy {year}</div>
      </Fade>
    </footer>
  );
};

export default Footer;
