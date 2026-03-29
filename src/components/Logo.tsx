interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = "", isScrolled = false }: LogoProps) {
  const textColor = isScrolled ? "#1a2332" : "#ffffff";
  const accentColor = "#f97316";

  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="MoverPro"
    >
      {/* M */}
      <text x="0" y="30" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="28" fill={textColor}>
        M
      </text>

      {/* Truck icon as "O" */}
      <g transform="translate(22, 6)">
        {/* Truck body */}
        <rect x="2" y="8" width="18" height="14" rx="2" fill={accentColor} />
        {/* Truck cabin */}
        <path d="M20 12 L26 12 L28 16 L28 22 L20 22 Z" fill={accentColor} opacity="0.85" />
        {/* Windshield */}
        <path d="M21 13 L25 13 L27 16 L21 16 Z" fill={isScrolled ? "#ffffff" : "#1a2332"} opacity="0.6" />
        {/* Wheels */}
        <circle cx="8" cy="24" r="3.5" fill={isScrolled ? "#e2e8f0" : "#1a2332"} />
        <circle cx="8" cy="24" r="1.5" fill={accentColor} />
        <circle cx="24" cy="24" r="3.5" fill={isScrolled ? "#e2e8f0" : "#1a2332"} />
        <circle cx="24" cy="24" r="1.5" fill={accentColor} />
      </g>

      {/* VER */}
      <text x="55" y="30" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="28" fill={textColor}>
        VER
      </text>

      {/* PRO in accent color */}
      <text x="125" y="30" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="28" fill={accentColor}>
        PRO
      </text>
    </svg>
  );
}
