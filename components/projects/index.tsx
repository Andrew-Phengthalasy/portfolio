import {ExternalLink} from "lucide-react";
import {Card, Badge, Button} from "@/components/UserInterface";
import {projects} from "@/app/lib/data/projects";
import {FaGithub} from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="section-padding">

            {/* Heading */}
            <div className="mb-12">
                <span className="label mb-3 block"> My past Work </span>
                <h2 className="font-display text-4x1 md: text-5x1 text-warm">
                    Selected Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md: grid-cols2 gap-6">
                {projects.map((project) => (
                    <Card key={project.title} hover className="flex flex-col justify-between gap-6">
                        {/* Top */}
                        <div>
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-display text-2x12 text-warm"> {project.title}</h3>
                                {project.featured && (
                                    <Badge label="Featured" variant="accent"/>
                                )}
                            </div>
                            <p className="font-body text-mutued text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags */}

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} label={tag}/>
                            ))}
                        </div>
                        {/* project links */}

                        <div className="flex items-center gap-3 pt-2 border-t border-accent/10">
                            {project.githubUrl && (
                                <Button variant="ghost" href={project.githubUrl} target={"_blank"} size="sm">
                                    <FaGithub/> Repositories
                                </Button>
                            )}
                            {project.liveUrl && (
                                <Button variant="outline" href={project.liveUrl} target={"_blank"} size="sm">
                                    <ExternalLink size={14}/> Live
                                </Button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>

        </section>
    );
}



