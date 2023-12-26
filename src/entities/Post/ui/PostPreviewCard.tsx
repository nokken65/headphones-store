import type { Post } from '../model/models'

import eyeIconId from '@/assets/images/svg/eye.svg'
import { Icon } from '@/shared/components/Icon'
import { formatDate } from '@/shared/utils/formatDate'

import * as S from './PostPreviewCard.styled'

type PostPreviewCardProps = Post

const PostPreviewCard = ({ id, title, date, views, cover, tags }: PostPreviewCardProps) => {
  return (
    <S.Card aria-labelledby={`post-heading-${id}`}>
      <picture>
        <source srcSet={`${cover.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${cover.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${cover.original} 1x`} type={'image/png'} />
        <S.Image alt={`${title} post image cover`} loading={'lazy'} src={cover.original} />
      </picture>
      {/* FIXME: a11y */}
      <S.TagList>
        {tags.map(tag => (
          <S.Tag key={tag.label}>{tag.label}</S.Tag>
        ))}
      </S.TagList>
      <S.Title id={`post-heading-${id}`}>
        <S.Link aria-labelledby={`post-heading-${id}`} href={'#' + id}>
          {title}
        </S.Link>
      </S.Title>
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
