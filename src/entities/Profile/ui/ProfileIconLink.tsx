import React from 'react'

import profileIconId from '@/assets/images/svg/profile.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './ProfileIconLink.styled'

const _ProfileIconLink = () => {
  return (
    <S.ButtonLink $variant={'subtle'} aria-label={'profile'} as={'a'} href={'#'}>
      <Icon height={18} id={profileIconId} width={18} />
    </S.ButtonLink>
  )
}

export const ProfileIconLink = React.memo(_ProfileIconLink)
