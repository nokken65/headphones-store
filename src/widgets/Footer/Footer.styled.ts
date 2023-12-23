import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

import { NavigationSection } from './NavigationSection'

const Footer = styled.footer`
  padding: 3rem 3rem 1.5rem;
  color: ${({ theme }) => theme.colors.textContrast};

  ${container({ padding: '3rem 3rem 1.5rem' })}/* & > div > nav {
    width: max-content;
  } */
`

const NavWrapper = styled.div`
  display: flex;
  gap: 3rem;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const SocialsList = styled(NavigationSection)`
  margin-top: 3rem;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin-left: 0 auto;
  }
`

const Copyright = styled.small`
  text-align: center;
  font-weight: 500;
  margin: 3rem auto 0;
  display: block;
`

export { Copyright, Footer, NavWrapper, SocialsList }
