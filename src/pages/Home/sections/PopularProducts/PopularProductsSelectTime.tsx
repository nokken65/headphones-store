import React from 'react'

import * as S from './PopularProductsSelectTime.styled'

const TIME = ['for yesterday', 'for 3 days', 'per week', 'per month']

const PopularProductsSelectTime = () => {
  const [active, setActive] = React.useState(0)

  return (
    <S.List>
      {TIME.map((time, index) => (
        <li key={index}>
          <S.Action $isSelected={active === index} onClick={() => setActive(index)}>
            {time}
          </S.Action>
        </li>
      ))}
    </S.List>
  )
}

export { PopularProductsSelectTime }
