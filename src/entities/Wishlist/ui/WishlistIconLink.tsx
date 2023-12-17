import heartIconId from '@/assets/images/svg/heart.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import { count } from '../model'
import * as S from './WishlistIconLink.styled'

const WishlistIconLink = () => {
  const itemsCount = useStore(count.$value)

  return (
    <S.Link href={'#'}>
      <Icon height={18} id={heartIconId} width={18} />
      {itemsCount !== 0 && <S.Count>{itemsCount}</S.Count>}
    </S.Link>
  )
}

export { WishlistIconLink }
