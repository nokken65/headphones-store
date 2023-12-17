import React from 'react'

import headphonesAvifSrc from '@/assets/images/headphones/headphones_1@1x.avif'
import headphonesPngSrc from '@/assets/images/headphones/headphones_1@1x.png'
import headphonesWebpSrc from '@/assets/images/headphones/headphones_1@1x.webp'
import { Product, ProductPreviewCard } from '@/entities/Product'
import { Section } from '@/shared/components/Section'

import * as S from './PopularProducts.styled'
import { PopularProductsSelectTime } from './PopularProductsSelectTime'

const genProducts = () => {
  return [...Array(5)].map<Product>((_, index) => ({
    name: 'Headphones name',
    category: 'Wireless headphones',
    rating: 4.67,
    price: {
      currentvalue: index % 2 === 0 ? 456 : 512,
      isSale: index % 2 === 0,
      regularValue: 512,
      saleValue: index % 2 === 0 ? 456 : undefined,
      unit: 'usd',
    },
    image: {
      original: headphonesPngSrc,
      avif: headphonesAvifSrc,
      webp: headphonesWebpSrc,
    },
  }))
}

const _PopularProducts = () => {
  return (
    <Section>
      <S.Header>
        <h2>Popular products</h2>
        <PopularProductsSelectTime />
      </S.Header>
      <S.Grid>
        {genProducts().map((product, index) => (
          <li key={index}>
            <ProductPreviewCard {...product} />
          </li>
        ))}
      </S.Grid>
    </Section>
  )
}

export const PopularProducts = React.memo(_PopularProducts)
