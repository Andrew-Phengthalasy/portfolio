import type {Metadata} from "next";
import {displayFont, displayBodyFont, displayMonoFont} from "./lib/fonts";
import "./global.css"


export const metadata: Metadata = {
    title: "Andrew Phengthalasy - A newly created Portfolio!",
    description: " A semi new journey on the way to becoming a fullstack developer from Woonsocket, Rhode Island.",
    openGraph: {
        title: "Andrew Phengthalasy - A newly created Portfolio!",
        description: "A semi new journey on the way to becoming a fullstack developer from Woonsocket, Rhode Island.",
        url: "https://asite.com",
        siteName: "Andrew Phengthalasy",
        locale: "en_US",
        type: "website"
    },
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html
            lang="en"
            className={`${displayFont.variable} ${displayBodyFont.variable} ${displayMonoFont.variable}`}
        >
        <body className="font-body bg-background text-warm antialiased">
        {children}
        </body>
        </html>
    );
};
