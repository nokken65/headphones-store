import { Link, linkStyles } from '@/shared/components/Link'

import styles from './LinksList.module.css'

import { NavLink } from '../model/models'

type LinksListProps = { items: NavLink[]; tabIndex?: number }

export const LinksList = ({ items, tabIndex = 0 }: LinksListProps) => {
  return (
    <ul role={'list'}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <Link
            className={linkStyles.link}
            params={item.params ?? {}}
            tabIndex={tabIndex}
            to={item.to}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
