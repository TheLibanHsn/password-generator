import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <p>© 2023</p>
      <a
        className="social-icon-link twitter"
        href="https://twitter.com/thelibanhsn"
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <FaTwitter className="twitter-icon" />
      </a>
      <a
        className="social-icon-link linkedin"
        href="https://www.linkedin.com/in/thelibanhsn"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="linkedin-icon" />
      </a>
    </footer>
  );
}

export default Footer;
