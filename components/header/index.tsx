"use client";
import {useState, useEffect} from "react";
import {Menu, X, FileText} from "lucide-react";
import {Button} from "@/components/UserInterface"
import {FaGithub, FaLinkedin} from "react-icons/fa";

const navLinks = [
    {label: "About", href: "#about"},
    {label: "Projects", href: "#projects"},
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backddrop-blur-md border-b border-accent/10 py-3" : "py-6"}`
            }
        >
            <div
                className="max-w-5x1 mx-auto px-6 flex items-center justify-between">
                {/*logo & name*/}
                <button
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    className="font-display text-x1 text-warm hover: text-accent transition-colors duration-200">
                    AP
                </button>
                {/*Desktop Navigation*/}
                <nav
                    className="hidden md: flex items-ceneter gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollTo(link.href)}
                            className="font-body text-sm text-muted hover:text-warm transition-colors duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div
                        className="flex items-center gap-2 ml-4">
                        <Button variant="ghost" href="https://github.com/Andrew-Phengthalasy" target="_blank">
                            <FaGithub/>
                        </Button>
                        <Button variant="ghost" href="https://linkedin.com/andrew-phengthalasy//" target="_blank">
                            <FaLinkedin/>
                        </Button>
                        <Button href="/resume.pdf" target="_blank" size="sm">
                            <FileText size={14}/> Resume
                        </Button>
                    </div>
                </nav>

                {/* hamburger */}
                <button
                    className="md:hidden text-muted hover:text-warm transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={22}/> : <Menu size={22}/>}
                </button>
            </div>


            {/*For Mobile*/
            }
            {
                menuOpen && (
                    <div
                        className="md:hidden bg-background/95 backdrop-blur-md border-t border-accent/10 px-6 py-6 flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="font-body text-elft text-warm hover:text-accent transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="flex items-center gap-3 pt-2 border-t border-accent/10">
                            <Button variant="ghost" href="https://github.com/Andrew-Phengthalasy" target="_blank">
                                <FaGithub/>
                            </Button>
                            <Button variant="ghost" href="https://linkedin.com/andrew-phengthalasy//" target="_blank">
                                <FaLinkedin/>
                            </Button>
                            <Button href="/resume.pdf" target="_blank" size="sm">
                                <FileText size={14}/> Resume
                                <FaLinkedin/>
                            </Button>
                        </div>
                    </div>
                )
            }
        </header>
    );
}



