import NavigationBar from "./NavigationBar"

const Header = () => {
    return (
        <header className="p-4 flex justify-between items-center md:fixed md:top-0 md:left-0 md:h-dvh md:flex-col md:justify-start">
            <h1 className="font-mono p-3 border">Sergi Bosque</h1>
            <NavigationBar />
        </header>
    )
}

export default Header