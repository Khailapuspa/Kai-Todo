import { message } from "antd";
import axios from "axios";
import Router from "next/router";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

http.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

http.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401 && error.response?.message !== "invalid signature") {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            Router.push("/login");
        }
        return Promise.reject(error);
    }
);

export default http;
