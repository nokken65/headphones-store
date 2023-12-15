import React from 'react'

const SectionContext = React.createContext<{} | null>(null)

const useSectionContext = () => {
  const context = React.useContext(SectionContext)

  if (!context) {
    throw new Error('Child components of Section cannot be rendered outside the Section component!')
  }

  return context
}

export { SectionContext, useSectionContext }
