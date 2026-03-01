interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mithileshan logo"
    >
      {/* Background */}
      <rect width="40" height="40" rx="10" fill="#101826" />
      {/* Subtle accent border */}
      <rect width="40" height="40" rx="10" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.4" />
      {/* M — left leg */}
      <line x1="8"  y1="32" x2="8"  y2="10" stroke="white"   strokeWidth="3" strokeLinecap="round" />
      {/* M — left diagonal (accent) */}
      <line x1="8"  y1="10" x2="20" y2="22" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
      {/* M — right diagonal (accent) */}
      <line x1="20" y1="22" x2="32" y2="10" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
      {/* M — right leg */}
      <line x1="32" y1="10" x2="32" y2="32" stroke="white"   strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
