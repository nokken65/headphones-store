import React from 'react'

import { ColorSchemeSelectorTrigger } from './ColorSchemeSelectorTrigger'

const _ColorSchemeSelector = () => {
  return (
    <>
      <ColorSchemeSelectorTrigger />
    </>
  )
}

export const ColorSchemeSelector = React.memo(_ColorSchemeSelector)
