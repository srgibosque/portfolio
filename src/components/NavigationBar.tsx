import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li className='font-medium transition-all duration-500 ease-in-out hover:px-1.5'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-all duration-500 ease-in-out hover:px-1.5 
              ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li className='font-medium'>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `font-medium transition-all duration-500 ease-in-out hover:px-1.5 
              ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar