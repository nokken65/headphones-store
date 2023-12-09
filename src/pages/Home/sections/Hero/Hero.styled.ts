import { Section } from '@/shared/components/Section'
import { type AccentColorNames, blueGradient, cyanGradient, redGradient } from '@/shared/theme'
import { styled } from 'styled-components'

const mapper: Record<AccentColorNames, string> = {
  blue: blueGradient,
  cyan: cyanGradient,
  red: redGradient,
}

type HeroProps = {
  accentColor: AccentColorNames
}

const Hero = styled(Section)<HeroProps>(({ accentColor }) => ({
  '::before': {
    background: mapper[accentColor],
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
