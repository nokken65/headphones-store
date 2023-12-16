import React from 'react'

import { Section } from '@/shared/components/Section'

const _OurStores = () => {
  return (
    <Section>
      <h2 hidden>Our stores</h2>
      content
    </Section>
  )
}

export const OurStores = React.memo(_OurStores)
