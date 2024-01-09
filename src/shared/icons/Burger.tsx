import React from 'react'

type BurgerIconProps = React.SVGAttributes<SVGElement>

export const BurgerIcon = ({ ...props }: BurgerIconProps) => {
  return (
    <svg fill={'none'} viewBox={'0 0 55 55'} {...props}>
      <path d={'M0 0H55V11H0V0Z'} fill={'currentColor'} />
      <path d={'M0 22H55V33H0V22Z'} fill={'currentColor'} />
      <path d={'M0 44H55V55H0V44Z'} fill={'currentColor'} />
    </svg>
  )
}
