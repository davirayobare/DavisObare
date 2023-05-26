import React from "react";
const Projects = () => {
  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Redux</li>
          <li>Responsive Web Design</li>
          <li>Git</li>
          <li>UI/UX Design</li>
        </ul>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: E-commerce Website</h3>
          <p>
            A fully functional e-commerce website built with React and Redux.
            Users can browse products, add them to the cart, and proceed to
            checkout.
          </p>
          <a href="https://github.com/example/project1">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 2: Portfolio Website</h3>
          <p>
            My personal portfolio website showcasing my skills, projects, and
            experience. Built with HTML, CSS, and JavaScript.
          </p>
          <a href="https://www.johndoeportfolio.com">Visit Website</a>
        </div>
        {/* Add more projects */}
      </div>

      <div className="experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Frontend Engineer at ABC Company</h3>
          <p>
            Led frontend development for client projects using React framework.
            Collaborated with designers and backend developers to deliver
            high-quality web applications.
          </p>
        </div>
        {/* Add more work experience */}
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="degree">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>XYZ University</p>
        </div>
        {/* Add more education details */}
      </div>

      <div className="blog">
        <h2>Technical Blog</h2>
        <div className="article">
          <h3>10 Essential CSS Tips and Tricks</h3>
          <p>
            In this article, I share useful CSS tips and tricks to enhance your
            frontend development workflow and create better designs.
          </p>
          <a href="https://www.exampleblog.com/essential-css-tips">
            Read Article
          </a>
        </div>

        {/* Add more blog articles */}
      </div>
    </>
  );
};
export default Projects;
