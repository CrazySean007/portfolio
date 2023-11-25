import React from "react";
import "./Experience.css";
import Card from "../../components/Card/Card";
import MainVideo from "../../components/MainVideo/Mainvideo";

const exps = [
  {
    title: "Fullstack Software Engineer",
    company: "@Life Alert Emergency Response, Inc.",
    description: [
      "Led the migration of over 10 legacy components, transitioning from AngularJS and Windows Form to Angular 10 and .NET Core API",
      "Designed and executed a comprehensive migration program, transitioning AT&T text service from SOAP to Rest API. This endeavor notably enhanced system stability and maintainability while optimizing integration processes",
      "Pioneered an 80% efficiency boost for dispatch trainers by developing and implementing a Training Classroom and Admin training log with WebSocket, providing interactive training sessions and real-time feedback mechanisms",
      "Streamline workflow for Billing, Shipping and Main Office departments by creating Shipping Charge Monitor and developing corresponding API with .Net Core",
      "Implemented test-driven development methodologies while crafting a parking management system, resulting in a significant 50% increase in management efficiency",
      "Develop SQL scripts to handle user requests on database records",
    ],
    start: "Apr 2021",
    end: "Present",
    img: "/images/lifealert.jpg",
  },
  {
    title: "Frontend Software Engineer",
    company: "@TableFlash Co.",
    description: [
      "Collaborated with a team of three engineers to implement customer components and develop a restaurant management system using React",
      "Achieved a 30% improvement in First Meaningful Paint (FMP) time by implementing Lazyload component",
      "Expanded user accessibility by introducing language-switching capabilities (Chinese and English) to enhance the platform's global reach",
      "Enhanced the efficiency of food ordering processes by designing and implementing new order flows and UI patterns. Streamlined the user experience to facilitate smoother navigation and improved order placement.",
      "Reformed Log in/Sign up workflows with rediengined UI and client-side encryption of password",
      "Created an aesthetically pleasing and user-friendly home page UI by implementing a two-column masonry layout to showcase restaurant deals succinctly and attractively",
    ],
    start: "Aug 2020",
    end: "Dec 2020",
    img: "/images/tableflash-1.png",
  },
  {
    title: "Online shopping mall management system",
    company: "@project leader",
    description: [
      "Implemented a comprehensive management system using React and Ant Design to display and manage users, products, access and categories information",
      "Fetch weather information from Dark Sky API(https://api.forecast.io/forecast) and display in user status navigation part with a small icon",
      "Provide access control with different levels of access right management",
    ],
    start: "Jun 2020",
    end: "Jul 2020",
    img: "/images/mall-1.png",
  },
  {
    title: "Weather Forecast Application based on Angular",
    company: "@school project",
    description: [
      "Build a responsive weather forecast website based on Angular8 and Bootstrap which allows users to look up information about weather, temperature, wind speed, etc. within a week.",
      "Support IP-based and input-based lookup for weather conditions with Geolocation API and Weather API",
      "Improve UX by performing auto-complete for city name input based on Google city auto-complete API",
      "Launch a scalable web service using node.js to handle requests and process the JSON-format data returned",
    ],
    start: "Sept 2019",
  },
];

// const colors = [
//   "rgba(244, 67, 54, 0.7)",
//   "rgba(247, 212, 0, 0.9)",
//   "rgba(11, 169, 217, 0.7)",
// ];

function Experience() {
  return (
    <div className="experience">
      <MainVideo />
      <div className="content">
        {exps.map((exp) => {
          return (
            <Card img={exp.img} key={exp.title}>
              <div className="exp_card">
                <div className="title">{exp.title}</div>
                <div className="sub-title">{exp.company}</div>
                <div className="sub-title">
                  {exp.start + (exp.end ? "--" + exp.end : "")}
                </div>
                <div className="description">
                  <ul>
                    {exp.description.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
