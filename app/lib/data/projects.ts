export type Project = {
    title: string,
    description: string,
    tags: string[],
    githubUrl?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "Content Management System",
        description: "Built a full-stack document, user, workflow, and role management system, automating 12+ key workflow controls with a 10 person team.",
        tags: ["PERN Stack", "Mantine", "Tailwind"],
        featured: true,
    },
    {
        title: "Sector Returns During Recessions Analysis",
        description: "Built an E2E ETL Pipeline to scrape, clean & align 324 months of sector-level excess returns, NBER recession dummies, & macroeconomic INDPRO, MKT controls. ",
        tags: ["Python", "FredAPI", "YahooFinance"],
        featured: true,
    },
    {
        title: "Data Structures Suite",
        description: "Developed a comprehensive Java-based data structures suite including a generic doubly-linked list, deque, and sorting algorithm performance analyzer.",
        tags: ["Java", "Deques", "Algorithmic Analysis"],
        featured: true,
    },
    {
        title: "Housing Price Prediction Model ",
        description: "Created a data preprocessing pipeline for 545+ records, converting categorical variables into quantitative data.",
        tags: ["Python", "Scikit-learn", "Pandas"],
        featured: true,
    },
];