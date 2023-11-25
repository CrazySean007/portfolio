import "./Contact.css";
import React from "react";
import MainVideo from "../../components/MainVideo/Mainvideo";

function Contact() {
  return (
    <div className="contact">
      <MainVideo />
      <div className="main_part">
        <h1 className="contact_title">
          <a
            href="mailto:ms9632@outlook.com"
            style={{ textDecoration: "underline" }}
          >
            ms9632@outlook.com
          </a>
        </h1>
        <p className="contact_me">
          You can also find me on{" "}
          <a
            target="_"
            href="https://www.linkedin.com/in/shuama0302/"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
