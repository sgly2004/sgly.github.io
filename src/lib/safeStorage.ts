type StateStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export function getSafeStorage(): StateStorage {
  if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
    return localStorage;
  }

  return noopStorage;
}
