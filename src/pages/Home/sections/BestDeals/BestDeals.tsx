import React from 'react'

import { Section } from '@/shared/components/Section'

const _BestDeals = () => {
  return (
    <Section>
      <h2>Best deals</h2>
      content
    </Section>
  )
}

export const BestDeals = React.memo(_BestDeals)
