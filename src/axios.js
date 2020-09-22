import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderc-backend.herokuapp.com/",
});

export default instance;
