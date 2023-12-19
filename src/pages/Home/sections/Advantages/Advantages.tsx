import React from 'react'

import { Marquee } from '@/shared/components/Marquee'
import { ADVANTAGES_MAP } from '@/shared/constants'

import * as S from './Advantages.styled'

const _Advantages = () => {
  return (
    <S.Section aria-label={'Advantages'}>
      <Marquee
        items={Object.entries(ADVANTAGES_MAP).map(([id, { icon, text }]) => (
          <S.Item as={'li'} key={id}>
            {icon}
            <p>{text}</p>
          </S.Item>
        ))}
      />
    </S.Section>
  )
}

export const Advantages = React.memo(_Advantages)
