interface SocialIconProps {
  icon: string | undefined
  label?: string
  href?: string
  highlightColor?: string
  width?: number
  height?: number
  classNames?: string
}

export const SocialIcon = ({ icon, label, href, highlightColor, width, height, classNames }: SocialIconProps) => {
  if (href) {
    return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-col items-center transition-transform hover:scale-[1.1] active:scale-[0.95] ${classNames || ''}`}
    >
      <div className={`flex items-center justify-center`}>
        <img
          src={icon}
          alt={label}
          className="max-w-full max-h-full object-contain drop-shadow-lg"
          style={{ width: width ? `${width}px` : '48px', height: height ? `${height}px` : '48px' }}
        />
      </div>

      {label && (
        <span className={`hidden lg:inline-block relative highlight-${highlightColor || 'yellow'} tracking-wider text-sm lg:text-lg text-ink/70 font-handwrite font-bold mt-4`}>
          {label}
        </span>
      )}
    </a>
  )
  }
  return (
    <>
      <div className={`flex items-center justify-center`}>
        <img
          src={icon}
          alt={label}
          className="max-w-full max-h-full object-contain drop-shadow-lg"
          style={{ width: width ? `${width}px` : '48px', height: height ? `${height}px` : '48px' }}
        />
      </div>

      {label && (
        <span className={`hidden lg:inline-block relative highlight-${highlightColor || 'yellow'} tracking-wider text-sm lg:text-lg text-ink/70 font-handwrite font-bold mt-4`}>
          {label}
        </span>
      )}
    </>
  )
}