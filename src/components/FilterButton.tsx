interface FilterButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const FilterButton = ({ text, onClick, isActive }: FilterButtonProps) => {
  return (
    <button
      className={`text-sm font py-3 px-4 border-1 border-secondary-300 ${isActive? "bg-primary text-white" : "hover:bg-secondary-200"}`}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default FilterButton;