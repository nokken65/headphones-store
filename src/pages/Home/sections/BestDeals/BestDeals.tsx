import React from 'react'

import headphonesAvifSrc from '@/assets/images/headphones/headphones_1@1x.avif'
import headphonesPngSrc from '@/assets/images/headphones/headphones_1@1x.png'
import headphonesWebpSrc from '@/assets/images/headphones/headphones_1@1x.webp'
import { Product, ProductPreviewCard } from '@/entities/Product'
import { Marquee } from '@/shared/components/Marquee'
import { Section } from '@/shared/components/Section'

const genProducts = () => {
  return [...Array(7)].map<Product>((_, index) => ({
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

const _BestDeals = () => {
  return (
    <Section>
      <h2>Best deals</h2>
      <Marquee
        items={genProducts().map((product, index) => (
          <li key={index}>
            <ProductPreviewCard {...product} />
          </li>
        ))}
      />
    </Section>
  )
}

export const BestDeals = React.memo(_BestDeals)
