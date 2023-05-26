import React from "react";
import "./Home.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="introduction">
        <div className="text">
          <h1>Welcome to My Frontend Portfolio</h1>
          <p>
            I'm Davis Obare, a passionate frontend engineer with expertise in
            modern web technologies. I love creating user-friendly and visually
            appealing interfaces.
          </p>
        </div>
        <div className="image">
          <img src="/images/img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
