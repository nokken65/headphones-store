import React from 'react'

import { Section } from '@/shared/components/Section'

const _PopularProducts = () => {
  return (
    <Section>
      <h2>Popular products</h2>
      content
    </Section>
  )
}

export const PopularProducts = React.memo(_PopularProducts)
