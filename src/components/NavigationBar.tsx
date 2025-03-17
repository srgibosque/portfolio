import NavLinkComponent from "./NavLink";

const NavigationBar = () => {
  return (
    <nav className="md:w-full">
      <ul className="flex gap-3 md:flex-col md:px-5 md:py-8 md:border-b-1 md:border-secondary-300 dark:md:border-secondary-dark-300">
        <NavLinkComponent path="/" label="Projects" />
        <NavLinkComponent path="/resume" label="Resume" />
      </ul>
    </nav>
  );
};

export default NavigationBar;
