import NavigationBar from "./NavigationBar"
import ProjectsNavigationBar from "./ProjectsNavigationBar"

const Header = () => {
    return (
        <header className="p-4 flex justify-between items-center md:p-0 md:fixed md:top-0 md:left-0 md:h-dvh md:flex-col md:items-start md:justify-start md:border-r-1 md:border-secondary-300">
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