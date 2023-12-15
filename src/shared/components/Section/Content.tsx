import type { ExecutionProps } from 'styled-components'

import React from 'react'

import * as S from './Content.styled'
import { useSectionContext } from './SectionContext'

type ContentProps = React.ComponentPropsWithoutRef<typeof S.Content> & ExecutionProps

const Content = ({ children, ...props }: ContentProps) => {
  useSectionContext()

  return <S.Content {...props}>{children}</S.Content>
}

export { Content }
