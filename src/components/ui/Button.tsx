import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "maroon-glow";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

{
  /* Button bisa <button> atw <a>*/
}

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
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none active:scale-95";

  const variants: Record<Variant, string> = {
    solid: "bg-accent text-white hover:opacity-90",
    outline:
      "border border-accent text-accent hover:bg-accent hover:texttext-indigo-300 transition duration-300 ",
    ghost: "text-accent hover:bg-accent/10",
    "maroon-glow":
      "bg-[#800000] text-white hover:bg-[a52a2a] hover:shadow-[0_0_20px_rgba(128,0,0,0.5)] shadow-sm",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes =
    `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  {
    /* href bisa jg render <a> */
  }
  if ("href" in props && props.href) {
    const { href, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={props.href} {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }
  const { ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
