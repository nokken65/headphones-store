import type { Post } from '../model/models'

import eyeIconId from '@/assets/images/svg/eye.svg'
import { Icon } from '@/shared/components/Icon'
import { formatDate } from '@/shared/utils/formatDate'

import * as S from './PostPreviewCard.styled'

type PostPreviewCardProps = Post

const PostPreviewCard = ({ title, date, views, cover, tags }: PostPreviewCardProps) => {
  return (
    <S.Card aria-label={`${title} post`}>
      <picture>
        <source srcSet={`${cover.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${cover.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${cover.original} 1x`} type={'image/png'} />
        <S.Image alt={`${title} post image cover`} loading={'lazy'} src={cover.original} />
      </picture>
      <S.TagList>
        {tags.map(tag => (
          <li key={tag.label}>
            <S.Tag href={tag.href}>{tag.label}</S.Tag>
          </li>
        ))}
      </S.TagList>
      <S.Title>{title}</S.Title>
      <S.Footer>
        <time dateTime={formatDate(date, { separator: '-' })}>
          {formatDate(date, { separator: '.' })}
        </time>
        <span>
          <Icon id={eyeIconId} />
          {views}
        </span>
      </S.Footer>
    </S.Card>
  )
}

export { PostPreviewCard }
