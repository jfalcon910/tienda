import axios from "axios";

export const loginApi = axios.create({
    baseURL: `${process.env.REACT_APP_PUBLIC_API_ENDPOINT}/auth`
})