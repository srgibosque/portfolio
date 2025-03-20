import { NavLink } from "react-router-dom";

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
          `${
            isActive
              ? "text-primary dark:text-primary-dark font-medium md:font-medium px-4 md:px-2"
              : `${
                  size === "regular" ? "font-light md:font-normal" : "text-sm"
                } transition-all duration-500 ease-in-out hover:px-4 md:hover:px-2`
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavLinkComponent;
