import {Card, Badge, Button} from "@/components/UserInterface";
import {projects} from "@/app/lib/data/projects";
import {FaGithub} from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="section-padding pt-32">

            {/* Heading */}
            <div className="mb-12">
                <span className="label mb-3 block">My past Work</span>
                <h2 className="font-display text-4xl md:text-5xl text-warm">
                    Selected Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.title} hover className="flex flex-col justify-between gap-6">

                        {/* Top */}
                        <div>
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-display text-2xl text-warm">{project.title}</h3>
                                {project.featured && (
                                    <Badge label="Featured" variant="accent"/>
                                )}
                            </div>
                            <p className="font-body text-muted text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} label={tag}/>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 pt-2 border-t border-accent/10">
                            {project.githubUrl && (
                                <Button variant="ghost" href={project.githubUrl} target="_blank" size="sm">
                                    <FaGithub/> Repositories
                                </Button>
                            )}
                        </div>

                    </Card>
                ))}
            </div>

        </section>
    );
}