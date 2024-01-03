import React from 'react'

import profileIconId from '@/assets/images/svg/profile.svg'
import { Icon } from '@/shared/components/Icon'

import * as styles from './ProfileIconLink.css'

const _ProfileIconLink = () => {
  return (
    <a className={styles.link} href={'#'}>
      <Icon height={24} id={profileIconId} width={24} />
    </a>
  )
}

export const ProfileIconLink = React.memo(_ProfileIconLink)
