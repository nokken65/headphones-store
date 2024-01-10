import { RouteInstance, RouteParams } from 'atomic-router'

type NavLink = { to: RouteInstance<RouteParams>; label: string }

export type { NavLink }
