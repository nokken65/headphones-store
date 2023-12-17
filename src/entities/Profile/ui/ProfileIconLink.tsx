import React from 'react'

import profileIconId from '@/assets/images/svg/profile.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './ProfileIconLink.styled'

const _ProfileIconLink = () => {
  return (
    <S.Link href={'#'}>
      <Icon height={18} id={profileIconId} width={18} />
    </S.Link>
  )
}

export const ProfileIconLink = React.memo(_ProfileIconLink)
