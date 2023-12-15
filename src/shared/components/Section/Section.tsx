import React from 'react'

import { Content } from './Content'
import { Heading } from './Heading'
import * as S from './Section.styled'
import { SectionContext } from './SectionContext'

type SectionProps = React.ComponentPropsWithoutRef<typeof S.Section>

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <SectionContext.Provider value={{}}>
      <S.Section {...props}>{children}</S.Section>
    </SectionContext.Provider>
  )
}

Section.Heading = Heading
Section.Content = Content

export { Section }
