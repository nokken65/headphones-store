import React from 'react'

import { BurgerIcon } from '@/shared/icons/Burger'
import { LogoIcon } from '@/shared/icons/Logo'
import { SearchIcon } from '@/shared/icons/Search'

const Menu = () => {
  return (
    <header>
      <LogoIcon height={48} width={48} />
      <BurgerIcon height={24} width={24} />
      <SearchIcon height={24} width={24} />
    </header>
  )
}

export { Menu }
