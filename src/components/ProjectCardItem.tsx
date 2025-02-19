import { Project } from "../models/project.interface";

interface ProjectCardItemProps {
    project: Project;
  }

const ProjectCardItem: React.FC< ProjectCardItemProps > = ({ project }) => {
    return (
        <li>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.year} - {project.discipline}</p>
            <p className="mt-2 text-gray-800">{project.description}</p>
        </li>
    )
}

export default ProjectCardItem