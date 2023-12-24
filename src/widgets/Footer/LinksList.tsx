import { Icon } from '@/shared/components/Icon'

import * as S from './LinksList.styled'
import { LinkIcon, LinkText } from './model/models'

type LinksListProps = { items: (LinkIcon[] | LinkText)[] }

export const LinksList = ({ items }: LinksListProps) => {
  return (
    <S.List>
      {items.map((item, index) => (
        <li key={index}>
          {Array.isArray(item) ? (
            <LinksListIcon items={item} />
          ) : (
            <a href={item.href}>{item.text}</a>
          )}
        </li>
      ))}
    </S.List>
  )
}

type LinksListIconProps = { items: LinkIcon[] }

export const LinksListIcon = ({ items }: LinksListIconProps) => {
  return (
    <S.ListIcon>
      {items.map((item, index) => (
        <li key={index}>
          <a aria-label={item.label} href={item.href}>
            <Icon height={32} id={item.id} width={32} />
          </a>
        </li>
      ))}
    </S.ListIcon>
  )
}
