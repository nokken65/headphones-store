import React from 'react'

import beatsaudioSrc from '@/assets/images/brands/beatsaudio.png'
import { Marquee } from '@/shared/components/Marquee'

import * as S from './Brands.styled'

const _Subscribe = () => {
  return (
    <S.Section>
      <S.Section.Heading title={'Brands'} />
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
    </S.Section>
  )
}

export const Brands = React.memo(_Subscribe)
