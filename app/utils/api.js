import axios from "axios";

export const api = axios.create({
    baseURL: "https://4a4c-105-172-74-158.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
   
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/user.wsdl"
