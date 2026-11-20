import { useId, type CSSProperties } from 'react'
import './PigmentWash.css'

type PigmentWashProps = {
  className?: string
  animated?: boolean
  variant?: 'wash' | 'surface'
  /** Optional transparent artwork to receive the pigment treatment. */
  textureSrc?: string
  tint?: string
  intensity?: number
}

/** Reusable pigment effect for its built-in wash or a supplied transparent image. */
export function PigmentWash({
  className = '',
  animated = true,
  variant = 'wash',
  textureSrc,
  tint = '#e86f98',
  intensity = 0.6,
}: PigmentWashProps) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const classes = [
    'pigment-wash',
    animated ? '' : 'pigment-wash--static',
    variant === 'surface' ? 'pigment-wash--surface' : '',
    className,
  ].filter(Boolean).join(' ')
  const style = {
    '--pigment-tint': tint,
    '--pigment-intensity': Math.max(0, Math.min(1, intensity)),
  } as CSSProperties
  const textureMaskStyle: CSSProperties | undefined = textureSrc
    ? { maskImage: `url("${textureSrc}")`, WebkitMaskImage: `url("${textureSrc}")` }
    : undefined

  if (variant === 'surface') {
    return (
      <div className={classes} style={style} aria-hidden="true">
        <svg className="pigment-wash__surface" viewBox="0 0 1440 3768" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${id}-surface-tint`} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor={tint} stopOpacity=".18" />
              <stop offset=".36" stopColor={tint} stopOpacity=".07" />
              <stop offset=".7" stopColor="#668db5" stopOpacity=".1" />
              <stop offset="1" stopColor="#627da7" stopOpacity=".04" />
            </linearGradient>
            <filter id={`${id}-surface-texture`} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency=".003 .01" numOctaves="3" seed="18" result="flow" />
              <feDisplacementMap in="SourceGraphic" in2="flow" scale="54" xChannelSelector="R" yChannelSelector="G" result="pigment-flow" />
              <feTurbulence type="fractalNoise" baseFrequency=".035 .09" numOctaves="2" seed="27" result="grain" />
              <feColorMatrix in="grain" type="saturate" values="0" result="mono-grain" />
              <feComponentTransfer in="mono-grain" result="fine-grain">
                <feFuncA type="table" tableValues="0 .42" />
              </feComponentTransfer>
              <feComposite in="fine-grain" in2="SourceAlpha" operator="in" result="masked-grain" />
              <feBlend in="pigment-flow" in2="masked-grain" mode="soft-light" />
            </filter>
          </defs>
          <rect width="1440" height="3768" fill={`url(#${id}-surface-tint)`} filter={`url(#${id}-surface-texture)`} />
        </svg>
      </div>
    )
  }

  return (
    <div className={classes} style={style} aria-hidden="true">
      <div className="pigment-wash__halo" />
      {textureSrc ? (
        <>
          <img className="pigment-wash__asset" src={textureSrc} alt="" />
          <div className="pigment-wash__asset-tint" style={textureMaskStyle} />
        </>
      ) : (
        <svg
        className="pigment-wash__shape"
        viewBox="0 0 640 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`${id}-rose`} cx="0" cy="0" r="1" gradientTransform="matrix(230 200 -180 210 307 232)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffb5cd" stopOpacity=".3" />
            <stop offset=".38" stopColor="#dc6c95" stopOpacity=".2" />
            <stop offset=".72" stopColor="#a74367" stopOpacity=".09" />
            <stop offset="1" stopColor="#812b4b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-glow`} cx="0" cy="0" r="1" gradientTransform="matrix(100 140 -120 90 287 351)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff8db9" stopOpacity=".25" />
            <stop offset="1" stopColor="#a12f5b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-ribbon`} x1="403" y1="193" x2="515" y2="345" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffb1ca" stopOpacity=".72" />
            <stop offset="1" stopColor="#bc416d" stopOpacity=".08" />
          </linearGradient>
          <filter id={`${id}-soft-distortion`} x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency=".014 .022" numOctaves="3" seed="12" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" result="warped" />
            <feTurbulence type="fractalNoise" baseFrequency=".045 .07" numOctaves="3" seed="27" result="texture-noise" />
            <feColorMatrix in="texture-noise" type="saturate" values="0" result="mono-texture" />
            <feComponentTransfer in="mono-texture" result="soft-grain">
              <feFuncA type="table" tableValues="0 .82" />
            </feComponentTransfer>
            <feComposite in="soft-grain" in2="SourceAlpha" operator="in" result="shaped-grain" />
            <feBlend in="warped" in2="shaped-grain" mode="overlay" />
          </filter>
          <filter id={`${id}-soft-blur`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <filter id={`${id}-veil-blur`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <path
          d="M165 246c-12-39 27-53 45-80 8-13 4-54 28-57 27-4 56 23 79 4 22-18 35-58 62-39 25 18 13 58 33 77 24 23 70 14 80 47 11 36-25 52-14 84 12 34 51 42 34 76-18 37-70 25-95 51-27 28-30 73-69 72-40-1-42-53-77-71-30-16-73 2-90-29-18-33 34-59 23-94-7-20-31-22-39-41Z"
          fill="#e84f84"
          opacity=".14"
          filter={`url(#${id}-soft-blur)`}
        />

        <g filter={`url(#${id}-soft-distortion)`} opacity=".43" style={{ mixBlendMode: 'screen' }}>
          <path d="M160 247c-16-29 17-46 36-63 23-21 8-62 39-68 29-6 55 24 78 7 22-17 24-57 49-56 33 1 34 46 47 72 15 28 55 16 69 43 16 31-12 54-5 83 8 34 52 41 39 72-13 32-57 28-82 44-30 19-35 64-69 64-31 1-41-40-69-55-29-15-69 5-89-21-21-27 17-55 7-84-8-24-38-15-50-38Z" fill={`url(#${id}-rose)`} />
          <path d="M260 150c31-24 47 9 74 9 26 0 36-29 62-15 23 13 12 47 31 64 21 18 51 12 59 40 8 30-25 44-20 71 5 27 34 45 19 68-18 29-51 7-76 18-27 11-39 45-67 39-28-6-26-42-46-61-21-20-56-18-66-45-10-27 24-45 21-72-3-32-18-91 9-116Z" fill={`url(#${id}-glow)`} opacity=".54" />
          <path d="M391 187c28-20 62-5 76 19 19 32 10 74 30 102 12 17 34 34 21 51-15 19-39-1-57-13-24-15-46-23-57-49-14-33 7-64-20-88-10-9-7-15 7-22Z" fill={`url(#${id}-ribbon)`} opacity=".42" />
          <path d="M186 236c22-24 49-28 65-55 11-18 20-44 40-46 24-3 35 24 57 25 22 1 38-18 57-8 20 11 9 37 23 53 14 17 37 17 39 39 3 22-18 32-18 53 0 22 18 37 7 54-13 19-38 8-58 15-23 9-36 33-57 27-21-6-23-29-43-43-19-13-43-9-54-26-12-18 4-34-5-51-10-20-43-14-53-37Z" fill="#fb8db1" opacity=".12" filter={`url(#${id}-veil-blur)`} />
        </g>

        <g fill="#ffc1d5" opacity=".34" filter={`url(#${id}-veil-blur)`}>
          <circle cx="253" cy="233" r="3" /><circle cx="279" cy="206" r="2" />
          <circle cx="338" cy="251" r="3.5" /><circle cx="363" cy="222" r="2" />
          <circle cx="302" cy="326" r="2.5" /><circle cx="374" cy="293" r="2" />
          <circle cx="231" cy="279" r="1.7" /><circle cx="345" cy="176" r="1.8" />
        </g>
        </svg>
      )}
    </div>
  )
}
