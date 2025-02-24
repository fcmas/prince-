import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/bo.jpeg"
          title=" Next.js Project"
          description=" A showcase of my recent projects, highlighting meticulously selected development assets that exemplify my proficiency in web development."
        />
        <ProjectCard
          src="/mber.jpeg"
          title=" React Project"
          description="Demonstrating my web development prowess through a meticulously crafted and designed project."
        />
        <ProjectCard
          src="/Java.jpeg"
          title="Java Project"
          description="Highlighting my web development expertise through a meticulously designed and executed project."
        />
        <ProjectCard
          src="/aq.jpeg"
          title="REDUX Project"
          description="Exhibiting my web development skills through a thoughtfully designed and impeccably executed project."
        />
        <ProjectCard
          src="/pe.jpeg"
          title="Framer Project"
          description="Displaying my web development expertise through a skillfully designed and executed project."
        />
        <ProjectCard
          src="/lo.jpeg"
          title="CRUD Project"
          description="Illustrating my web development capabilities through a masterfully designed and executed project."
        />
      </div>
    </div>
  );
};

export default Projects;
