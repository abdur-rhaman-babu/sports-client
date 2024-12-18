import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2500',
    withCredentials: true,
})
const useAxiosSecure = () => {
   return axiosInstance;    
};

export default useAxiosSecure;