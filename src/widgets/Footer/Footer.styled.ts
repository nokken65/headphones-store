import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

const Footer = styled.footer`
  padding: 3rem 0rem 1.5rem;
  color: ${({ theme }) => theme.colors.textContrast};

  ${container({ padding: '3rem 3rem 1.5rem' })}
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > nav {
    padding: 1rem 1rem;

    &:not(:last-of-type) {
      border-bottom: 2px solid #fff;

      @media screen and (min-width: 768px) {
        border-bottom: none;
      }
    }

    @media screen and (min-width: 576px) {
      padding: 1rem 3rem;
    }

    @media screen and (min-width: 768px) {
      padding: 0rem 0rem;

      &:first-of-type {
        padding-left: 3rem;
      }

      &:last-of-type {
        padding-right: 3rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    gap: 3rem;
    flex-direction: row;
  }

  @media screen and (min-width: 992px) {
    gap: 5rem;
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
