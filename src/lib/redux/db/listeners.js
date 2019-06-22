let listeners = {}

export const getListener = (listenerName) => listeners[listenerName]

export const setListener = (listenerName, listener) => {
  listeners[listenerName] = listener
  return listeners[listenerName]
}
