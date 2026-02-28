/**
 * Lightweight reactive store implementation
 * Based on STX state-management patterns
 */

export type Subscriber<T> = (value: T, previousValue: T | undefined) => void
export type Unsubscribe = () => void

export interface StoreOptions<T> {
  name?: string
  persist?: {
    key?: string
    storage?: 'local' | 'session'
    debounce?: number
  }
  onChange?: (value: T, prev: T | undefined) => void
}

export interface Store<T> {
  get: () => T
  set: (value: T | ((prev: T) => T)) => void
  update: (partial: Partial<T> | ((prev: T) => Partial<T>)) => void
  subscribe: (subscriber: Subscriber<T>) => Unsubscribe
  reset: () => void
  name?: string
}

export function createStore<T extends object>(
  initialValue: T,
  options: StoreOptions<T> = {}
): Store<T> {
  const { name, persist, onChange } = options

  let currentValue = { ...initialValue }
  const subscribers = new Set<Subscriber<T>>()
  let persistTimeout: ReturnType<typeof setTimeout> | null = null

  // Load persisted value
  if (persist && typeof window !== 'undefined') {
    const storage = persist.storage === 'session' ? sessionStorage : localStorage
    const key = persist.key || `app:${name || 'store'}`
    try {
      const stored = storage.getItem(key)
      if (stored) {
        currentValue = { ...initialValue, ...JSON.parse(stored) }
      }
    } catch { /* Invalid stored value */ }
  }

  const persistValue = (value: T) => {
    if (!persist || typeof window === 'undefined') return
    const storage = persist.storage === 'session' ? sessionStorage : localStorage
    const key = persist.key || `app:${name || 'store'}`
    if (persist.debounce) {
      if (persistTimeout) clearTimeout(persistTimeout)
      persistTimeout = setTimeout(() => storage.setItem(key, JSON.stringify(value)), persist.debounce)
    } else {
      storage.setItem(key, JSON.stringify(value))
    }
  }

  const notify = (newValue: T, prevValue: T | undefined) => {
    for (const subscriber of subscribers) {
      try { subscriber(newValue, prevValue) } catch (e) { console.error('[store]', e) }
    }
    if (onChange) onChange(newValue, prevValue)
  }

  return {
    get: () => currentValue,
    set: (value) => {
      const prevValue = currentValue
      const newValue = typeof value === 'function' ? (value as (prev: T) => T)(currentValue) : value
      if (newValue !== prevValue) {
        currentValue = newValue
        persistValue(newValue)
        notify(newValue, prevValue)
      }
    },
    update: (partial) => {
      const prevValue = currentValue
      const updates = typeof partial === 'function' ? (partial as (prev: T) => Partial<T>)(currentValue) : partial
      currentValue = { ...currentValue, ...updates }
      persistValue(currentValue)
      notify(currentValue, prevValue)
    },
    subscribe: (subscriber) => {
      subscribers.add(subscriber)
      subscriber(currentValue, undefined)
      return () => subscribers.delete(subscriber)
    },
    reset: () => {
      const prevValue = currentValue
      currentValue = { ...initialValue }
      persistValue(currentValue)
      notify(currentValue, prevValue)
    },
    name
  }
}
