import axios from "axios";

export const productApi = axios.create({
    baseURL: '${process.env.REACT_APP_PUBLIC_API_ENDPOINT}/product'
})