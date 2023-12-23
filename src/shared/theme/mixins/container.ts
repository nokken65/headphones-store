import { css } from 'styled-components'

type ContainerProps = {
  maxWidth?: number
  padding?: string
}

const container = (props?: ContainerProps) => {
  const { maxWidth = 1366, padding = '3rem' } = props ?? {}

  const { pt, pr, pb, pl } = getPaddings(padding.split(' '))

  return css`
    @media screen and (min-width: calc(${maxWidth}px + ${pl} + ${pr})) {
      padding: ${pt} calc((100dvw - ${maxWidth}px - var(--scrollbar-width)) / 2) ${pb}
        calc((100dvw - ${maxWidth}px - var(--scrollbar-width)) / 2);
    }
  `
}

function getPaddings(str: string[]) {
  switch (str.length) {
    case 0:
      return { pt: '0px', pr: '0px', pb: '0px', pl: '0px' }
    case 1:
      return { pt: str[0], pr: str[0], pb: str[0], pl: str[0] }
    case 2:
      return { pt: str[0], pr: str[1], pb: str[0], pl: str[1] }
    case 3:
      return { pt: str[0], pr: str[1], pb: str[2], pl: str[1] }
    case 4:
      return { pt: str[0], pr: str[1], pb: str[2], pl: str[3] }
    default:
      return { pt: '0px', pr: '0px', pb: '0px', pl: '0px' }
  }
}

export { container }
