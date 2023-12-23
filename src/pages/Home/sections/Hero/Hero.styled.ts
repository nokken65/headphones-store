import { styled } from 'styled-components'

const Image = styled.picture`
  flex: 0 1 50vw;
  justify-self: flex-end;

  & img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: calc(32dvw + 2dvh);
    display: block;
    margin: 0 auto;
  }
`

const Section = styled.section`
  @media screen and (max-width: 576px) {
    & {
      flex-direction: column;
      padding: 10dvh 4dvh;
    }

    & ${Image} {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      /* height: 100%;
      flex-basis: auto; */
      /* margin-bottom: auto; */
    }
  }

  color: ${({ theme }) => theme.colors.textContrast};
  background-color: transparent;
  min-height: 100dvh;
  height: 100dvh;
  padding: 10dvw 4dvw;

  display: flex;
  gap: 3rem;
  align-items: center;
`

const TextContent = styled.div`
  flex: 0 1 50vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Small = styled.small`
  font-size: 1.375dvw;
  font-weight: 500;
  letter-spacing: 0.1375rem;
  text-transform: uppercase;
`

const Slogan = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: clamp(1rem, 0.5rem + 6vw, 8rem);
  font-weight: 700;
  text-transform: uppercase;
`

const Category = styled.p`
  font-size: 1dvw;
  opacity: 0.8;
`

const Name = styled.h2`
  font-size: 2dvw;
  font-weight: 500;
  line-height: 1;
`

const Price = styled.p`
  font-size: 2.75dvw;
  font-weight: 700;

  & > sup {
    opacity: 0.5;
    font-size: 1.8dvw;
    font-weight: 500;
    line-height: 1.2;
    text-decoration-line: line-through;
  }
`

const Action = styled.button`
  background-color: transparent;
  color: inherit;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 1.5rem;
  border: 2px solid #fafafa;
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
`

export { Action, Category, Image, Name, Price, Section, Slogan, Small, TextContent }
