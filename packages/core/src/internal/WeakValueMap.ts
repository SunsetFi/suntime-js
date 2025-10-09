export class WeakValueMap<K extends object, V extends object> {
  private readonly _map = new Map<K, WeakRef<V>>();
  private readonly _finalizationRegistry: FinalizationRegistry<K>;

  constructor() {
    this._finalizationRegistry = new FinalizationRegistry((key: K) => {
      this._map.delete(key);
    });
  }

  set(key: K, value: V) {
    this._map.set(key, new WeakRef(value));
    // unregisterToken is held weakly, so there is no issues passing our value to it.
    this._finalizationRegistry.register(value, key, value);
  }

  get(key: K): V | undefined {
    const ref = this._map.get(key);
    if (!ref) {
      return undefined;
    }
    const val = ref.deref();
    if (val === undefined) {
      this._map.delete(key);
    }
    return val;
  }

  has(key: K): boolean {
    const ref = this._map.get(key);
    if (!ref) {
      return false;
    }
    const val = ref.deref();
    if (val === undefined) {
      this._map.delete(key);
      return false;
    }
    return true;
  }

  delete(key: K): boolean {
    const ref = this._map.get(key);
    if (ref) {
      const val = ref.deref();
      if (val !== undefined) {
        this._finalizationRegistry.unregister(val);
      }
    }
    return this._map.delete(key);
  }

  clear() {
    for (const ref of this._map.values()) {
      const val = ref.deref();
      if (val !== undefined) {
        this._finalizationRegistry.unregister(val);
      }
    }
    this._map.clear();
  }

  get size(): number {
    let count = 0;
    for (const [key, ref] of this._map.entries()) {
      if (ref.deref() !== undefined) {
        count++;
      } else {
        this._map.delete(key);
      }
    }
    return count;
  }
}
