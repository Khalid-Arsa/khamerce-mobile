import AsyncStorage from '@react-native-community/async-storage';

interface SetItemStorageInterface {
  key: string;
  value: any;
}

const useStorage = {
  setItem: async (key: string, value: any) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log({'`Storage Util Error\nSet Item`': e});
    }
  },

  getItem: async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log({'`Storage Util Error\nGet Item:`': e});
    }
  },

  removeItem: async (key: string) => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log({'`Storage Util Error.\nRemove Item:`': e});
    }
  },

  multiRemove: async (keys: Array<any> = []) => {
    try {
      return await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log({'`Storage Util Error.\nMulti Remove Item:`': e});
    }
  },

  multiGet: async (keys: Array<any> = []) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log({'`Storage Util Error.Multi Get Item:`': e});
    }
  },
};

export {useStorage};