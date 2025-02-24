import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar"
import ProjectsNavigationBar from "./ProjectsNavigationBar"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
        <header className={`sticky top-0 left-0 z-40 p-4 bg-white flex justify-between items-center md:p-0 md:fixed md:top-0 md:left-0 md:w-52 md:h-dvh md:flex-col md:items-start md:justify-start md:border-r-1 md:border-secondary-300 transition-all duration-300 
            ${scrolled ? "shadow-md md:shadow-none" : ""}`}>
            <div className="md:flex md:flex-col md:items-start md:gap-2 md:px-5 md:py-8 md:border-b-1 md:border-secondary-300">
                <h1 className="font-mono text-sm p-3 border">Sergi Bosque</h1>
                <p className="hidden text-sm text-secondary-400 md:block">Industrial & UX/UI designer</p>
            </div>
            <NavigationBar />
            <ProjectsNavigationBar />
        </header>
    )
}

export default Header