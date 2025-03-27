import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HamMenuProps {
  onClick: () => void;
}

const HamMenu: React.FC<HamMenuProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

   useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsOpen(false); // Close menu when hitting md breakpoint
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [isOpen]);

    return (
      <button
        onClick={handleClick}
        className="md:hidden relative w-[36px] h-[20px]"
      >
        <motion.span
          className="absolute left-0 h-[1px] w-full bg-primary dark:bg-primary-dark"
          animate={{
            top: isOpen ? "50%" : "0%",
            rotate: isOpen ? 135 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute left-0 h-[1px] w-full bg-primary dark:bg-primary-dark"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -50 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute left-0 h-[1px] w-full bg-primary dark:bg-primary-dark"
          animate={{
            top: isOpen ? "50%" : "100%",
            rotate: isOpen ? -135 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      </button>
    );
};

export default HamMenu;
