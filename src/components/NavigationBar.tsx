import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
    </nav>
  )
}

export default NavigationBar