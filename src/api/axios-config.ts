import axios from 'axios';

export const apiMode = process.env.NEXT_PUBLIC_API_MODE;
const baseURL =
  apiMode === 'MOCK'
    ? process.env.NEXT_PUBLIC_MOCK_API
    : process.env.NEXT_PUBLIC_BACK_API;

export const api = axios.create({
  baseURL: baseURL,
});
