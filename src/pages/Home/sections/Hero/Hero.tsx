import React from 'react'

import headphonesAvif from '@/assets/images/headphones/headphones_1@1x.avif'
import headphonesPng from '@/assets/images/headphones/headphones_1@1x.png'
import headphonesWebp from '@/assets/images/headphones/headphones_1@1x.webp'

import * as S from './Hero.styled'

const _Hero = () => {
  return (
    <S.Section>
      <S.Image>
        <source srcSet={`${headphonesAvif} 1x`} type={'image/avif'} />
        <source srcSet={`${headphonesWebp} 1x`} type={'image/webp'} />
        <source srcSet={`${headphonesPng} 1x`} type={'image/png'} />
        <img alt={'headphones name'} loading={'lazy'} src={headphonesPng} />
      </S.Image>

      <S.Small>Hear it. feel it</S.Small>
      <S.Slogan>move with the music</S.Slogan>

      <S.Category>Wireless headphones</S.Category>
      <S.Name>Headphones name</S.Name>
      <S.Price>
        $ 435 | <sup>$ 465</sup>
      </S.Price>
      <S.Action>buy now</S.Action>
    </S.Section>
  )
}

export const Hero = React.memo(_Hero)
