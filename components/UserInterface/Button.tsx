import {ReactNode} from "react";

type ButtonProps = {
    variant?: "primary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    target?: "_blank" | "_self";
};

export default function Button({
                                   variant = "primary",
                                   size = "md",
                                   href,
                                   onClick,
                                   children,
                                   className = "",
                                   target,
                               }: ButtonProps) {
    const base = "inline-flex items-center gap-2 rounded-btn font-body font-medium transition-all duration-200 cursor-pointer";

    const variants = {
        primary: "bg-accent text-warm hover:bg-accent/80",
        ghost: "text-muted hover:text-warm",
        outline: "border border-accent/30 text-muted hover: border-accent hover:text-warm",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3.5 text-base",
    }

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return (
            <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}
               className={classes}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick}
                className={classes}
        >
            {children}
        </button>
    );
}