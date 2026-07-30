"use client";
import { FileText, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/UserInterface";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-10 md:px-20">

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-20 items-center">

                {/* Left — Text */}
                <div className="w-full">

                    {/* Label */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-[1px] bg-gold" />
                        <span className="label">Rising Junior @ Worcester Polytechnic Institute</span>
                    </div>

                    {/* Name */}
                    <h1 className="font-playfair text-7xl md:text-8xl font-normal italic text-warm leading-none mb-3 tracking-tight">
                        Andrew
                    </h1>
                    <h1 className="font-playfair text-7xl md:text-8xl font-normal italic text-warm leading-none mb-8 tracking-tight">
                        Phengthalasy
                    </h1>

                    {/* Thin divider */}
                    <div className="w-full h-[1px] bg-gold/20 mb-8" />

                    {/* Title + Bio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <h2 className="font-body text-xl font-light text-muted">
                            Aspiring Software Engineer
                        </h2>
                        <p className="font-body text-muted text-sm leading-relaxed">
                            Hello! I'm Andrew and welcome to my website. Here you can find my
                            previous projects, connect with me on socials, or learn more about
                            me as a person — my hobbies, what I do at WPI.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Button href="/AndrewPhengthalasy_resume.pdf" target="_blank" size="lg">
                            <FileText size={16} /> Resume
                        </Button>
                        <Button variant="ghost" href="https://github.com/Andrew-Phengthalasy" target="_blank" size="lg">
                            <FaGithub size={16} /> GitHub
                        </Button>
                        <Button variant="ghost" href="https://www.linkedin.com/in/andrew-phengthalasy/" target="_blank" size="lg">
                            <FaLinkedin size={16} /> LinkedIn
                        </Button>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 font-mono text-xs text-gold hover:text-warm transition-colors duration-300 tracking-widest uppercase ml-4"
                        >
                            View Projects <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Right — Photo */}
                <div className="hidden md:flex justify-end items-center">
                    <div className="relative w-[340px] h-[440px]">
                        {/* Photo */}
                        <img
                            src="/IMG_7257 2.JPG"
                            alt="Andrew Phengthalasy"
                            className="relative z-10 w-full h-full object-cover rounded-sm border border-gold/40"
                            style={{ boxShadow: "0 0 40px rgba(201, 168, 76, 0.2)" }}
                        />
                        {/* Bottom fade */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-32 z-20 rounded-b-sm"
                            style={{ background: "linear-gradient(to top, #0a0812 0%, transparent 100%)" }}
                        />
                    </div>
                </div>

            </div>

            {/* Bottom corner detail */}
            <div className="absolute bottom-10 right-10 font-mono text-xs text-muted/40 tracking-widest uppercase">
                Portfolio — 2026
            </div>

        </section>
    );
}