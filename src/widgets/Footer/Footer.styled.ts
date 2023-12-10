import { Section } from '@/shared/components/Section'
import { ACCENT_COLOR_MAP } from '@/shared/constants'
import { AccentColorNames } from '@/shared/theme'
import { styled } from 'styled-components'

type FooterProps = {
  $accentColor: AccentColorNames
}

const Footer = styled.footer<FooterProps>(props => ({
  backgroundColor: ACCENT_COLOR_MAP[props.$accentColor],
  height: '320px',
  maxHeight: '320px',
  paddingBottom: '62px',
}))

export { Footer }
