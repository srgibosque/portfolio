interface FilterButtonProps {
    text: string;
    onClick: () => void;
  }
  
  const FilterButton = ({ text, onClick }: FilterButtonProps) => {
    return (
      <button onClick={onClick}>{text}</button>
    );
  }
  
  export default FilterButton;