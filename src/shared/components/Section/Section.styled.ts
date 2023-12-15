import { styled } from 'styled-components'

const Section = styled.section(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing['2xl'],
  width: theme.spacing.full,
  minWidth: theme.spacing.full,
  height: theme.spacing.full,
  overflow: 'hidden',
  padding: '4rem 0',
  backgroundColor: theme.colors.background,
}))

export { Section }
