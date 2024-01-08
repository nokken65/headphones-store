import React from 'react'

type MediaQuery = string

function getSnapshot(query: MediaQuery) {
  return window.matchMedia(query).matches
}

function subscribe(onChange: VoidFunction, query: MediaQuery) {
  const mediaQueryList = window.matchMedia(query)

  mediaQueryList.addEventListener('change', onChange)

  return () => mediaQueryList.removeEventListener('change', onChange)
}

export function useMediaQuery(query: MediaQuery) {
  const subscribeMediaQuery = React.useCallback(
    (onChange: VoidFunction) => subscribe(onChange, query),
    [query]
  )

  const matches = React.useSyncExternalStore(subscribeMediaQuery, () => getSnapshot(query))

  return matches
}
