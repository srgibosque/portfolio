import FilterButton from "./FilterButton";
import projects from "../assets/data/projects";
import { motion } from "motion/react";

interface FilterProjectsListProps {
    setFilter: (filter: string) => void;
    activeFilter: string;
}


const FilterProjectsList = ({ setFilter, activeFilter }: FilterProjectsListProps) => {
    //Extract unique values
    const disciplines = Array.from(new Set(projects.map(project => project.discipline)));

    return (
        <motion.ul
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
            >
            <li>
                <FilterButton
                    text={"All projects"}
                    onClick={() => setFilter("All projects")}
                    isActive={activeFilter === "All projects"} />
            </li>
            {disciplines.map((discipline) => (
                <li key={discipline}>
                    <FilterButton
                        text={discipline}
                        onClick={() => setFilter(discipline)}
                        isActive={activeFilter === discipline} />
                </li>
            ))}
        </motion.ul>
    )
}

export default FilterProjectsList;