import axios from 'axios';
import { http } from './index';

const exchangeApi = {
  getJwt: (data: any) => http.post(`/core/access-tokens/exchange`, data),
};

const taskApi = {
  submit: (...data: any[]) =>
    http.post('/functions/rfider-wechat-authenticity-task', ...data),
  status: (...data: any[]) => (axios as any).get(...data),
};

const thingApi = {
  getPublic: (organizationId: string, interactionId: string) =>
    http.get(`/api/data.json`),
};

export { exchangeApi, taskApi, thingApi };
