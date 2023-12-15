import { styled } from 'styled-components'

const Card = styled.article(({ theme }) => ({
  padding: '1.5rem',
  backgroundColor: theme.colors.cardBackground,
  border: '1px solid',
  borderColor: theme.colors.cardBorder,
  borderRadius: '1rem',
}))

export { Card }
