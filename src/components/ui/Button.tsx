import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

/**
 * Button bisa jadi <button> atau <a>
 */

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "solid",
    size = "md",
    className = "",
    ...rest
  } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition duration-300 focus:outline-none";

  const variants: Record<Variant, string> = {
    solid: "bg-accent text-white hover:opacity-90",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "text-accent hover:bg-accent/10",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // Kalau ada href → render <a>
  if ("href" in props && props.href) {
    return (
      <a {...props} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
