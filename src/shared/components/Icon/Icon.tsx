import React from 'react'

type IconProps = React.ComponentPropsWithoutRef<'svg'> & { id: string }

const Icon = ({ id, ...props }: IconProps) => {
  return (
    <svg {...props}>
      <use href={`#${id}`} />
    </svg>
  )
}

export { Icon }
