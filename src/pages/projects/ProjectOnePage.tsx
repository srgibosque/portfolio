import ProjectDetail from "../../components/ProjectDetail"
import projects from "../../assets/data/projects"

const ProjectOnePage = () => {
  return (
    <ProjectDetail
      image={projects[0].imageUrl}
      title={projects[0].title}
      subtitle={projects[0].subtitle} 
      description={projects[0].description}>
      <p>Here goes the custom content</p>
    </ProjectDetail>
  )
}

export default ProjectOnePage