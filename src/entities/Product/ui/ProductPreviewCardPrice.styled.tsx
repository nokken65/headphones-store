import { styled } from 'styled-components'

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`

const RegularPriceWrapper = styled.div`
  font-weight: 500;
`
const RegularPrice = styled.span`
  opacity: 0.5;
  margin-right: 0.5rem;
  text-decoration-line: line-through;
  vertical-align: middle;
`

const Sale = styled.b`
  vertical-align: text-top;
  font-size: 0.75rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.colors.textInvert};
  background-color: ${({ theme }) => theme.colors.accent};
`

export { Price, RegularPrice, RegularPriceWrapper, Sale }
