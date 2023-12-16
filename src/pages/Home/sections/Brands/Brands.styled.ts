import { Card } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Item = styled(Card)(({ theme }) => ({
  width: '18.75rem',
  minWidth: '18.75rem',
  padding: '48px 24px',

  '& img': {
    width: '100%',
  },
}))

export { Item }
