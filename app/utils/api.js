import axios from "axios";

export const api = axios.create({
    baseURL: "https://e1d7-105-172-70-75.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
    timeout: 80000
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/user.wsdl"
