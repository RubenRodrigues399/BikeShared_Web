import axios from "axios";

export const api = axios.create({
    baseURL: "https://a78b-105-172-244-132.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
   
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/user.wsdl"
