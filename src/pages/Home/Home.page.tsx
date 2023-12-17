import React from 'react'

import { Logo } from '@/widgets/Logo'

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
      <Logo />
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
