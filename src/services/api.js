import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-memorycard.herokuapp.com",
});
