import logo from "@/assets/holyplastic-logo-new.png.asset.json";

/**
 * HolyPlastic lockup. The source PNG ships on a black plate, so it is composited
 * with `screen` blending to sit cleanly on the near-black stage without a visible box.
 */
export function Logo({
  className = "",
  imgClassName = "",
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo.url}
        alt="HolyPlastic"
        width={1580}
        height={391}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-auto object-contain ${imgClassName}`}
      />
    </span>
  );
}
