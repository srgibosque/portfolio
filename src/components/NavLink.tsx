import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    path: string;
    label: string; 
  }

const NavLinkComponent = ({path, label}: NavLinkProps) => {
    return (
        <li>
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `font-medium  
              ${isActive ? "text-secondary-400" : "transition-all duration-500 ease-in-out hover:text-secondary-400"}`
                }
            >
                {label}
            </NavLink>
        </li>
    )
}

export default NavLinkComponent