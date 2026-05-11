export const SpineIcon = ({ size = 24, color = '#d4af37' }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Canal central */}
    <rect x="10" y="1" width="4" height="22" rx="2" fill={color} opacity="0.3" />

    {/* Vértebras */}
    <rect x="7" y="2"  width="10" height="3" rx="1.5" fill={color} />
    <rect x="7" y="7"  width="10" height="3" rx="1.5" fill={color} />
    <rect x="7" y="12" width="10" height="3" rx="1.5" fill={color} />
    <rect x="7" y="17" width="10" height="3" rx="1.5" fill={color} />

    {/* Processos espinhosos (saliências laterais) */}
    <rect x="4"  y="2.5"  width="3" height="2" rx="1" fill={color} />
    <rect x="17" y="2.5"  width="3" height="2" rx="1" fill={color} />
    <rect x="4"  y="7.5"  width="3" height="2" rx="1" fill={color} />
    <rect x="17" y="7.5"  width="3" height="2" rx="1" fill={color} />
    <rect x="4"  y="12.5" width="3" height="2" rx="1" fill={color} />
    <rect x="17" y="12.5" width="3" height="2" rx="1" fill={color} />
    <rect x="4"  y="17.5" width="3" height="2" rx="1" fill={color} />
    <rect x="17" y="17.5" width="3" height="2" rx="1" fill={color} />
  </svg>
);
