import React from 'react'

import * as S from './Button.styled'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...rest }, ref) => {
  return (
    <S.Button {...rest} ref={ref}>
      {children}
    </S.Button>
  )
})

export const Button = React.memo(_Button)
