import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
}) => {
    return (
        <button
          type="button"
          onClick={onClick}
          className="flex items-center gap-2 px-4 py-2 uppercase bg-primary text-white md:w-fit dark:bg-secondary-dark-300"
        >
          {icon && <span className="flex items-center">{icon}</span>}
          {label}
        </button>
      );
};

export default Button;
