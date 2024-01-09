import React from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const getSnapshot = React.useCallback(
    () => getLocalStorageItem(key, initialValue),
    [initialValue, key]
  )

  const set = React.useCallback(
    (value: T) => {
      setLocalStorageItem(key, value)
    },
    [key]
  )

  const value = React.useSyncExternalStore(subscribe, getSnapshot)

  return [value, set] as const
}

function dispatchStorageEvent(key: string, newValue: null | string) {
  window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
}

function setLocalStorageItem<T>(key: string, value: T) {
  const newValue = toStorage(value)

  window.localStorage.setItem(key, newValue)
  dispatchStorageEvent(key, newValue)
}

function getLocalStorageItem<T>(key: string, inititaValue: T): T {
  return fromStorage(window.localStorage.getItem(key), inititaValue)
}

function subscribe(callback: VoidFunction) {
  window.addEventListener('storage', callback, false)

  return () => {
    window.removeEventListener('storage', callback, false)
  }
}

function fromStorage<T>(value: null | string, initialValue: T): T {
  if (value === null) {
    return initialValue
  }

  const type = typeof initialValue

  if (type === 'boolean') {
    return JSON.parse(value.toLowerCase()) as unknown as T
  }
  if (type === 'number') {
    return parseFloat(value) as unknown as T
  }
  if (type === 'string') {
    return value as unknown as T
  }

  if (initialValue instanceof Boolean) {
    return new Boolean(value) as unknown as T
  }
  if (initialValue instanceof Number) {
    return new Number(value) as unknown as T
  }
  if (initialValue instanceof String) {
    return new String(value) as unknown as T
  }

  if (initialValue instanceof Map) {
    return new Map(JSON.parse(value)) as unknown as T
  }

  if (initialValue instanceof Date) {
    return new Date(value) as unknown as T
  }

  return JSON.parse(value)
}

function toStorage<T>(value: T): string {
  const type = typeof value

  if (type === 'boolean') {
    return (value as unknown as boolean).toString()
  }
  if (type === 'number') {
    return (value as unknown as number).toString()
  }
  if (type === 'string') {
    return value as unknown as string
  }

  if (value instanceof String) {
    return (value as unknown as String).toString() as string
  }

  if (value instanceof Map) {
    return JSON.stringify([...(value as unknown as Map<any, any>)])
  }

  if (value instanceof Date) {
    return (value as unknown as Date).toISOString()
  }

  return JSON.stringify(value)
}

export { useLocalStorage }
