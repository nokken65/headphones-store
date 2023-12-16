import React from 'react'

import * as S from './NavigationSection.styled'

type NavigationSectionProps<Item> = {
  children: (item: Item) => React.ReactNode
  heading: string
  items: Item[]
}

const NavigationSection = <Item,>({ children, heading, items }: NavigationSectionProps<Item>) => {
  return (
    <nav aria-label={heading}>
      <S.Heading>{heading}</S.Heading>
      <S.List>
        {items.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </S.List>
    </nav>
  )
}

export { NavigationSection }
