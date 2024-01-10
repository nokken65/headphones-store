import React from 'react'

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
    <>
      <Hero />
      {/* <PopularProducts /> */}
      {/* <Advantages /> */}
      {/* <Stores /> */}
      {/* <Blog />
      <Brands />
      <UsefulInformation />
      <Subscribe /> */}
    </>
  )
}

export const Home = React.memo(_Home)
