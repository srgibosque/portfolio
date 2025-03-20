import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import ProjectsNavigationBar from "./ProjectsNavigationBar";
import ThemeToggle from "./ThemeToggle";
import TopBar from "./TopBar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 z-40 p-4 bg-white dark:bg-primary flex flex-col md:p-0 md:fixed md:top-0 md:left-0 md:w-52 md:h-dvh md:flex-col md:items-start md:justify-start md:border-r-1 md:border-secondary-300 dark:md:border-secondary-dark-300
      ${scrolled ? "shadow-md md:shadow-none" : ""} 
      ${
        menuOpen
          ? "border-b-1 border-secondary-300 dark:border-secondary-dark-300 md:border-0"
          : ""
      }`}
    >
      <TopBar onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <NavigationBar isVisible={menuOpen} />
      <ProjectsNavigationBar />
      <ThemeToggle />
    </header>
  );
};

export default Header;
