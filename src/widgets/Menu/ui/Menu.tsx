import { containerStyles } from '@/shared/components/Container'
import { Link } from '@/shared/components/Link'
import { routes } from '@/shared/config/routes'
import { BurgerIcon } from '@/shared/icons/Burger'
import { LogoIcon } from '@/shared/icons/Logo'
import { SearchIcon } from '@/shared/icons/Search'
import clsx from 'clsx'

import styles from './Menu.module.css'

import { NavLink } from '../model/models'
import { NavigationSection } from './NavigationSection'

type TNavigationSection<Item = NavLink> = {
  heading: string
  items: Item[]
}

const NAVIGATION_LISTS: TNavigationSection[] = [
  {
    heading: 'Featured',
    items: [
      { label: 'Headphones', to: routes.notFound.route, params: { category: 'headphones' } },
      { label: 'Earphones', to: routes.notFound.route, params: { category: 'earphones' } },
      { label: 'Speakers', to: routes.notFound.route, params: { category: 'speakers' } },
      { label: 'Accessories', to: routes.notFound.route, params: { category: 'accessories' } },
      {
        label: 'Collaborations',
        to: routes.notFound.route,
        params: { category: 'collaborations' },
      },
    ],
  },
  {
    heading: 'Support',
    items: [
      { label: 'Product help', to: routes.notFound.route },
      { label: 'Shopping help', to: routes.notFound.route },
      { label: 'Update my beats', to: routes.notFound.route },
      { label: 'Contact Us', to: routes.notFound.route },
      { label: 'Promotional terms', to: routes.notFound.route },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About us', to: routes.notFound.route },
      { label: 'Careers', to: routes.notFound.route },
      { label: 'News & events', to: routes.notFound.route },
      { label: 'Press center', to: routes.notFound.route },
      { label: 'Terms of use', to: routes.notFound.route },
      { label: 'Privacy policy', to: routes.notFound.route },
    ],
  },
  {
    heading: 'Beatsaudio',
    items: [{ label: 'Chrysier car', to: routes.notFound.route }],
  },
  {
    heading: 'Account',
    items: [
      { label: 'My account', to: routes.notFound.route },
      { label: 'Register your bests', to: routes.notFound.route },
    ],
  },
]
const Menu = () => {
  return (
    <header>
      <div className={clsx(containerStyles.container, styles.navigations)}>
        {NAVIGATION_LISTS.map((list, index) => (
          <NavigationSection heading={list.heading} items={list.items} key={index} />
        ))}
      </div>
      <Link to={routes.index.route}>
        <LogoIcon height={48} width={48} />
      </Link>
      <BurgerIcon height={24} width={24} />
      <SearchIcon height={24} width={24} />

      <Link to={routes.index.route}>home</Link>
    </header>
  )
}

export { Menu }
