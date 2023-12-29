import React from 'react'

// import { Footer } from '@/widgets/Footer'
// import { Header } from '@/widgets/Header'

type DefaultLayoutProps = React.PropsWithChildren

const _DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export const DefaultLayout = React.memo(_DefaultLayout)
