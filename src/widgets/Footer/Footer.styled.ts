import { styled } from 'styled-components'

const Footer = styled.footer`
  padding: 4rem 4rem 1.5rem;
  color: ${({ theme }) => theme.colors.textInvert};
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, max-content);
  gap: 3rem 4rem;
`

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

const Copyright = styled.small`
  text-align: center;
  font-weight: 500;
  grid-column: 1 / 6;
`

export { Content, Copyright, Footer, SocialsList }
