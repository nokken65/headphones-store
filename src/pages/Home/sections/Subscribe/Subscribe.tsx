import React from 'react'

import { Section } from '@/shared/components/Section'

import * as S from './Subscribe.styled'

const _Subscribe = () => {
  return (
    <Section
      css={`
        text-align: center;
      `}
    >
      <h3>Subscribe to our newsletters</h3>
      <S.Description>
        Join our mailing list to receive exclusive offers, promotions & product updates!
      </S.Description>
      <form onSubmit={event => event.preventDefault()}>
        <label>
          <input placeholder={'Enter your email address...'} type={'email'} />
        </label>
        <button type={'submit'}>Subscribe</button>
      </form>
    </Section>
  )
}

export const Subscribe = React.memo(_Subscribe)
