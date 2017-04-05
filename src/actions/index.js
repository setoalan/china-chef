import axios from 'axios';

export const FETCH_MENU = 'FETCH_MENU';

const ROOT_URL = 'http://localhost:3100/api';

export function fetchMenu() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_MENU,
    payload: request
  };
}
