import axios from "axios";
import Cookies from "js-cookie";
const URL = import.meta.env.VITE_URL;

const client = axios.create({ baseURL: URL });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${Cookies.get(
    "token"
  )}`;
  const onSuccess = (response) => response;
  const onError = (error) => error;
  return client(options).then(onSuccess).catch(onError);
};
