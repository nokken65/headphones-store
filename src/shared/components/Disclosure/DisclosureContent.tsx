import React from 'react'

import * as S from './DisclosureContent.styled'

type DisclosureContentProps = React.ComponentPropsWithoutRef<'div'> & { isExpanded: boolean }

const DisclosureContent = ({ children, isExpanded, ...props }: DisclosureContentProps) => {
  return (
    <S.DisclosureContent {...props} $isExpanded={isExpanded}>
      <div>{children}</div>
    </S.DisclosureContent>
  )
}

export { DisclosureContent }
