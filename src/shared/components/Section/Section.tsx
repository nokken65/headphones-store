import { styled } from 'styled-components'

const Section = styled.div(({ theme }) => ({
  alignItems: 'flex-start',
  display: 'flex',
  gap: theme.spacing['2xl'],
  height: '100%',
  justifyContent: 'space-between',
  minHeight: '100vh',
  minWidth: '100%',
  overflow: 'hidden',
  padding: theme.spacing['2xl'],
  width: '100%',
}))

export { Section }
