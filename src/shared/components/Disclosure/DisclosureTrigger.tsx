import React from 'react'

import plusIconId from '@/assets/images/svg/plus.svg'

import * as S from './DisclosureTrigger.styled'

type DisclosureTriggerProps = React.ComponentPropsWithoutRef<'button'> & {
  isExpanded: boolean
  toggle: () => void
  show: () => void
  hide: () => void
}

const DisclosureTrigger = ({
  children,
  isExpanded,
  toggle,
  show,
  hide,
  ...props
}: DisclosureTriggerProps) => {
  return (
    <S.DisclosureTrigger $isExpanded={isExpanded} onClick={() => toggle()} {...props}>
      {children}
      <S.DisclosureTriggerIcon $isExpanded={isExpanded}>
        <use xlinkHref={`#${plusIconId}`} />
      </S.DisclosureTriggerIcon>
    </S.DisclosureTrigger>
  )
}

export { DisclosureTrigger }
