import { Project } from "../models/project.interface"
import ProjectCardItem from "./ProjectCardItem"
import { motion } from "motion/react"

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ projects }) => {
  return (
    <motion.ul
      className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <ProjectCardItem key={project.id} project={project} />
        </motion.div>
      ))}
    </motion.ul>
  )
}

export default ProjectCardList