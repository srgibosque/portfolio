import { ReactNode } from "react";

type FixedStructureCardProps = {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    children?: ReactNode;
};

const ProjectDetail: React.FC<FixedStructureCardProps> = ({ image, title, subtitle, description, children }) => {
    return (
        <div>
            <div className="flex flex-col gap-6">
                <img src={image} alt="dummyImage" />
                <div className="flex flex-col gap-3 pb-6 border-b-1 border-secondary-400">
                    <h2 className="text-4xl">{title}</h2>
                    <h3 className="text-xl text-secondary-400">{subtitle}</h3>
                </div>
                <p className="text-sm">{description}</p>
            </div>
            <div className="text-sm">
                {children}
            </div>
        </div>
    )
}

export default ProjectDetail