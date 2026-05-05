import Hero from "@/components/landing";
import Header from "@/components/header";
import Projects from "@/components/projects";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero/>
            <Projects />
            <About />
            <Footer />

        </main>
    );
}