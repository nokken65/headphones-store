import { styled } from 'styled-components'

const Content = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing.full,
  height: theme.spacing.full,
}))

export { Content }
