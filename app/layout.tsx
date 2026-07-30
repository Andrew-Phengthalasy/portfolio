import type { Metadata } from "next";
import { displayFont, displayBodyFont, displayMonoFont } from "./lib/fonts";
import Cursor from "@/components/cursor";
import Header from "@/components/header";
import "./global.css";

export const metadata: Metadata = {
    title: "Andrew Phengthalasy - Portfolio",
    description: "A fun idea I had during the end of my Sophomore year.",
    openGraph: {
        title: "Andrew Phengthalasy - Portfolio",
        description: "A fun idea I had during the end of my Sophomore year.",
        url: "https://portfolio-mu-topaz-ixx282b3ur.vercel.app",
        siteName: "Andrew Phengthalasy",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${displayFont.variable} ${displayBodyFont.variable} ${displayMonoFont.variable}`}
        >
        <body className="font-body bg-background text-warm antialiased cursor-none">
        <Cursor />
        <Header />
        {children}
        </body>
        </html>
    );
}