import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_title">
        To discuss projects or opportunities get in touch at{" "}
        <a
          href="mailto:ms9632@outlook.com"
          style={{ textDecoration: "underline", color: "lightblue" }}
        >
          ms9632@outlook.com
        </a>
      </div>
      <div className="contact_icons">
        Or contact me with:{" "}
        <a
          href="https://github.com/CrazySean007"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ fontSize: "2rem" }}></i>
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/shuama0302/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" style={{ fontSize: "2rem" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
