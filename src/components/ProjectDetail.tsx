import { ReactNode } from "react";

type FixedStructureCardProps = {
    image: string;
    title: string;
    subtitle: string;
    children?: ReactNode;
  };

const ProjectDetail: React.FC<FixedStructureCardProps>  = ({ image, title, subtitle, children }) => {
    return (
        <div>
            <img src={image} alt="dummyImage" />
            <div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProjectDetail