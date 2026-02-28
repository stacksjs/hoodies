/**
 * App Store - Example application state
 */
import { createStore } from '../store'

export interface AppState {
  count: number
  theme: 'light' | 'dark'
}

export const appStore = createStore<AppState>({
  count: 0,
  theme: 'light'
}, {
  name: 'app',
  persist: { key: 'app:state', storage: 'local' }
})

export const appActions = {
  increment: () => appStore.update(s => ({ count: s.count + 1 })),
  decrement: () => appStore.update(s => ({ count: s.count - 1 })),
  setTheme: (theme: AppState['theme']) => appStore.update({ theme })
}
