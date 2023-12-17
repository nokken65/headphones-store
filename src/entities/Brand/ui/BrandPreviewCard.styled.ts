import { Card as BaseCard } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Card = styled(BaseCard)`
  width: 18.75rem;
  min-width: 18.75rem;
  padding: 3rem 1.5rem;
`

const Image = styled.img`
  width: 100%;
`

export { Card, Image }
