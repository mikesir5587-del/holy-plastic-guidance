const LOGO_SRC = "/media/holyplastic-logo-640.webp";
const LOGO_SRCSET = [
  "/media/holyplastic-logo-400.webp 400w",
  "/media/holyplastic-logo-640.webp 640w",
  "/media/holyplastic-logo-1024.webp 1024w",
  "/media/holyplastic-logo-1580.webp 1580w",
].join(", ");

/**
 * HolyPlastic lockup. Optimised WebP variants (the original 541 KB PNG is no
 * longer in the initial request path).
 */
export function Logo({
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(min-width: 640px) 320px, 220px",
}: {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_SRC}
        srcSet={LOGO_SRCSET}
        sizes={sizes}
        alt="HolyPlastic"
        width={1580}
        height={391}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        decoding="async"
        className={`h-full w-auto object-contain ${imgClassName}`}
      />
    </span>
  );
}
