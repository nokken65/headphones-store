import React from 'react'

import { Footer } from '@/widgets/Footer'
// import { Header } from '@/widgets/Header/ui'

type DefaultLayoutProps = React.PropsWithChildren

const _DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export const DefaultLayout = React.memo(_DefaultLayout)
