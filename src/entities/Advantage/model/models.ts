type AdvantageIcon = {
  id: string
  width?: number | string
  height?: number | string
}

type Advantage = {
  id: string
  icon: AdvantageIcon
  title: string
}

export type { Advantage, AdvantageIcon }
