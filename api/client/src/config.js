import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://weblogproject.herokuapp.com/api"
})