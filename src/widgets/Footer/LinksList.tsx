import type { LinkIcon, LinkText } from './model/models'

import { Icon } from '@/shared/components/Icon'
import { linkStyles } from '@/shared/components/Link'
import clsx from 'clsx'

import styles from './LinksList.module.css'

type LinksListProps = { items: (LinkIcon[] | LinkText)[]; tabIndex?: number }

export const LinksList = ({ items, tabIndex = 0 }: LinksListProps) => {
  return (
    <ul role={'list'}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {Array.isArray(item) ? (
            <LinksListIcon items={item} />
          ) : (
            <a className={linkStyles.link} href={item.href} tabIndex={tabIndex}>
              {item.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

type LinksListIconProps = { items: LinkIcon[]; tabIndex?: number; className?: string }

export const LinksListIcon = ({ items, tabIndex = 0, className }: LinksListIconProps) => {
  return (
    <ul className={clsx(styles.listIcons, className)} role={'list'}>
      {items.map((item, index) => (
        <li key={index}>
          <a
            aria-label={item.label}
            className={linkStyles.link}
            href={item.href}
            tabIndex={tabIndex}
          >
            <Icon height={32} id={item.id} width={32} />
          </a>
        </li>
      ))}
    </ul>
  )
}
