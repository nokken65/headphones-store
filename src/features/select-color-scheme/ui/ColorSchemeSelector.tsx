import React from 'react'

import { ColorSchemeSelectorTrigger } from '@/entities/ColorScheme'

const _ColorSchemeSelector = () => {
  return (
    <>
      <ColorSchemeSelectorTrigger />
    </>
  )
}

export const ColorSchemeSelector = React.memo(_ColorSchemeSelector)
