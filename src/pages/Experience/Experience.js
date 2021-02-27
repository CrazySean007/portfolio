import React from "react";
import "./Experience.css";
import Card from "../../components/Card/Card";
import MainVideo from "../../components/MainVideo/Mainvideo";

const exps = [
  {
    title: "Frontend Software Engineer",
    company: "@TableFlash Co.",
    description: [
      "Utilize React to implement customer components and restaurant management system",
      "Collaborate with three other engineers and maintain best version practice control using Git",
      "Improve First Meaningful Paint(FMP) time by 30% faster by implementing Lazyload features",
      "Expand user range with switching languages(Chinese and English) feature",
      "Optimize food order logic by designing new order flows and UI patterns",
      "Reform Log in/Sign up workflows with new UI and client-side encryption of password",
      "Provide succinct and pretty home page UI by implementing two-column masonry to display restaurant deals",
    ],
    start: "Aug 2020",
    end: "Dec 2020",
    imgs: ["/images/tableflash-1.png", "/images/tableflash-2.png"],
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
    imgs: ["/images/mall-1.png", "/images/mall-2.png"],
  },
  {
    title: "Simple Search Engine for LA Times",
    company: "@school project",
    description: [
      "Implemented a simple search engine backend and frontend using JavaScript and PHP",
      "Build the search engine based on Apache Solr, crawl over 20,000 pages from LA Times and index the crawled pages for searching engines",
      "Improve the ranking results by applying PageRank algorithm and compared with the results from Solr default ranks",
    ],
    start: "Jan 2020",
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
    end: "Sept 2019",
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
