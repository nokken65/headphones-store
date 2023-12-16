import { styled } from 'styled-components'

const Section = styled.section`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background};

  & > h2 {
    margin-bottom: 3rem;
  }
`

export { Section }
