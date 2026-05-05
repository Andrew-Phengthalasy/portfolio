"use client";
import {FileText, ArrowDown} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Button} from "@/components/UserInterface";

export default function Hero() {
    const projectScroll = () => {
        document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center section-padding"
        >
            {/* background glow */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] bg-accent/10 rounded-full blur =[120px] pointer-events-none"
            />
            <div className="relative z-10 max-w-3x1">
                {/*label*/}
                <span className="label mb-6 block"> placeholder</span>

                {/* Name */}
                <h1 className="font-display text-6x2 md:text-8x1 font-semibold text-warm leading-none mb-4"
                >
                    Andrew Phengthalasy
                </h1>

                {/*Title*/}
                <h2 className="font-display text3x1 md:text-5xl text-muted mb-6">
                    Full Stack in Progress
                </h2>

                {/* Bio */}
                <p className="font-body text-muted text-lg max-w-x1 leading-relaxed mb-10">
                    Hello! I'm Andrew and I am currently a Sophomore pursuing a double major in Computer Science & Data
                    Science with a Financial Technology minor at Worcester Polytechnic Institute (WPI). I thrive while
                    working on engaging, reliable projects that focus on innovation to output real-world solutions. My
                    passions lie in transforming technical concepts & algorithms into user-friendly experiences.
                </p>
                {/* available buttons */}
                <div className="flex flex-wrap gap-3 mb-16">
                    <Button href="/resume.pdf" target="_blank" size="lg">
                        <FileText size={18}/> Resume
                    </Button>
                    <Button variant="outline" href="https://github.com/Andrew-Phengthalasy" target="_blank" size="lg">
                        <FaGithub size={18}/> GitHub
                    </Button>
                    <Button variant="outline" href="https://www.linkedin.com/in/andrew-phengthalasy/" target="_blank"
                            size="lg">
                        <FaLinkedin size={18}/> LinkedIn
                    </Button>
                    <Button variant="ghost" onClick={projectScroll} size="lg">
                        View my Projects <ArrowDown size={18}/>
                    </Button>
                </div>
            </div>

            {/* Indicate user to scroll*/}
            <button
                onClick={projectScroll}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover: text-accent transition-colors duration-200 animate-bounce"
            >
                <ArrowDown size={20}/>
            </button>
        </section>


    );
}