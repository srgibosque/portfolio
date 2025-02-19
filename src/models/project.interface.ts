export interface Project {
    id: number;
    title: string;
    year: number;
    discipline: string;
    description: string;
    layout: "grid" | "carousel"; // Restrict to specific values
  }