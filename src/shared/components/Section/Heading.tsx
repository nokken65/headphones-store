import React from 'react'

import * as S from './Heading.styled'
import { useSectionContext } from './SectionContext'

type HeadingProps = {
  title?: string
  rightAddon?: React.ReactNode
}

const Heading = ({ title, rightAddon }: HeadingProps) => {
  useSectionContext()

  return (
    <S.Heading>
      {title && <S.Title>{title}</S.Title>}
      {rightAddon}
    </S.Heading>
  )
}

export { Heading }
