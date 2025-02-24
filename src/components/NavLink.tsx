import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    path: string;
    label: string;
    size?: "regular" | "small";
}

const NavLinkComponent = ({ path, label, size = "regular" }: NavLinkProps) => {
    return (
        <li>
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `${size === "regular" ? "font-medium" : "font-regular text-sm"}  
              ${isActive
                        ? "text-secondary-400 md:px-2"
                        : "transition-all duration-500 ease-in-out hover:text-secondary-400 md:hover:px-2"}`
                }
            >
                {label}
            </NavLink>
        </li>
    )
}

export default NavLinkComponent