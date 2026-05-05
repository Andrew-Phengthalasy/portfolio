import Hero from "@/components/landing";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero/>
            <Projects />
        </main>
    );
}