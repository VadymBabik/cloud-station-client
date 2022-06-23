import * as localforage from 'src/components/Helpers/LocalForage/LocalForage';

type ItemWithExpiry<ItemType> = {
  value: ItemType;
  expiry: number;
};

class LocalForage {
  static getItem<ItemType>(key: string) {
    return localforage.getItem<ItemType>(key);
  }

  static setItem<ItemType>(key: string, value: ItemType) {
    return localforage.setItem<ItemType>(key, value);
  }

  static async getItemWithExpiry<ItemType>(key: string) {
    const item = await localforage.getItem<ItemWithExpiry<ItemType>>(key);

    if (!item) {
      return null;
    }

    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

  static setItemWithExpiry<ItemType>(
    key: string,
    value: ItemType,
    ttl: number
  ) {
    const now = new Date();

    const item: ItemWithExpiry<ItemType> = {
      value: value,
      expiry: now.getTime() + ttl
    };

    return LocalForage.setItem<ItemWithExpiry<ItemType>>(key, item);
  }

  static clear() {
    return localforage.clear();
  }
}

export default LocalForage;
