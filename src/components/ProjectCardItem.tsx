import { NavLink } from "react-router-dom";
import { Project } from "../models/project.interface";

interface ProjectCardItemProps {
  project: Project;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({ project }) => {
  return (
    <NavLink to={`/projects/${project.id}`}>
      <li className="group">
        <div className="w-full h-auto overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto transition-transform duration-400 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex pr-6 py-6 justify-between border-b-1 transition-all duration-400 ease-in-out group-hover:pr-2">
          <div className="flex flex-col self-stretch gap-1">
            <p className="text-secondary-400 dark:text-secondary-dark-400 text-sm font-light">
              {project.discipline} | {project.year}
            </p>
            <h2 className="text-2xl">{project.title}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M2 23.5H46M46 23.5L36.9091 14M46 23.5L36.9091 33"
              stroke="currentColor"
            />
          </svg>
        </div>
      </li>
    </NavLink>
  );
};

export default ProjectCardItem;
