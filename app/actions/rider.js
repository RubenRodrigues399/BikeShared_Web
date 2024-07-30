"use server"
import useTokenStore from "@/store/tokenStore";
import { allUserRiders, userRider } from "@/utils/local-response";
import { BASE_URL } from "@/utils/url";
import { xmlToJson } from "@/utils/xml-to-json";
import axios from "axios";


const END_POINT = `${BASE_URL}/ws/user.wsdl`;
const TOKEN_BS = useTokenStore.getState().token

export async function getRiders() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:user="http://user.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<user:AllCiclistasRequest>
<user:Header>
<user:AuthToken>${TOKEN_BS}</user:AuthToken>
</user:Header>
</user:AllCiclistasRequest>
</soapenv:Body></soapenv:Envelope>`
    try {


        // console.log("TOKEN", TOKEN_BS)
        // const respXML = await axios.post(END_POINT, BODY_XML, {
        //     headers: {
        //         "Content-Type": "text/xml",
        //     },
        //     timeout: 50000
        // });
        // const dataXML = respXML.data
        // console.log(dataXML)

        const dataXML = allUserRiders
        const resJSON = xmlToJson(dataXML, "CiclistaListResponse")
        //  console.log("RIDERS: ", resJSON)

        return resJSON.user

    } catch (error) {
        console.log("Falha ao todos os ciclistas!", error)

    }


}

export async function getRider(id: string) {
    const BODY_XML = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:user="http://user.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<user:CiclistaIdRequest>
<user:Header>
<user:AuthToken${TOKEN_BS}</user:AuthToken>
</user:Header>
<user:Body>
<user:CiclistaId>${id}</user:CiclistaId>
</user:Body>
</user:CiclistaIdRequest>
</soapenv:Body>
</soapenv:Envelope>`
    try {

        // const respXML = await axios.post(END_POINT, BODY_XML, {
        //     headers: {
        //         "Content-Type": "text/xml",
        //     },
        //     timeout: 50000
        // });
        // const dataXML = respXML.data
        const dataXML = userRider
        const resJSON = xmlToJson(dataXML, "CiclistaResponse")
        return resJSON


    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }


}
export async function getRiderActivities(id: string) {
    const BODY_XML = `
    PENDENTE
                `
    try {

        const respXML = await axios.post(END_POINT, BODY_XML, {
            headers: {
                "Content-Type": "text/xml",
            },
            timeout: 50000
        });
        const dataXML = respXML.data
        const resJSON = xmlToJson(dataXML, "GetStationDetailsResponse")
        return resJSON


    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}

export async function getRiderCredit() {
    const BODY_XML = `
    PENDENTE!!!
                `

    try {

        const respXML = await axios.post(END_POINT, BODY_XML, {
            headers: {
                "Content-Type": "text/xml",
            },
            timeout: 50000
        });
        const dataXML = respXML.data
        const resJSON = xmlToJson(dataXML, "GetStationDetailsResponse")
        return resJSON


    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }
}
