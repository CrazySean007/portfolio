import React from "react";
import MainVideo from "../../components/MainVideo/Mainvideo";
import "./Home.css";

function Home() {
  return (
    <div>
      <MainVideo />
      <div className="main-content">
        <div className="left-part">
          <p className="sim_intro">
            An Explorer, An Adventurer, A Fullstack Software Engineer to
            constantly discover new areas and unknowns
          </p>
          <p className="cla_intro">
            <i className="fas fa-angle-double-right"></i>
            &nbsp;&nbsp;.NET CORE/RESTFUL API DESIGN/CSS/REACT/CSS/HTML designer
            & learner
          </p>
        </div>
        <div className="right-part">
          <img src="/images/myself.jpg" alt="" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Home;
