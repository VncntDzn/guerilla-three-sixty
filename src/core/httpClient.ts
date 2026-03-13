import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_DUMMY_JSON ?? "https://dummyjson.com";

export const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

