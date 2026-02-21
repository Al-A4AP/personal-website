import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  children,
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

      {subtitle && <p className="text-gray-600">{subtitle}</p>}

      {children}
    </div>
  );
}
