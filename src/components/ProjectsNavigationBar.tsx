import NavLinkComponent from "./NavLink";
import projects from "../assets/data/projects";

const ProjectsNavigationBar = () => {
  // Group projects by discipline
  const disciplines = projects.reduce<Record<string, typeof projects>>((acc, project) => {
    if (!acc[project.discipline]) {
      acc[project.discipline] = [];
    }
    acc[project.discipline].push(project);
    return acc;
  }, {});

  return (
    <div className="hidden w-full md:block md:overflow-y-auto">
      {Object.entries(disciplines).map(([discipline, projects]) => (
        <div className="md:px-5 md:py-8 md:border-b-1 md:border-secondary-300 md:flex md:flex-col md:gap-3 dark:md:border-secondary-dark-300" key={discipline}>
          <h3 className="text-secondary-400 text-xs uppercase tracking-widest dark:text-secondary-dark-400">{discipline}</h3>
          <ul className="flex flex-col gap-2">
            {projects.map((project) => (
              <NavLinkComponent 
                key={project.id} 
                path={`/projects/${project.id}`} 
                label={project.title}
                size="small" 
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectsNavigationBar;
