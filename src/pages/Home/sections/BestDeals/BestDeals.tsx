import React from 'react'

import image from '@/assets/images/headphones/headphones_1@1x.png'
import cartIconId from '@/assets/images/svg/cart.svg'
import starIconId from '@/assets/images/svg/star.svg'
import { Icon } from '@/shared/components/Icon'
import { Marquee } from '@/shared/components/Marquee'
import { Section } from '@/shared/components/Section'

import * as S from './BestDeals.styled'

const Card = () => (
  <S.Card>
    <S.Image alt={'image'} src={image} />
    <S.Category>Wireless headphones</S.Category>
    <S.Name>Headphones name</S.Name>
    <S.Rating>
      <Icon height={16} id={starIconId} width={16} />
      4.89
    </S.Rating>
    <S.Price>$ 256</S.Price>
    <S.OldPriceWrapper>
      <S.OldPrice>$ 298</S.OldPrice>
      <S.Sale>-11%</S.Sale>
    </S.OldPriceWrapper>
    <S.AddToCart>
      add to cart
      <Icon height={16} id={cartIconId} width={16} />
    </S.AddToCart>
  </S.Card>
)

const _BestDeals = () => {
  return (
    <Section>
      <h2>Best deals</h2>
      <Marquee
        items={[...Array(7)].map((_, index) => (
          <li key={index}>
            <Card />
          </li>
        ))}
      />
    </Section>
  )
}

export const BestDeals = React.memo(_BestDeals)
