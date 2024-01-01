import { PartialRecord } from 'ramda'

import { FORMATS } from './constants'

type Format = (typeof FORMATS)[number]

type SourceSrcSet = Record<string, string>
type SourceMedia = string
type SourceSizes = string[]
type Source = { srcSet: SourceSrcSet; media?: SourceMedia; sizes?: SourceSizes }
type Sources = PartialRecord<Format, Source | Source[]> & { fallback: string }

export type { Format, Source, SourceMedia, SourceSizes, SourceSrcSet, Sources }
