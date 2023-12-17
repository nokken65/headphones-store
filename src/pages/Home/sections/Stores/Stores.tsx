import React from 'react'

import ymap from '@/assets/images/map.png'
import emailIconId from '@/assets/images/svg/email.svg'
import telegramIconId from '@/assets/images/svg/telegram.svg'
import whatsappIconId from '@/assets/images/svg/whatsapp.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './Stores.styled'

const _Stores = () => {
  return (
    <S.Section>
      <h2>Store</h2>
      <S.Store>
        <S.StoreAddress>Uest-sentral-strit, London</S.StoreAddress>
        <table>
          <thead>
            <tr>
              <th align={'left'}>Work schedule</th>
              <th align={'left'}>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seven days a week from 10:00 AM to 10:00 PM</td>
              <td>
                <a href={'tel:#'}>+44 20 7234 3456</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <ul key={'social contacts'} style={{ display: 'flex', gap: '1rem' }}>
                  <li>
                    <a href={'#'}>
                      <Icon height={32} id={telegramIconId} width={32} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <Icon height={32} id={whatsappIconId} width={32} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <Icon height={32} id={emailIconId} width={32} />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Learn more about store</button>
      </S.Store>
      <S.Map alt={'map'} src={ymap} />
    </S.Section>
  )
}

export const Stores = React.memo(_Stores)
