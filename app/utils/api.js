import axios from "axios";

export const api = axios.create({
    baseURL: "https://2337-105-172-68-111.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
    timeout: 80000
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/user.wsdl"
