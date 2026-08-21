import logoDark from "@/assets/holyplastic-logo.png.asset.json";
import logoLight from "@/assets/holyplastic-logo-light.png.asset.json";

/**
 * HolyPlastic lockup. `tone="light"` renders the version tuned for dark scenes.
 */
export function Logo({
  className = "",
  imgClassName = "",
  tone = "light",
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  const src = tone === "light" ? logoLight.url : logoDark.url;
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt="HolyPlastic"
        width={1772}
        height={886}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-auto object-contain ${imgClassName}`}
      />
    </span>
  );
}
