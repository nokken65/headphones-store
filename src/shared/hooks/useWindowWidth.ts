import React from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth + window.innerWidth - document.documentElement.clientWidth
  )

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(() =>
      setWidth(
        document.documentElement.clientWidth +
          window.innerWidth -
          document.documentElement.clientWidth
      )
    )

    resizeObserver.observe(document.documentElement)

    return () => {
      if (!resizeObserver) {
        return
      }
      resizeObserver.disconnect()
    }
  }, [])

  return width
}

export { useWindowWidth }
