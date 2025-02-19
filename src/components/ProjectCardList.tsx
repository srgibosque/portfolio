import { Project } from "../models/project.interface"
import ProjectCardItem from "./ProjectCardItem"

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({projects}) => {
  return (
    <ul className="space-y-4">
    {projects.map((project) => (
      <ProjectCardItem key={project.id} project={project} />
    ))}
  </ul>
  )
}

export default ProjectCardList