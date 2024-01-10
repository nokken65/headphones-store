import { RouteParams } from 'atomic-router'
import { Link as AtomicLink, LinkProps as AtomicLinkProps } from 'atomic-router-react'
import clsx from 'clsx'

import styles from './Link.module.css'

type LinkProps<Params extends RouteParams> = AtomicLinkProps<Params>

const Link = <Params extends RouteParams>({ ...props }: LinkProps<Params>) => {
  return (
    <AtomicLink
      {...props}
      activeClassName={clsx(styles.active, props.activeClassName)}
      inactiveClassName={clsx(styles.link, props.inactiveClassName)}
    />
  )
}

export { Link }
