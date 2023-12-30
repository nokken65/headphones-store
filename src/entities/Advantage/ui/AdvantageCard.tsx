import type { Advantage } from '../model/models'

import { Icon } from '@/shared/components/Icon'

import * as styles from './AdvantageCard.css'

type AdvantageCardProps = Advantage

const AdvantageCard = ({ id, icon, title }: AdvantageCardProps) => {
  return (
    <article aria-labelledby={id} className={styles.card}>
      <Icon height={48} id={icon.id} width={calcW(icon.width, icon.height)} />
      <h3 id={id}>{title}</h3>
    </article>
  )
}

export { AdvantageCard }

function calcW(width: number | string | undefined, height: number | string | undefined) {
  if (width && height) {
    return (48 * +width) / +height
  }

  return 0
}
