import React from 'react'

import image from '@/assets/images/headphones_1.png'
import arrowIconId from '@/assets/images/svg/arrow.svg'

import * as S from './Hero.styled'

const _Hero = () => {
  return (
    <S.Section>
      <S.Image alt={'alt'} src={image} style={{ width: '100%', height: '100%' }} />

      <S.Small>Hear it. feel it</S.Small>
      <S.Slogan>move with the music</S.Slogan>

      <S.Category>Wireless headphones</S.Category>
      <S.Name>Headphones name</S.Name>
      <S.Price>
        $ 435 | <sup>$ 465</sup>
      </S.Price>
      <S.Action>buy now</S.Action>

      <S.PreviousIcon height={24} id={arrowIconId} width={14} />
      <S.NextIcon height={24} id={arrowIconId} width={14} />
    </S.Section>
  )
}

export const Hero = React.memo(_Hero)
