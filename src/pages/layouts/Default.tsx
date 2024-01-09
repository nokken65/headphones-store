import React from 'react'

import { Menu } from '@/widgets/Menu'

type DefaultLayoutProps = React.PropsWithChildren

const _DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  )
}

export const DefaultLayout = React.memo(_DefaultLayout)
