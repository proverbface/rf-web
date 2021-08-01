import { Item } from '@/api/types/item.model';
import axios from 'axios';
import settings from '@/settings';

export const itemAxios = axios.create({
  baseURL: settings.itemApiUrl,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

const itemApi = {
  getItem: async (id: string): Promise<Item> => {
    try {
      const result = await itemAxios.get<Item>(id);
      return result.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export { itemApi };
