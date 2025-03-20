interface HamMenuProps {
    onClick: () => void;
  }

const HamMenu: React.FC<HamMenuProps> = ({onClick}) => {
  return (
    <button onClick={onClick}  className="flex flex-col gap-2 md:hidden">
      <span className="bg-primary dark:bg-white block w-6 h-[1px]"></span>
      <span className="bg-primary dark:bg-white block w-6 h-[1px]"></span>
      <span className="bg-primary dark:bg-white block w-6 h-[1px]"></span>
    </button>
  );
};

export default HamMenu;
