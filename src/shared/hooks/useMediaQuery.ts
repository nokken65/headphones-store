import React from 'react'

type UseMediaQueryConfig = {
  initial?: (() => boolean) | boolean | null
}

const useMediaQuery = (query: string, config?: UseMediaQueryConfig) => {
  const { initial }: UseMediaQueryConfig = { initial: window.matchMedia(query).matches, ...config }

  const [isMatch, setIsMatch] = React.useState(initial)

  React.useEffect(() => {
    const list = window.matchMedia(query)

    setIsMatch(list.matches)

    const onChangeHandler = (event: MediaQueryListEvent) => setIsMatch(event.matches)

    list.addEventListener('change', onChangeHandler)

    return () => list.removeEventListener('change', onChangeHandler)
  }, [query])

  return isMatch
}

export { useMediaQuery }
