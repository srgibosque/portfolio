import { motion } from "motion/react";
import { JSX } from "react";
import { NavLink } from "react-router-dom"

interface NavButtonProps {
  text: string;
  path: string;
  icon: JSX.Element;
}

const NavButton = ({ text, path, icon }: NavButtonProps) => {
  return (
    <NavLink to={path} className="group absolute top-4 left-4">
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
      }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 p-2 bg-white/25 backdrop-blur-xs hover:shadow-sm transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center justify-center w-6 h-6">
          {icon}
        </div>
        <motion.p
          className="text-sm"
        >
          {text}
        </motion.p>
      </motion.button>
    </NavLink>
  )
}

export default NavButton