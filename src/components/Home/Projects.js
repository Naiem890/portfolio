import React from "react";
import Project from "./Project";
import ProjectImg2 from "./../../images/project-2.png";
import ProjectImg1 from "./../../images/project-1.png";

const Projects = () => {
  const Projects = [
    {
      projectName: "Manufacturer Tools Hub",
      projectImg: ProjectImg1,
      projectRoute: `/project/manufacturer-tools-hub`,
      projectStack: [
        "ReactJS",
        "Firebase",
        "React Router",
        "NodeJS",
        "Express",
        "Mongodb",
        "admin",
        "jwt",
      ],
    },
    {
      projectName: "Smart Inventory Manger",
      projectImg: ProjectImg2,
      projectRoute: `/project/smart-inventory-manager`,
      projectStack: [
        "ReactJS",
        "Firebase",
        "React Router",
        "NodeJS",
        "Express",
        "Mongodb",
      ],
    },
    {
      projectName: "Task Manger",
      projectImg: ProjectImg2,
      projectRoute: `/project/task-manager`,
      projectStack: [
        "ReactJS",
        "Firebase",
        "React Router",
        "NodeJS",
        "Express",
        "Mongodb",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-5 px-6  xl:px-20" id="projects">
      <h2 className="text-5xl font-Kdam text-center mt-6">My Projects</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14 gap-6">
        {Projects.map((project) => {
          return <Project project={project}></Project>;
        })}
      </div>
    </div>
  );
};

export default Projects;
