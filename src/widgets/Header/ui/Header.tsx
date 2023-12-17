import React from 'react'

import searchIconId from '@/assets/images/svg/search.svg'
import { CartIconLink } from '@/entities/Cart'
import { ProfileIconLink } from '@/entities/Profile'
import { WishlistIconLink } from '@/entities/Wishlist'
import { CitySelector } from '@/features/select-city'
import { ColorSchemeSelector } from '@/features/select-color-scheme'
import { LanguageSelector } from '@/features/select-language'
import { Icon } from '@/shared/components/Icon'
import { HEADER_HEIGHT } from '@/shared/constants'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import * as S from './Header.styled'
import { Navigation } from './Navigation'

const _Header = () => {
  const [isInverted, setIsInverted] = React.useState(
    window.scrollY >= document.documentElement.clientHeight - HEADER_HEIGHT
  )
  const { scrollY } = useScroll({ axis: 'y' })

  useMotionValueEvent(scrollY, 'change', latest =>
    setIsInverted(latest >= document.documentElement.clientHeight - HEADER_HEIGHT)
  )

  return (
    <S.Header data-is-inverted={isInverted ? '' : undefined}>
      <ColorSchemeSelector />
      <LanguageSelector />
      <CitySelector />

      <Navigation />

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
