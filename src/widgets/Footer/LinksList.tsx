import { Icon } from '@/shared/components/Icon'

import * as S from './LinksList.styled'
import { LinkIcon, LinkText } from './model/models'

type LinksListProps = { items: (LinkIcon[] | LinkText)[]; tabIndex?: number }

export const LinksList = ({ items, tabIndex = 0 }: LinksListProps) => {
  return (
    <S.List>
      {items.map((item, index) => (
        <li key={index}>
          {Array.isArray(item) ? (
            <LinksListIcon items={item} />
          ) : (
            <a href={item.href} tabIndex={tabIndex}>
              {item.text}
            </a>
          )}
        </li>
      ))}
    </S.List>
  )
}

type LinksListIconProps = { items: LinkIcon[]; tabIndex?: number }

export const LinksListIcon = ({ items, tabIndex = 0 }: LinksListIconProps) => {
  return (
    <S.ListIcon>
      {items.map((item, index) => (
        <li key={index}>
          <a aria-label={item.label} href={item.href} tabIndex={tabIndex}>
            <Icon height={32} id={item.id} width={32} />
          </a>
        </li>
      ))}
    </S.ListIcon>
  )
}
