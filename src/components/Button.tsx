export const Button = ({ label = 'view all projects →', onClick, href }: { 
  label?: string
  onClick?: () => void
  href?: string
}) => {
  const sharedProps = {
    className: "relative inline-flex items-center justify-center transition-transform hover:scale-[1.03] active:scale-[0.97] bg-transparent border-none cursor-pointer drop-shadow-lg",
    style: { padding: '0' },
  }

  const inner = (
    <svg viewBox="0 0 320 56" width="100%" style={{ maxWidth: '320px' }} xmlns="http://www.w3.org/2000/svg">
      {/* Decorative dashes left */}
      <line x1="10" y1="14" x2="22" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6"  y1="28" x2="22" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="42" x2="22" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Decorative dashes right */}
      <line x1="310" y1="14" x2="298" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="314" y1="28" x2="298" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="310" y1="42" x2="298" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />

      {/* White fill */}
      <path d="M44 10 C80 7 140 6 160 7 C180 6 240 7 276 10 C279 18 279 36 276 46 C240 49 180 50 160 49 C140 50 80 49 44 46 C41 38 41 18 44 10 Z" fill="white" />

      {/* Top border */}
      <path d="M44 10 C90 6 130 5 160 6 C190 5 230 6 276 10" fill="none" stroke="#FF2D9B" strokeWidth="1.8" strokeLinecap="round" />

      {/* Right border */}
      <path d="M276 10 C280 20 280 34 276 46" fill="none" stroke="#FF2D9B" strokeWidth="1.8" strokeLinecap="round" />

      {/* Bottom border */}
      <path d="M276 46 C230 50 190 51 160 50 C130 51 90 50 44 46" fill="none" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left border */}
      <path d="M44 46 C40 36 40 20 44 10" fill="none" stroke="#FF2D9B" strokeWidth="1.4" strokeLinecap="round" />

      {/* Inner shadow lines */}
      <path d="M48 12 C90 9 130 8 160 9 C190 8 230 9 272 12" fill="none" stroke="#FF2D9B" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <path d="M272 44 C230 48 190 49 160 48 C130 49 90 48 48 44" fill="none" stroke="#FF2D9B" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />

      {/* Label */}
      <text x="160" y="33" textAnchor="middle"
        fontFamily="'Indie Flower', cursive" fontSize="20" fontWeight="700" fill="#1a1a2e" letterSpacing="1">
        {label}
      </text>
    </svg>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...sharedProps}>
        {inner}
      </a>
    )
  }

  return (
    <button onClick={onClick} {...sharedProps}>
      {inner}
    </button>
  )
}