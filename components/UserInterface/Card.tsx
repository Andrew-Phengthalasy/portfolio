import {ReactNode} from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
};

export default function Card ({
    children,
    className = "",
    hover = false,
    onClick, }: CardProps) {
    const base = "bg-surface border border--acent/20 rounded-card p-6"
    const hoverStyles = hover ? "transition-all duration-300 hover:border-accent/50 hover: shadow-glow cursor-pointer": "";

    return (
        <div onClick = {onClick} className = {`${base} ${hoverStyles} ${className}`}
             >
            {children}
        </div>
    );
}
