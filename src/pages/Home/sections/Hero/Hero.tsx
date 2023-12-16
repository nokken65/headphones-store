import React from 'react'

import image from '@/assets/images/headphones_1.png'
import { Section } from '@/shared/components/Section'

const _Hero = () => {
  return (
    <Section>
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: '6.25rem 6.62rem',
          // paddingRight: 0,
        }}
      >
        <img
          alt={''}
          src={image}
          style={{ aspectRatio: '1/1', objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '2.1875rem' }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: '22px',
            textTransform: 'uppercase',
            letterSpacing: '10%',
            lineHeight: '140%',
          }}
        >
          Hear it. Feel it
        </p>
        <p
          style={{
            fontSize: '6.25rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '100%',
            textTransform: 'uppercase',
          }}
        >
          Move with the music
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <p
            style={{
              fontSize: '2.75rem',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '130%',
            }}
          >
            $ 435
          </p>
          <span
            style={{
              width: '4px',
              height: '60px',
              backgroundColor: '#fff',
              opacity: 0.5,
              borderRadius: '1rem',
            }}
          />
          <p
            style={{
              fontSize: '1.9375rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '140%',
              textDecorationLine: 'strikethrough',
              opacity: 0.5,
            }}
          >
            $ 465
          </p>
        </div>
        <button
          style={{
            fontSize: '1.375rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '140%',
            textTransform: 'uppercase',
            borderRadius: '1.5rem',
            border: '2px solid #FAFAFA',
            backgroundColor: 'transparent',
            color: '#FAFAFA',

            width: 'fit-content',
            display: 'flex',
            padding: '0.9375rem 1.875rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Buy now
        </button>
      </div>
    </Section>
  )
}

export const Hero = React.memo(_Hero)
