import React from 'react'

import heartIconId from '@/assets/images/svg/heart.svg'
import { Icon } from '@/shared/components/Icon'
import { indicatorStyles } from '@/shared/components/Indicator'
import { useStore } from '@nanostores/react'

import * as styles from './WishlistIconLink.css'

import { count } from '../model'

const _WishlistIconLink = () => {
  const itemsCount = useStore(count.$value)

  return (
    <a className={styles.link} href={'#'}>
      <Icon height={24} id={heartIconId} width={24} />
      {itemsCount !== 0 && <span className={indicatorStyles.indicator({})}>{itemsCount}</span>}
    </a>
  )
}

export const WishlistIconLink = React.memo(_WishlistIconLink)
