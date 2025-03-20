import NavLinkComponent from "./NavLink";

interface NavBarProps {
  isVisible: boolean;
}

const NavigationBar: React.FC<NavBarProps> = ({isVisible}) => {
  return (
    <nav className={`${isVisible ? "block" : "hidden"} md:block md:w-full`}>
      <ul className="flex flex-col gap-3 text-4xl md:text-base pt-6 pb-4 md:px-5 md:py-8 md:border-b-1 md:border-secondary-300 dark:md:border-secondary-dark-300">
        <NavLinkComponent path="/" label="Projects" />
        <NavLinkComponent path="/resume" label="Resume" />
      </ul>
    </nav>
  );
};

export default NavigationBar;
