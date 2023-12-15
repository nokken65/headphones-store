import { styled } from 'styled-components'

const Heading = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: theme.spacing.full,
  padding: '0 3rem',
}))

const Title = styled.h2(({ theme }) => ({
  color: '#0A0A0A',
  fontFamily: theme.fontFamily,
  fontSize: '3rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: theme.spacing.full,
}))

export { Heading, Title }
