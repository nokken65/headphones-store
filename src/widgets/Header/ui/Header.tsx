import React from 'react'

import searchIconId from '@/assets/images/svg/search.svg'
import { CartIconLink } from '@/entities/Cart'
import { ProfileIconLink } from '@/entities/Profile'
import { WishlistIconLink } from '@/entities/Wishlist'
import { CitySelector } from '@/features/select-city'
import { ColorSchemeSelector } from '@/features/select-color-scheme'
import { LanguageSelector } from '@/features/select-language'
import { Icon } from '@/shared/components/Icon'

import * as S from './Header.styled'

const _Header = () => {
  return (
    <S.Header>
      <LanguageSelector />
      <CitySelector />
      <ColorSchemeSelector />

      <button style={{ marginLeft: 'auto' }}>
        <Icon height={18} id={searchIconId} width={18} />
      </button>

      <WishlistIconLink />
      <CartIconLink />
      <ProfileIconLink />
    </S.Header>
  )
}

export const Header = React.memo(_Header)
