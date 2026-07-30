import {Playfair_Display, DM_Sans, JetBrains_Mono} from "next/font/google";

export const displayFont = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-playfair",
    style: ["normal", "italic"],
});

export const displayBodyFont = DM_Sans({
    subsets: ["latin"],
    weight: ["400","500","600","700"],
    variable:"--font-body",
})

export const displayMonoFont = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400","500","600","700"],
    variable:"--font-mono",
})