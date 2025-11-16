import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_API_URL,
});
