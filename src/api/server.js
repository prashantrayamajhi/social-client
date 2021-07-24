import Axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://localhost:8080";

export default Axios.create({
  baseURL: BASE_URL,
});
