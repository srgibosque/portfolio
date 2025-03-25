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

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close menu when hitting md breakpoint
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 left-0 z-40 p-4 
    bg-bg-primary dark:bg-primary 
    flex flex-col md:p-0 md:fixed md:top-0 md:left-0 md:w-52 md:h-dvh md:flex-col md:items-start md:justify-start 
    md:border-r-1 md:border-secondary-300 dark:md:border-secondary-dark-300 
    ${scrolled ? "shadow-md md:shadow-none" : ""} 
    ${
      menuOpen
        ? "dark:bg-secondary-dark-600 border-b-1 border-secondary-300 dark:border-secondary-dark-300 md:border-0"
        : "dark:bg-primary"
    }`}
    >
      <TopBar onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <NavigationBar  isVisible={menuOpen} />
      <ProjectsNavigationBar />
      <ThemeToggle  isVisible={menuOpen} />
    </header>
  );
};

export default Header;