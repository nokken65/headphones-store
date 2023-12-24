import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

const Footer = styled.footer`
  padding: 3rem 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.textContrast};

  @media screen and (min-width: 576px) {
    padding: 3rem 3rem 1.5rem;
  }

  ${container({ padding: '3rem 1rem 1.5rem' })}
`

const NavWrapper = styled.div`
  display: flex;

  gap: 2rem;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 5rem;
    flex-direction: row;
  }
`

const SocialsList = styled.nav`
  margin-top: 3rem;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
`

const Copyright = styled.small`
  text-align: center;
  font-weight: 500;
  margin: 3rem auto 0;
  display: block;
`

export { Copyright, Footer, NavWrapper, SocialsList }
