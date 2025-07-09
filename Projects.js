
import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerceImg from "./assets/CB.jpg";
import taskImg from "./assets/WB.jpg";
import dashboardImg from "./assets/APP.jpg";
import "./App.css";

const Projects = () => {
  const projectData = [
    {
      image: ecommerceImg,
      title: "Web Crawler",
      desc: "Develops a tool which can crawl on provided application URL",
      techs: ["Python", "Java", "Scrapy"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      image: taskImg,
      title: "Task Management App",
      desc: "Responsive mobile-first application with real-time updates",
      techs: ["React Native", "Firebase", "Redux"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      image: dashboardImg,
      title: "Portfolio Website",
      desc: "Interactive dashboard to view a portfolio",
      techs: ["HTML", "CSS", "JavaScript", "React"],
      codeLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="pro">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container">
        {projectData.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;