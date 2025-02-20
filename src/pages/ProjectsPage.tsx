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
        <section className="flex flex-col gap-4">
            <FilterProjects setFilter={setFilter} activeFilter={filter} />
            <ProjectCardList projects={filteredProjects} />
        </section>
    )
}

export default ProjectsPage;
