import React from 'react'

import { Header } from '@/widgets/Header'
import { Logo } from '@/widgets/Logo'

import { DefaultLayout } from '../layouts/Default'
import { Advantages } from './sections/Advantages'
import { BestDeals } from './sections/BestDeals'
import { Blog } from './sections/Blog'
import { Brands } from './sections/Brands'
import { Hero } from './sections/Hero'
import { PopularProducts } from './sections/PopularProducts'
import { Stores } from './sections/Stores'
import { Subscribe } from './sections/Subscribe'
import { UsefulInformation } from './sections/UsefulInformation'

const _Home = () => {
  return (
    <DefaultLayout>
      <Logo />
      <Hero />
      <Header />
      <PopularProducts />
      <Advantages />
      <Stores />
      <BestDeals />
      <Blog />
      <Brands />
      <UsefulInformation />
      <Subscribe />
    </DefaultLayout>
  )
}

export const Home = React.memo(_Home)
