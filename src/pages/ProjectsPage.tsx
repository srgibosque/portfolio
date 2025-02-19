import ProjectCardList from "../components/ProjectCardList";
import { Project } from "../models/project.interface";

function ProjectsPage() {

    const projects: Project[] = [
        { id: 1, title: "Portfolio Website", year: 2024, discipline: "Web Development", description: "A modern portfolio built with React and TailwindCSS.", layout: "grid" },
        { id: 2, title: "Brand Identity Design", year: 2023, discipline: "Graphic Design", description: "Complete brand identity for a tech startup.", layout: "carousel" }
      ];

    return (
        <>
        <h1>Projects page</h1>
        <ProjectCardList projects={projects} />
        </>
    )
}

export default ProjectsPage;
