import { styled } from 'styled-components'

const Footer = styled.footer(({ theme }) => ({
  padding: '4rem 4rem 1.5rem',
  color: theme.colors.textInvert,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
}))

const Content = styled.div(() => ({
  width: '100%',
  display: 'flex',
  gap: '4rem',
}))

const SocialsList = styled.ul(() => ({
  marginLeft: 'auto',

  '& li:not(:last-of-type)': {
    marginBottom: '1rem',
  },
}))

const Copyright = styled.small(() => ({
  fontWeight: 500,
}))

export { Content, Copyright, Footer, SocialsList }
