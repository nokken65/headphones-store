import { styled } from 'styled-components'

const Section = styled.section`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  & > h2 {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 3rem;
`

export { Description, Section }
