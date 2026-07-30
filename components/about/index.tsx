import { Badge } from "@/components/UserInterface";

const skills = [
    "TypeScript", "React", "Next.js", "Node.js",
    "PostgreSQL", "Tailwind CSS", "Docker", "Git",
];

const hobbies = [
    "Gaming", "Photography", "Hiking", "Music", "Reading", "Cooking",
];

export default function About() {
    return (
        <section id="about" className="section-padding pt-32">

            {/* Heading */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-gold" />
                    <span className="label">About Me</span>
                </div>
                <h2 className="font-playfair text-5xl md:text-6xl font-normal italic text-warm mb-4">
                    Andrew Phengthalasy
                </h2>
                <div className="w-full h-[1px] bg-gold/20" />
            </div>

            {/* Bio + Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

                {/* Bio */}
                <div>
                    <span className="label mb-4 block">Bio</span>
                    <div className="flex flex-col gap-4 font-body text-muted leading-relaxed text-sm">
                        <p>
                            I'm a rising junior at Worcester Polytechnic Institute majoring in Computer Science with minors in Financial Technology & Data Science.
                            I've worked on both full-stack SWE and FinTech related projects throughout my educational career.
                        </p>
                        <p>
                            I'm passionate about Asian representation in tech and giving back to my community.
                            I'm very goal-oriented and have a love for structure, both in my lifestyle and in the ways I approach my work,
                            taking pride in the quality of what I build.
                        </p>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <span className="label mb-4 block">Education</span>
                    <div className="border border-white/5 rounded-sm p-6">
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-playfair text-xl italic text-warm">
                                Worcester Polytechnic Institute
                            </h3>
                            <span className="font-mono text-xs text-gold/60">2024 — 2028</span>
                        </div>
                        <p className="font-body text-muted text-sm mb-3">
                            B.S. Computer Science
                        </p>
                        <p className="font-body text-muted text-sm">
                            Financial Technology & Data Science Minors
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="font-body text-muted text-sm">
                                Clubs: Pan Asian Association & The Society of Asian Scientists and Engineers
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Skills + Hobbies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Skills */}
                <div>
                    <span className="label mb-4 block">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} label={skill} variant="accent" />
                        ))}
                    </div>
                </div>

                {/* Hobbies */}
                <div>
                    <span className="label mb-4 block">Interests & Hobbies</span>
                    <div className="flex flex-wrap gap-2">
                        {hobbies.map((hobby) => (
                            <Badge key={hobby} label={hobby} />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}