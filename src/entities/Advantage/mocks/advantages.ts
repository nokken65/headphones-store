import clockIconId, { size as clockSize } from '@/assets/images/svg/clock.svg'
import courierIconId, { size as courierSize } from '@/assets/images/svg/courier.svg'
import deliveryIconId, { size as deliverySize } from '@/assets/images/svg/delivery.svg'
import gearIconId, { size as gearSize } from '@/assets/images/svg/gear.svg'
import headphonesIconId, { size as headphonesSize } from '@/assets/images/svg/headphones.svg'
import microphoneIconId, { size as microphoneSize } from '@/assets/images/svg/microphone.svg'
import officialIconId, { size as officialSize } from '@/assets/images/svg/official.svg'
import starIconId, { size as starSize } from '@/assets/images/svg/star.svg'
import walletIconId, { size as walletSize } from '@/assets/images/svg/wallet.svg'

import { Advantage } from '../model/models'

const ADVANTAGES: Advantage[] = [
  {
    id: headphonesIconId,
    icon: {
      id: headphonesIconId,
      ...headphonesSize,
    },
    title: 'You can listen to everything before purchasing it',
  },
  {
    id: deliveryIconId,
    icon: {
      id: deliveryIconId,
      ...deliverySize,
    },
    title: 'Delivery throughout Eurasia',
  },
  {
    id: courierIconId,
    icon: {
      id: courierIconId,
      ...courierSize,
    },
    title: 'Own courier service for Europe and Asia',
  },
  {
    id: officialIconId,
    icon: {
      id: officialIconId,
      ...officialSize,
    },
    title: 'Official product only',
  },
  {
    id: clockIconId,
    icon: {
      id: clockIconId,
      ...clockSize,
    },
    title: 'We work seven days a week and holidays',
  },
  {
    id: microphoneIconId,
    icon: {
      id: microphoneIconId,
      ...microphoneSize,
    },
    title: 'Own recording studio',
  },
  {
    id: starIconId,
    icon: {
      id: starIconId,
      ...starSize,
    },
    title: 'Exclusive brands and products ',
  },
  {
    id: gearIconId,
    icon: {
      id: gearIconId,
      ...gearSize,
    },
    title: 'Authorized Service Center',
  },
  {
    id: walletIconId,
    icon: {
      id: walletIconId,
      ...walletSize,
    },
    title: 'Any payment methods, as well as credit and installments',
  },
]

export { ADVANTAGES }

// function calcW({ width, height }: { width?: number | string; height?: number | string }) {
//   if (width && height) {
//     return (48 * +width) / +height
//   }

//   return 0
// }
