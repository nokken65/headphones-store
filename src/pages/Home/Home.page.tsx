import React from 'react'

import { DefaultLayout } from '../layouts/Default'
// import { Advantages } from './sections/Advantages'
// import { Blog } from './sections/Blog'
// import { Brands } from './sections/Brands'
import { Hero } from './sections/Hero'
// import { PopularProducts } from './sections/PopularProducts'

// import { Stores } from './sections/Stores'
// import { Subscribe } from './sections/Subscribe'
// import { UsefulInformation } from './sections/UsefulInformation'

const _Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      {/* <PopularProducts /> */}
      {/* <Advantages /> */}
      {/* <Stores /> */}
      {/* <Blog />
      <Brands />
      <UsefulInformation />
      <Subscribe /> */}
    </DefaultLayout>
  )
}

export const Home = React.memo(_Home)
