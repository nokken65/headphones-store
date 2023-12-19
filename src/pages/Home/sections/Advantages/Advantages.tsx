import React from 'react'

import { Marquee } from '@/shared/components/Marquee'
import { Section } from '@/shared/components/Section'
import { ADVANTAGES_MAP } from '@/shared/constants'

import * as S from './Advantages.styled'

const _Advantages = () => {
  return (
    <Section aria-label={'Advantages'} title={'Advantages'}>
      <Marquee
        items={Object.entries(ADVANTAGES_MAP).map(([id, { icon, text }]) => (
          <S.Item as={'li'} key={id}>
            {icon}
            <p>{text}</p>
          </S.Item>
        ))}
      />
    </Section>
  )
}

export const Advantages = React.memo(_Advantages)
