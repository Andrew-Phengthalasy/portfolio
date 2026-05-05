import {Badge} from "@/components/UserInterface";

const skills = [
    "TypeScript", "React", "Next.js", "Node.js",
    "PostgreSQL", "Tailwind CSS", "Docker", "Git",
]

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left - little blurb*/}
                <div>
                    <span className="label mb-3 block">About</span>
                    <h2 className="font-display text-4x1 md:text-5xl text-warm mb-6">
                        Some things about me - Andrew
                    </h2>
                    <div className="flex flex-col gap-4 font-body text-muted leading-relaxed">
                        <p>
                            Im an upcoming fullstack developer and im passionate about creating
                            beautiful products with sharp designs and personality. This website itself
                            is a great learning experience - im having a bunch of fun with this!
                        </p>
                    </div>
                </div>

                {/* Right - Skills */}

                <div>

                    <span className="label ,b-4 block">Languages</span>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} label={skill} variant="accent"/>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}