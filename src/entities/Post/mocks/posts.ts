import type { Post } from '../model/models'

import coverAvifSrc from '@/assets/images/blog/cover_1@1x.avif'
import coverPngSrc from '@/assets/images/blog/cover_1@1x.png'
import coverWebpSrc from '@/assets/images/blog/cover_1@1x.webp'

const POSTS: Post[] = generatePosts()

export { POSTS }

function generatePosts() {
  return [...Array(6)].map<Post>((_, index) => ({
    id: 'post-' + index,
    title: 'Awards 2023: what to expect from the main award of the year?',
    date: new Date(),
    views: 2597,
    tags: [
      { label: 'News', href: '#' },
      { label: 'Articles', href: '#' },
    ],
    cover: { original: coverPngSrc, avif: coverAvifSrc, webp: coverWebpSrc },
  }))
}
