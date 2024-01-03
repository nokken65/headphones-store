import React from 'react'

import cartIconId from '@/assets/images/svg/cart.svg'
import { Icon } from '@/shared/components/Icon'
import { indicatorStyles } from '@/shared/components/Indicator'
import { useStore } from '@nanostores/react'

import * as styles from './CartIconLink.css'

import { count } from '../model'

const _CartIconLink = () => {
  const itemsCount = useStore(count.$value)

  return (
    <a className={styles.link} href={'#'}>
      <Icon height={24} id={cartIconId} width={24} />
      {itemsCount !== 0 && <span className={indicatorStyles.indicator({})}>{itemsCount}</span>}
    </a>
  )
}

export const CartIconLink = React.memo(_CartIconLink)
