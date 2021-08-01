import axios from 'axios';
import settings from '@/settings';

const api = axios.create({
  baseURL: settings.apiUrlRest,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

export const http = api;
