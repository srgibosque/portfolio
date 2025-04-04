import HamMenu from "./HamMenu";

interface TopBarProps {
  onMenuToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuToggle }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="md:flex md:flex-col md:items-start md:gap-2 md:px-5 md:py-8 md:border-b-1 md:border-secondary-300 dark:md:border-secondary-dark-300">
        <h1 className="font-mono text-md">Sergi Bosque</h1>
        <p className="hidden font-light text-sm text-secondary-400 dark:text-secondary-dark-400 md:block">
          Industrial & UX/UI designer
        </p>
      </div>
      <HamMenu onClick={onMenuToggle} />
    </div>
  );
};

export default TopBar;
