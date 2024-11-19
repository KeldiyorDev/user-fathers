import axios from "axios";

const defaultOptions = {
    baseURL: "https://95.46.96.154:5010/api",
    // baseURL: "http://localhost:9090",
    //  baseURL: "http://api.edureyting.uz/api",
    //baseURL: "https://95.47.127.171:5010/api",
    headers: {
        'Content-Type': 'application/json',
    },
};

let axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
    config.headers.token = "keldiyor_raxmatov_jigarim"
    return config;
});

export default axiosInstance;

baseURL: "https://95.46.96.154:5010/api",
// export const url = "http://localhost:9090"
// export const url = "http://api.edureyting.uz/api"
// export const url = "https://95.47.127.171:5010/api"