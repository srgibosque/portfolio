export interface Project {
    id: number;
    title: string;
    year: number;
    discipline: "Industrial design" | "Service design" | "Interface design" | "UX design";
    description: string;
    imageUrl: string;
  }