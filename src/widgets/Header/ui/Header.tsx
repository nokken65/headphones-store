import React from 'react'

// import searchIconId from '@/assets/images/svg/search.svg'
// import { CartIconLink } from '@/entities/Cart'
// import { ProfileIconLink } from '@/entities/Profile'
// import { WishlistIconLink } from '@/entities/Wishlist'
import { ColorSchemeSelector } from '@/features/select-color-scheme'
// import { Icon } from '@/shared/components/Icon'
import { useScrollY } from '@/shared/hooks/useScroll'

import styles from './Header.module.css'
// import { Navigation } from './Navigation'

const _Header = () => {
  const isInverted = useScrollY(y => y >= document.documentElement.clientHeight - 64)

  return (
    <header className={styles.header} data-is-fixed={isInverted}>
      <div className={styles.container}>
        <h1 className={styles.heading} style={{ marginRight: 'auto' }}>
          Headphones store
        </h1>
        {/* <LanguageSelector />
      <CitySelector /> */}

        {/* <Navigation /> */}

        {/* <button
          aria-controls={'id'}
          aria-expanded={false}
          aria-haspopup={'dialog'}
          aria-label={'search-dialog-trigger'}
          style={{
            width: '3.5rem',
            height: '3.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon height={24} id={searchIconId} width={24} />
        </button>

        <WishlistIconLink />
        <CartIconLink />
        <ProfileIconLink /> */}
        <ColorSchemeSelector />
      </div>
    </header>
  )
}

export const Header = React.memo(_Header)
