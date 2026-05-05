export type Project = {
    title: string,
    description: string,
    tags: string[],
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "Content Management System",
        description: "A short description of what this project does and what problem it solves.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/yourusername/project-one",
        liveUrl: "https://project-one.vercel.app",
        featured: true,
    },
    {
        title: "Sector Returns During Recessions Analysis",
        description: "A short description of what this project does and what problem it solves.",
        tags: ["React", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/project-two",
        featured: true,
    },
    {
        title: "Data Structures Suite",
        description: "A short description of what this project does and what problem it solves.",
        tags: ["Python", "FastAPI", "Docker"],
        githubUrl: "https://github.com/yourusername/project-three",
        liveUrl: "https://project-three.vercel.app",
    },
    {
        title: "Housing Price Prediction Model ",
        description: "A short description of what this project does and what problem it solves.",
        tags: ["Python", "FastAPI", "Docker"],
        githubUrl: "https://github.com/yourusername/project-three",
        liveUrl: "https://project-three.vercel.app",
    },
];