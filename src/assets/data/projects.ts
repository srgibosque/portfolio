import { Project } from "../../models/project.interface";
import dummyImage from "../images/dummyImage.jpg";

const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      year: 2024,
      discipline: "Interface design",
      description: "A modern portfolio built with React and TailwindCSS.",
      imageUrl: dummyImage
    },
    {
      id: 2,
      title: "Brand Identity Design",
      year: 2023,
      discipline: "Industrial design",
      description: "Complete brand identity for a tech startup.",
      imageUrl: dummyImage
    },
    {
      id: 3,
      title: "Brand Identity Design",
      year: 2023,
      discipline: "Industrial design",
      description: "Complete brand identity for a tech startup.",
      imageUrl: dummyImage
    },
  ];
  

  export default projects;