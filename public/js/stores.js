/**
 * App Stores - Browser Bundle
 * Auto-generated, do not edit
 */
window.AppStores = (function() {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __moduleCache = /* @__PURE__ */ new WeakMap;
  var __toCommonJS = (from) => {
    var entry = __moduleCache.get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function")
      __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
        get: () => from[key],
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      }));
    __moduleCache.set(from, entry);
    return entry;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };

  // lib/stores/index.ts
  var exports_stores = {};
  __export(exports_stores, {
    useStorage: () => useStorage,
    useSessionStorage: () => useSessionStorage,
    useLocalStorage: () => useLocalStorage,
    useCookie: () => useCookie,
    setCookie: () => setCookie,
    removeCookie: () => removeCookie,
    getCookie: () => getCookie,
    createStore: () => createStore,
    appStore: () => appStore,
    appActions: () => appActions
  });

  // lib/store.ts
  function createStore(initialValue, options = {}) {
    const { name, persist, onChange } = options;
    let currentValue = { ...initialValue };
    const subscribers = new Set;
    let persistTimeout = null;
    if (persist && typeof window !== "undefined") {
      const storage = persist.storage === "session" ? sessionStorage : localStorage;
      const key = persist.key || `app:${name || "store"}`;
      try {
        const stored = storage.getItem(key);
        if (stored) {
          currentValue = { ...initialValue, ...JSON.parse(stored) };
        }
      } catch {}
    }
    const persistValue = (value) => {
      if (!persist || typeof window === "undefined")
        return;
      const storage = persist.storage === "session" ? sessionStorage : localStorage;
      const key = persist.key || `app:${name || "store"}`;
      if (persist.debounce) {
        if (persistTimeout)
          clearTimeout(persistTimeout);
        persistTimeout = setTimeout(() => storage.setItem(key, JSON.stringify(value)), persist.debounce);
      } else {
        storage.setItem(key, JSON.stringify(value));
      }
    };
    const notify = (newValue, prevValue) => {
      for (const subscriber of subscribers) {
        try {
          subscriber(newValue, prevValue);
        } catch (e) {
          console.error("[store]", e);
        }
      }
      if (onChange)
        onChange(newValue, prevValue);
    };
    return {
      get: () => currentValue,
      set: (value) => {
        const prevValue = currentValue;
        const newValue = typeof value === "function" ? value(currentValue) : value;
        if (newValue !== prevValue) {
          currentValue = newValue;
          persistValue(newValue);
          notify(newValue, prevValue);
        }
      },
      update: (partial) => {
        const prevValue = currentValue;
        const updates = typeof partial === "function" ? partial(currentValue) : partial;
        currentValue = { ...currentValue, ...updates };
        persistValue(currentValue);
        notify(currentValue, prevValue);
      },
      subscribe: (subscriber) => {
        subscribers.add(subscriber);
        subscriber(currentValue, undefined);
        return () => subscribers.delete(subscriber);
      },
      reset: () => {
        const prevValue = currentValue;
        currentValue = { ...initialValue };
        persistValue(currentValue);
        notify(currentValue, prevValue);
      },
      name
    };
  }

  // lib/stores/app.ts
  var appStore = createStore({
    count: 0,
    theme: "light"
  }, {
    name: "app",
    persist: { key: "app:state", storage: "local" }
  });
  var appActions = {
    increment: () => appStore.update((s) => ({ count: s.count + 1 })),
    decrement: () => appStore.update((s) => ({ count: s.count - 1 })),
    setTheme: (theme) => appStore.update({ theme })
  };
  // lib/composables/use-storage.ts
  function useStorage(key, storage = localStorage, options = {}) {
    const { defaultValue, serializer = { read: JSON.parse, write: JSON.stringify } } = options;
    let listeners = [];
    const get = () => {
      try {
        const raw = storage.getItem(key);
        return raw !== null ? serializer.read(raw) : defaultValue;
      } catch {
        return defaultValue;
      }
    };
    const set = (value) => {
      try {
        storage.setItem(key, serializer.write(value));
        listeners.forEach((fn) => fn(value));
      } catch (e) {
        console.error("[useStorage] Failed to set:", e);
      }
    };
    const remove = () => {
      storage.removeItem(key);
      listeners.forEach((fn) => fn(undefined));
    };
    const subscribe = (fn) => {
      listeners.push(fn);
      fn(get());
      return () => {
        listeners = listeners.filter((l) => l !== fn);
      };
    };
    return { get, set, remove, subscribe };
  }
  var useLocalStorage = (key, options) => useStorage(key, localStorage, options);
  var useSessionStorage = (key, options) => useStorage(key, sessionStorage, options);
  // lib/composables/use-cookie.ts
  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : undefined;
  }
  function setCookie(name, value, options = {}) {
    let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (options.expires) {
      const date = options.expires instanceof Date ? options.expires : new Date(Date.now() + options.expires * 86400000);
      cookie += "; expires=" + date.toUTCString();
    }
    if (options.path)
      cookie += "; path=" + options.path;
    if (options.domain)
      cookie += "; domain=" + options.domain;
    if (options.secure)
      cookie += "; secure";
    if (options.sameSite)
      cookie += "; samesite=" + options.sameSite;
    document.cookie = cookie;
  }
  function removeCookie(name, options = {}) {
    setCookie(name, "", { ...options, expires: -1 });
  }
  function useCookie(name, options = {}) {
    const serialize = (val) => typeof val === "string" ? val : JSON.stringify(val);
    const deserialize = (raw) => {
      try {
        return JSON.parse(raw);
      } catch {
        return raw;
      }
    };
    return {
      get: () => {
        const raw = getCookie(name);
        return raw !== undefined ? deserialize(raw) : undefined;
      },
      set: (value) => setCookie(name, serialize(value), options),
      remove: () => removeCookie(name, options)
    };
  }
  return exports_stores;
})();
