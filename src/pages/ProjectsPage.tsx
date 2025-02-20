import { useState } from "react";

import ProjectCardList from "../components/ProjectCardList";
import FilterProjects from "../components/FilterProjectsList";

import projects from "../assets/data/projects";

function ProjectsPage() {
    const [filter, setFilter] = useState<string>("All projects");

    // Filter projects based on selected discipline
    const filteredProjects = filter === "All projects"
        ? projects
        : projects.filter(project => project.discipline === filter);


    return (
        <>
            <FilterProjects setFilter={setFilter} activeFilter={filter} />
            <ProjectCardList projects={filteredProjects} />
        </>
    )
}

export default ProjectsPage;
