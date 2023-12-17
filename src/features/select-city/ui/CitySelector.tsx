import React from 'react'

import { CitySelectorTrigger } from '@/entities/City'

const _CitySelector = () => {
  return (
    <>
      <CitySelectorTrigger />
    </>
  )
}

export const CitySelector = React.memo(_CitySelector)
