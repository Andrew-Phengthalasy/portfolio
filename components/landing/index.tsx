"use client";
import {FileText, ArrowDown} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Button} from "@/components/UserInterface";
import Link from "next/link";

export default function Hero() {
    const projectScroll = () => {
        document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section className="relative min-h-screen flex flex-col items-start justify-center px-6">
            {/* background glow */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/20 rounded-full blur-[140px] pointer-events-none"/>
            <div className="relative z-10 max-w-3xl w-full mx-auto">
                {/*label*/}
                <span className="label mb-6 block"> Rising Junior @ Worcester Polytechnic Institute</span>


                {/* Name */}
                <h1 className="font-display text-5xl md:text-6xl font-semibold text-warm leading-none mb-4">
                    Andrew Phengthalasy
                </h1>

                {/*Title*/}
                <h2 className="font-display text-2xl md:text-4xl font-normal text-muted mb-6">
                    Computer Science Major
                </h2>

                {/* Bio */}
                <p className="font-body text-muted text-base max-w-xl leading-relaxed mb-10">
                    Hello! I'm Andrew and welcome to my website! Here you can find some of my previous projects, connect
                    with my on socials, or just learn more about me as a person; whether its hobbies, what I do at WPI,
                    or the things I love as an aspiring Software Engineer.
                </p>
                {/* available buttons */}
                <div className="flex flex-wrap gap-3 mb-16">
                    <Button variant="outline" href="/AndrewPhengthalasy_resume.pdf" target="_blank" size="lg">
                        <FileText size={18}/> Resume
                    </Button>
                    <Button variant="outline" href="https://github.com/Andrew-Phengthalasy" target="_blank" size="lg">
                        <FaGithub size={18}/> GitHub
                    </Button>
                    <Button variant="outline" href="https://www.linkedin.com/in/andrew-phengthalasy/" target="_blank"
                            size="lg">
                        <FaLinkedin size={18}/> LinkedIn
                    </Button>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-warm transition-colors duration-200 px-4 py-2"
                    >
                        View my Projects <ArrowDown size={18}/>
                    </Link>
                </div>
            </div>
        </section>


    );
}