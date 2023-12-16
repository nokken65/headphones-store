import React from 'react'

import beatsaudioSrc from '@/assets/images/brands/beatsaudio.png'
import { Marquee } from '@/shared/components/Marquee'
import { Section } from '@/shared/components/Section'

import * as S from './Brands.styled'

const _Subscribe = () => {
  return (
    <Section>
      <h2>Brands</h2>
      <Marquee
        items={[
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
          beatsaudioSrc,
        ].map((src, index) => (
          <S.Item as={'li'} key={index}>
            <img alt={'brand'} src={src} />
          </S.Item>
        ))}
      />
    </Section>
  )
}

export const Brands = React.memo(_Subscribe)
