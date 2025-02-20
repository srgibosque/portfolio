import NavLinkComponent from "./NavLink"

const NavigationBar = () => {
  return (
    <nav>
      <ul className="flex gap-3">
        <NavLinkComponent path="/" label="Projects" />
        <NavLinkComponent path="/resume" label="Resume" />
      </ul>
    </nav>
  )
}

export default NavigationBar