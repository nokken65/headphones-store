import React from 'react'

import clockIconId, { size as clockSize } from '@/assets/images/svg/clock.svg'
import courierIconId, { size as courierSize } from '@/assets/images/svg/courier.svg'
import deliveryIconId, { size as deliverySize } from '@/assets/images/svg/delivery.svg'
import gearIconId, { size as gearSize } from '@/assets/images/svg/gear.svg'
import headphonesIconId, { size as headphonesSize } from '@/assets/images/svg/headphones.svg'
import microphoneIconId, { size as microphoneSize } from '@/assets/images/svg/microphone.svg'
import officialIconId, { size as officialSize } from '@/assets/images/svg/official.svg'
import starIconId, { size as starSize } from '@/assets/images/svg/star.svg'
import walletIconId, { size as walletSize } from '@/assets/images/svg/wallet.svg'

import { Icon } from '../components/Icon'

const ADVANTAGES_MAP: Record<string, { icon: React.ReactNode; text: string }> = {
  headphonesIconId: {
    icon: <Icon height={48} id={headphonesIconId} width={calcW(headphonesSize)} />,
    text: 'You can listen to everything before purchasing it',
  },
  deliveryIconId: {
    icon: <Icon height={48} id={deliveryIconId} width={calcW(deliverySize)} />,
    text: 'Delivery throughout Eurasia',
  },
  courierIconId: {
    icon: <Icon height={48} id={courierIconId} width={calcW(courierSize)} />,
    text: 'Own courier service for Europe and Asia',
  },
  officialIconId: {
    icon: <Icon height={48} id={officialIconId} width={calcW(officialSize)} />,
    text: 'Official product only',
  },
  clockIconId: {
    icon: <Icon height={48} id={clockIconId} width={calcW(clockSize)} />,
    text: 'We work seven days a week and holidays',
  },
  microphoneIconId: {
    icon: <Icon height={48} id={microphoneIconId} width={calcW(microphoneSize)} />,
    text: 'Own recording studio',
  },
  starIconId: {
    icon: <Icon height={48} id={starIconId} width={calcW(starSize)} />,
    text: 'Exclusive brands and products ',
  },
  gearIconId: {
    icon: <Icon height={48} id={gearIconId} width={calcW(gearSize)} />,
    text: 'Authorized Service Center',
  },
  walletIconId: {
    icon: <Icon height={48} id={walletIconId} width={calcW(walletSize)} />,
    text: 'Any payment methods, as well as credit and installments',
  },
}

export { ADVANTAGES_MAP }

function calcW({ width, height }: { width?: number | string; height?: number | string }) {
  if (width && height) {
    return (48 * +width) / +height
  }

  return 0
}
