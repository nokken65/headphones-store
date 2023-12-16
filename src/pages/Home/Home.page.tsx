import React from 'react'

import { DefaultLayout } from '../layouts/Default'
import { Advantages } from './sections/Advantages'
import { BestDeals } from './sections/BestDeals'
import { Blog } from './sections/Blog'
import { Brands } from './sections/Brands'
import { Hero } from './sections/Hero'
import { OurStores } from './sections/OurStores'
import { PopularProducts } from './sections/PopularProducts'
import { Subscribe } from './sections/Subscribe'
import { UsefulInformation } from './sections/UsefulInformation'

const _Home = () => {
  return (
    <DefaultLayout>
      <h1 hidden style={{ fontSize: 0 }}>
        Headphones store
      </h1>
      <Hero />
      <PopularProducts />
      <Advantages />
      <OurStores />
      <BestDeals />
      <Blog />
      <Brands />
      <UsefulInformation />
      <Subscribe />
    </DefaultLayout>
  )
}

export const Home = React.memo(_Home)
