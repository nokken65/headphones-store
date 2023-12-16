import React from 'react'

import * as S from './Heading.styled'
import { useSectionContext } from './SectionContext'

type HeadingProps = React.ComponentPropsWithoutRef<typeof S.Heading> & {
  title: string
  rightAddon?: React.ReactNode
}

const Heading = ({ title, rightAddon, ...props }: HeadingProps) => {
  useSectionContext()

  return (
    <S.Heading {...props}>
      {title && <S.Title>{title}</S.Title>}
      {rightAddon}
    </S.Heading>
  )
}

export { Heading }
