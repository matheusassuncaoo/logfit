
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`btn btn-primary ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
