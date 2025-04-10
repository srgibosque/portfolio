import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative overflow-hidden group flex items-center gap-2 px-4 py-2 uppercase bg-primary text-white md:w-fit dark:bg-secondary-dark-300"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-white/30 dark:bg-primary/30 transition-all duration-300 group-hover:w-full" />
      {icon && <span className="flex items-center z-10">{icon}</span>}
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
