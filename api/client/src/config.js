import axios from "axios";

const  axiosInstance = axios.create({
    baseURL : "https://weblogproject.herokuapp.com/api"
})
export default axiosInstance