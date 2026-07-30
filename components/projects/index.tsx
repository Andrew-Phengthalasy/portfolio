import {Badge} from "@/components/UserInterface";
import {projects} from "@/app/lib/data/projects";
import {FaGithub} from "react-icons/fa";
import {ArrowRight} from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="section-padding pt-32">

            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-gold"/>
                    <span className="label">My past Work</span>
                </div>
                <h2 className="font-playfair text-5xl md:text-6xl font-normal italic text-warm mb-4">
                    Selected Projects
                </h2>
                <div className="w-full h-[1px] bg-gold/20"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className="group relative border border-white/5 hover:border-gold/30 rounded-sm p-8 transition-all duration-500 bg-surface/40 hover:bg-surface/60"
                    >
            <span className="font-mono text-xs text-gold/40 mb-6 block tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>

                        <div className="mb-6">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-playfair text-2xl font-normal italic text-warm group-hover:text-gold transition-colors duration-300">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <Badge label="Featured" variant="accent"/>
                                )}
                            </div>
                            <p className="font-body text-muted text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <Badge key={tag} label={tag}/>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                            {project.githubUrl ? (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-gold transition-colors duration-300 tracking-widest uppercase">
                                    <FaGithub size={14}/>
                                    <span>View Code</span>
                                    <ArrowRight size={12}/>
                                </a>
                            ) : null}
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}