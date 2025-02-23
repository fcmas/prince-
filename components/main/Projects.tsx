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
          src="/NextWebsite.png"
          title="3D Next.js Portfolio"
          description="One my latest projects,featuring well curated development assets that showcase my expertise in Web development."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Responsive Website "
          description="Showcasing my expertise in web developmentthrough a carefully desinged and developed project."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="My Website"
          description="A recent project  demonstrating  my skills in crafting responsive, user centric experiences."
        />
      </div>
    </div>
  );
};

export default Projects;
