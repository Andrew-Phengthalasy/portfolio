import {ReactNode} from "react";

type BadgeProps = {
    label: string;
    variant?: "default" | "accent" | "muted";
    className?: string;
};

export default function Badge({
                                  label,
                                  variant = "default",
                                  className = "",
                              }: BadgeProps) {
    const base = "inline-flex items-center font-mono text-xs px-2.5 py-1 rounded-full";

    const variants = {
        default: "bg-surface border border-accent/20 text-muted",
        accent: "bg-accent/10 border border-accent/40 text-accent",
        muted: "bg-surface text-muted/60 border border-white/5",
    };

    return (
        <span className={`${base} ${variants[variant]} ${className}`}>
            {label}
        </span>
    );
}