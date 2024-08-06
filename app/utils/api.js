import axios from "axios";

export const api = axios.create({
    baseURL: "https://551e-41-63-165-210.ngrok-free.app",
    headers: {
        "Content-Type": "text/xml",
    },
   
})

export const user = "/baikeshared/user.wsdl"
export const station = "/baikeshared/station.wsdl"
