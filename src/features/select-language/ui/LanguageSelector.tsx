import React from 'react'

import { LanguageSelectorTrigger } from '@/entities/Language'

const _LanguageSelector = () => {
  return (
    <>
      <LanguageSelectorTrigger />
    </>
  )
}

export const LanguageSelector = React.memo(_LanguageSelector)
