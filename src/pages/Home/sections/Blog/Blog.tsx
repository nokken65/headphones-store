import React from 'react'

import { Section } from '@/shared/components/Section'

const _Blog = () => {
  return (
    <Section>
      <h2>Blog</h2>
      content
    </Section>
  )
}

export const Blog = React.memo(_Blog)
