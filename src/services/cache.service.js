class Cache {
  constructor() {
    if (!Cache.instance) {
      this.store = new Map();
      Cache.instance = this;
    }

    return Cache.instance;
  }

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }

  remove(key) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }
}

module.exports = Cache;
