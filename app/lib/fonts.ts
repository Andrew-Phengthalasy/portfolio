import {Cormorant_Garamond, DM_Sans, JetBrains_Mono} from "next/font/google";

export const displayFont = Cormorant_Garamond({
    subsets: [ "latin"],
    weight: ["400","500","600","700"],
    variable:"--font-display",
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