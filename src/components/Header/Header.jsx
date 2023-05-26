import React, { useState } from "react";
import "./Header.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "about") {
      return <About />;
    } else if (currentPage === "projects") {
      return <Projects />;
    } else if (currentPage === "contact") {
      return <Contact />;
    }
  };

  const handleNavItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="Header">
        <span className="logo">DAVIS OBARE</span>
        <ul className="nav-menu">
          <li className={currentPage === "home" ? "active" : ""}>
            <a href="#!" onClick={() => handleNavItemClick("home")}>
              HOME
            </a>
          </li>
          <li className={currentPage === "about" ? "active" : ""}>
            <a href="#!" onClick={() => handleNavItemClick("about")}>
              ABOUT
            </a>
          </li>
          <li className={currentPage === "projects" ? "active" : ""}>
            <a href="#!" onClick={() => handleNavItemClick("projects")}>
              PROJECTS
            </a>
          </li>
          <li className={currentPage === "contact" ? "active" : ""}>
            <a href="#!" onClick={() => handleNavItemClick("contact")}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="Body">{renderPage()}</div>
    </div>
  );
};

export default Header;
