import React from 'react'

import mapAvif from '@/assets/images/map@1x.avif'
import mapPng from '@/assets/images/map@1x.png'
import mapWebp from '@/assets/images/map@1x.webp'
import emailIconId from '@/assets/images/svg/email.svg'
import telegramIconId from '@/assets/images/svg/telegram.svg'
import whatsappIconId from '@/assets/images/svg/whatsapp.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './Stores.styled'

const _Stores = () => {
  return (
    <S.Section aria-labelledby={'stores-heading'}>
      <h2 id={'stores-heading'}>Store</h2>
      <S.StoreArticle aria-labelledby={'stores-current-store-heading'}>
        <S.StoreAddress id={'stores-current-store-heading'}>
          Uest-sentral-strit, London
        </S.StoreAddress>
        <table>
          <thead>
            <tr>
              <th align={'left'}>Work schedule</th>
              <th align={'left'}>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Seven days a week from <time dateTime={'10am'}>10:00 AM</time> to{' '}
                <time dateTime={'10pm'}>10:00 PM</time>
              </td>
              <td>
                <a href={'tel:#'}>+44 20 7234 3456</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <ul key={'social contacts'} style={{ display: 'flex', gap: '1rem' }}>
                  <li>
                    <a aria-label={'telegram contact'} href={'#'}>
                      <Icon height={32} id={telegramIconId} width={32} />
                    </a>
                  </li>
                  <li>
                    <a aria-label={'whatsapp contact'} href={'#'}>
                      <Icon height={32} id={whatsappIconId} width={32} />
                    </a>
                  </li>
                  <li>
                    <a aria-label={'email contact'} href={'#'}>
                      <Icon height={32} id={emailIconId} width={32} />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Learn more about store</button>
      </S.StoreArticle>
      <S.Map>
        <source srcSet={`${mapAvif} 1x`} type={'image/avif'} />
        <source srcSet={`${mapWebp} 1x`} type={'image/webp'} />
        <source srcSet={`${mapPng} 1x`} type={'image/png'} />
        <img alt={'map of selected store image'} loading={'lazy'} src={mapPng} />
      </S.Map>
    </S.Section>
  )
}

export const Stores = React.memo(_Stores)
