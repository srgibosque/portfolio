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
                    `${size === "regular" ? "font-regular" : "font-regular text-sm"}  
              ${isActive
                        ? "text-primary dark:text-primary-dark font-medium md:px-2"
                        : "transition-all duration-500 ease-in-out md:hover:px-2"}`
                }
            >
                {label}
            </NavLink>
        </li>
    )
}

export default NavLinkComponent