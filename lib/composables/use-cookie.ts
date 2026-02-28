/**
 * useCookie - Cookie management utility
 */
export interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

export function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : undefined
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  if (options.expires) {
    const date = options.expires instanceof Date
      ? options.expires
      : new Date(Date.now() + options.expires * 864e5)
    cookie += '; expires=' + date.toUTCString()
  }
  if (options.path) cookie += '; path=' + options.path
  if (options.domain) cookie += '; domain=' + options.domain
  if (options.secure) cookie += '; secure'
  if (options.sameSite) cookie += '; samesite=' + options.sameSite
  document.cookie = cookie
}

export function removeCookie(name: string, options: CookieOptions = {}): void {
  setCookie(name, '', { ...options, expires: -1 })
}

export function useCookie<T = string>(name: string, options: CookieOptions = {}) {
  const serialize = (val: T): string =>
    typeof val === 'string' ? val : JSON.stringify(val)
  const deserialize = (raw: string): T => {
    try { return JSON.parse(raw) as T } catch { return raw as T }
  }

  return {
    get: (): T | undefined => {
      const raw = getCookie(name)
      return raw !== undefined ? deserialize(raw) : undefined
    },
    set: (value: T) => setCookie(name, serialize(value), options),
    remove: () => removeCookie(name, options)
  }
}
