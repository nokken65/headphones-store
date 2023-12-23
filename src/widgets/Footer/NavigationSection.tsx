import React from 'react'

import * as S from './NavigationSection.styled'

type NavigationSectionProps<Item> = {
  children: (item: Item) => React.ReactNode
  heading?: string
  items: Item[]
  'aria-label'?: string
}

const NavigationSection = <Item,>({
  children,
  heading,
  items,
  ...props
}: NavigationSectionProps<Item>) => {
  const id = React.useId()

  return (
    <nav aria-labelledby={heading ? id : undefined} {...props}>
      {heading && <S.Heading id={id}>{heading}</S.Heading>}
      <S.List>
        {items.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </S.List>
    </nav>
  )
}

export { NavigationSection }
