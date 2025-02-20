import FilterButton from "./FilterButton";
import projects from "../assets/data/projects";

interface FilterProjectsListProps {
    setFilter: (filter: string) => void;
}


const FilterProjectsList = ({ setFilter }: FilterProjectsListProps) => {
    //Extract unique values
    const disciplines = Array.from(new Set(projects.map(project => project.discipline)));
    
    return (
        <ul>
            <li><FilterButton text={"All projects"} onClick={() => setFilter("All projects")} /></li>
            {disciplines.map((discipline) => (
                <li key={discipline}>
                    <FilterButton text={discipline} onClick={() => setFilter(discipline)} />
                </li>
            ))}
        </ul>
    )
}

export default FilterProjectsList;