import { LucideIcon } from "lucide-react";

type ImagePlaceholderProps = {
  icon?: LucideIcon;
  tone?: "rust" | "moss" | "charcoal" | "cream";
  label?: string;
  className?: string;
};

const toneStyles: Record<NonNullable<ImagePlaceholderProps["tone"]>, string> = {
  rust: "bg-gradient-to-br from-rust-400 via-rust-500 to-charcoal",
  moss: "bg-gradient-to-br from-moss-400 via-moss-500 to-charcoal",
  charcoal: "bg-gradient-to-br from-charcoal-soft via-charcoal to-moss-700",
  cream: "bg-gradient-to-br from-cream-deep via-rust-200 to-rust-400",
};

/**
 * Placeholder for real farm photography. Replace the surrounding <div> with a
 * Next.js <Image /> pointing at licensed photography before shipping to production.
 */
export default function ImagePlaceholder({
  icon: Icon,
  tone = "rust",
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`grain relative overflow-hidden ${toneStyles[tone]} ${className}`}
      role="img"
      aria-label={label ?? "Goshen Anugerah Sejahtera farm photography"}
    >
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage:
          "repeating-linear-gradient(115deg, transparent 0, transparent 38px, rgba(247,243,234,0.6) 39px, transparent 40px)",
      }} />
      {Icon && (
        <Icon
          className="absolute -bottom-6 -right-6 opacity-20"
          size={140}
          strokeWidth={0.75}
          color="#F7F3EA"
        />
      )}
      {label && (
        <span className="eyebrow absolute bottom-4 left-4 text-cream/70">{label}</span>
      )}
    </div>
  );
}
