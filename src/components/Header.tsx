import NavigationBar from "./NavigationBar"

const Header = () => {
    return (
        <header className="p-4 flex justify-between items-center">
            <h1 className="font-mono p-3 border">Sergi Bosque</h1>
            <NavigationBar />
        </header>
    )
}

export default Header