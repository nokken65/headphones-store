import React from 'react'

import allCategoriesIconId from '@/assets/images/svg/all_categories.svg'
import flameIconId from '@/assets/images/svg/flame.svg'
import homeIconId from '@/assets/images/svg/home.svg'
import megaphoneIconId from '@/assets/images/svg/megaphone.svg'
import percentIconId from '@/assets/images/svg/percent.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './Navigation.styled'

const ITEMS = [
  {
    label: 'Home',
    iconId: homeIconId,
  },
  {
    label: 'All categories',
    iconId: allCategoriesIconId,
  },
  {
    label: 'Hot',
    iconId: flameIconId,
  },
  {
    label: 'Sales',
    iconId: percentIconId,
  },
  {
    label: 'New',
    iconId: megaphoneIconId,
  },
]

const _Navigation = () => {
  return (
    <S.List>
      {ITEMS.map(({ label, iconId }) => (
        <li key={label}>
          <S.Link $isSelected={label === 'Home'} href={'#'}>
            <Icon height={18} id={iconId} width={18} /> {label}
          </S.Link>
        </li>
      ))}
    </S.List>
  )
}

export const Navigation = React.memo(_Navigation)
