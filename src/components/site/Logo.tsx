import logo from "@/assets/holyplastic-logo.png.asset.json";

export function Logo({
  className = "",
  imgClassName = "",
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo.url}
        alt="HolyPlastic"
        width={512}
        height={512}
        loading="eager"
        decoding="async"
        className={`h-full w-auto object-contain mix-blend-multiply ${imgClassName}`}
      />
    </span>
  );
}
