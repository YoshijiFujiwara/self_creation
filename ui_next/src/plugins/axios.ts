import axios from "axios";

// [FIY] https://github.com/zeit/next.js/issues/2919
// [FIY] https://github.com/axios/axios
const instance = axios.create({
  baseURL: "http://localhost:3456",
  timeout: 2000,
  headers: { "Content-Type": "application/json" }
});

export default instance;
