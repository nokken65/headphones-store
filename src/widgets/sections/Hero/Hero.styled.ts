import type { AccentColorNames } from '@/shared/theme'

import { Section } from '@/shared/components/Section'
import { ACCENT_COLOR_GRADIENTS_MAP } from '@/shared/constants'
import { styled } from 'styled-components'

type HeroProps = {
  $accentColor: AccentColorNames
}

const Hero = styled(Section)<HeroProps>(props => ({
  '::before': {
    background: ACCENT_COLOR_GRADIENTS_MAP[props.$accentColor],
    bottom: 0,
    content: '""',
    height: '100%',
    left: 0,
    opacity: 0.8,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: -100,
  },
  position: 'relative',
}))

export { Hero }
export type { HeroProps }
