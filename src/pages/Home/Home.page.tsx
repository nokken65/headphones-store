import React from 'react'

import { DefaultLayout } from '../layouts/Default'
// import { Advantages } from './sections/Advantages'
// import { Blog } from './sections/Blog'
// import { Brands } from './sections/Brands'
import { Hero } from './sections/Hero'
// import { PopularProducts } from './sections/PopularProducts'

// import { Stores } from './sections/Stores'
// import { Subscribe } from './sections/Subscribe'
const Advantages = React.lazy(() => import('./sections/Advantages'))
const Blog = React.lazy(() => import('./sections/Blog'))
const Brands = React.lazy(() => import('./sections/Brands'))
const UsefulInformation = React.lazy(() => import('./sections/UsefulInformation'))
const Subscribe = React.lazy(() => import('./sections/Subscribe'))

const _Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      {/* <PopularProducts /> */}
      <React.Suspense>
        <Advantages />
      </React.Suspense>
      {/* <Stores /> */}
      <React.Suspense>
        <Blog />
      </React.Suspense>
      <React.Suspense>
        <Brands />
      </React.Suspense>
      <React.Suspense>
        <UsefulInformation />
      </React.Suspense>
      <React.Suspense>
        <Subscribe />
      </React.Suspense>
    </DefaultLayout>
  )
}

export const Home = React.memo(_Home)
