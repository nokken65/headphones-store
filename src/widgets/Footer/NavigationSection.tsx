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
      <h2>{heading}</h2>
      <S.List>
        {items.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </S.List>
    </nav>
  )
}

export { NavigationSection }
