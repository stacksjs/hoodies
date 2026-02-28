/**
 * useStorage - Reactive localStorage/sessionStorage wrapper
 */
export interface StorageOptions<T> {
  defaultValue?: T
  serializer?: {
    read: (raw: string) => T
    write: (value: T) => string
  }
}

export function useStorage<T>(
  key: string,
  storage: Storage = localStorage,
  options: StorageOptions<T> = {}
) {
  const { defaultValue, serializer = { read: JSON.parse, write: JSON.stringify } } = options
  let listeners: Array<(value: T | undefined) => void> = []

  const get = (): T | undefined => {
    try {
      const raw = storage.getItem(key)
      return raw !== null ? serializer.read(raw) : defaultValue
    } catch {
      return defaultValue
    }
  }

  const set = (value: T): void => {
    try {
      storage.setItem(key, serializer.write(value))
      listeners.forEach(fn => fn(value))
    } catch (e) {
      console.error('[useStorage] Failed to set:', e)
    }
  }

  const remove = (): void => {
    storage.removeItem(key)
    listeners.forEach(fn => fn(undefined))
  }

  const subscribe = (fn: (value: T | undefined) => void) => {
    listeners.push(fn)
    fn(get())
    return () => { listeners = listeners.filter(l => l !== fn) }
  }

  return { get, set, remove, subscribe }
}

export const useLocalStorage = <T>(key: string, options?: StorageOptions<T>) =>
  useStorage<T>(key, localStorage, options)

export const useSessionStorage = <T>(key: string, options?: StorageOptions<T>) =>
  useStorage<T>(key, sessionStorage, options)
