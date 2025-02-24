import { Project } from "../models/project.interface"
import ProjectCardItem from "./ProjectCardItem"

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({projects}) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    {projects.map((project) => (
      <ProjectCardItem key={project.id} project={project} />
    ))}
  </ul>
  )
}

export default ProjectCardList