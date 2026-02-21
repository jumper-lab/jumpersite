import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[80px] border-t border-[#1E1E1E]",
        dark && "bg-[var(--bg-secondary)]",
        className
      )}
    >
      <div className="mx-auto max-w-[1100px] px-[60px] max-md:px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <div className="editorial-label mb-3">{label}</div>
      )}
      <h2
        className="text-[28px] font-semibold text-foreground"
        style={{ letterSpacing: "-0.5px", marginBottom: "32px" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-[15px] leading-[1.85] max-w-[720px]" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
