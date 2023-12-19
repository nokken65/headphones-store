import React from 'react'

import headphonesAvifSrc from '@/assets/images/headphones/headphones_1@1x.avif'
import headphonesPngSrc from '@/assets/images/headphones/headphones_1@1x.png'
import headphonesWebpSrc from '@/assets/images/headphones/headphones_1@1x.webp'
import { Product, ProductPreviewCard } from '@/entities/Product'

import * as S from './PopularProducts.styled'
import { PopularProductsTimeTabs } from './PopularProductsTimeTabs'

export const TIME = ['for-yesterday', 'for-3-days', 'per-week', 'per-month']

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
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <S.Section aria-labelledby={'popular-products-heading'}>
      <S.Header aria-labelledby={'popular-products-heading'}>
        <h2 id={'popular-products-heading'}>Popular products</h2>
        <PopularProductsTimeTabs active={activeTab} onChange={setActiveTab} />
      </S.Header>
      {/* Simulate multiple tabpanel content  */}
      {[...new Array(4)].map((_, index) => (
        <div
          aria-labelledby={`${TIME[index]}-tab`}
          hidden={activeTab !== index}
          id={`popular-products-tabpanel-${index}`}
          key={index}
          role={'tabpanel'}
          tabIndex={0}
        >
          <S.Grid>
            {genProducts().map((product, index) => (
              <li key={index}>
                <ProductPreviewCard {...product} />
              </li>
            ))}
          </S.Grid>
        </div>
      ))}
    </S.Section>
  )
}

export const PopularProducts = React.memo(_PopularProducts)
