interface FilterButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const FilterButton = ({ text, onClick, isActive }: FilterButtonProps) => {
  return (
    <button
      className={`dark:bg-secondary-dark-500 text-sm font py-3 px-4 border-1 dark:border-0 border-secondary-300 transition-all duration-300 ease-in-out ${isActive ? "bg-primary dark:bg-white/35 text-white" : "dark:text-secondary-dark-400 hover:bg-secondary-200 dark:hover:bg-secondary-dark-300 dark:hover:text-white"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default FilterButton;