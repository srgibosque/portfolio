import { ReactNode } from "react";
import NavButton from "./NavButton";
import { motion } from "motion/react";

type FixedStructureCardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
};

const ProjectDetail: React.FC<FixedStructureCardProps> = ({
  image,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="h-96 relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={image}
            alt="dummyImage"
            className="w-full h-full object-cover"
          />
          <NavButton
            text="Back to projects"
            path="/"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M17 6.99994L0.999999 6.99994M0.999999 6.99994L7.32411 13.6086M0.999999 6.99994L7.32411 0.391249"
                  stroke="#333333"
                />
              </svg>
            }
          />
        </div>
        <motion.div
          className="flex flex-col gap-4 md:gap-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-2 pb-4 border-b-1 border-secondary-300 dark:border-secondary-dark-300 md:gap-3 md:pb-6">
            <h2 className="text-2xl md:text-4xl">{title}</h2>
            <h3 className="text-lg md:text-xl text-secondary-400 dark:text-secondary-dark-400">
              {subtitle}
            </h3>
          </div>
          <p className="text-sm">{description}</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-sm"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
