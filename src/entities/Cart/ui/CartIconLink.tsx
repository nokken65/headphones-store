import React from 'react'

import cartIconId from '@/assets/images/svg/cart.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import { count } from '../model'
import * as S from './CartIconLink.styled'

const _CartIconLink = () => {
  const itemsCount = useStore(count.$value)

  return (
    <S.Link href={'#'}>
      <Icon height={18} id={cartIconId} width={18} />
      {itemsCount !== 0 && <S.Count>{itemsCount}</S.Count>}
    </S.Link>
  )
}

export const CartIconLink = React.memo(_CartIconLink)
