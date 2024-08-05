import axios from "axios";

export const api = axios.create({
    baseURL: "https://22ca-105-172-74-158.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
   
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/station.wsdl"
