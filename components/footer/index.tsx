import {FileText} from "lucide-react";
import {Button} from "@/components/UserInterface";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-accent/10 mt-24">
            <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md: flex-row items-center justify-between gap-6">

                {/* Copyright*/}
                <p className="font-body text-muted text-sm">
                    © {new Date().getFullYear()} Andrew Phengthalasy.
                </p>
                <p className="font-body text-muted text-sm">
                    This website was designed and written by me!
                </p>

                {/* Right - Links */}
                <div
                    className="flex items-center gap-2">
                    <Button variant="ghost" href="https://github.com/Andrew-Phengthalasy" target="_blank">
                        <FaGithub/>
                    </Button>
                    <Button variant="ghost" href="https://www.linkedin.com/in/andrew-phengthalasy/" target="_blank">
                        <FaLinkedin/>
                    </Button>
                    <Button variant="outline" href="/AndrewPhengthalasy_resume.pdf" target="_blank" size="sm">
                        <FileText size={14}/> Resume
                    </Button>
                </div>


            </div>
        </footer>
    )
}