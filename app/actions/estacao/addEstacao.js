"use server"

import useTokenStore from "@/store/tokenStore";
import { allStations } from "@/utils/local-response";
import { BASE_URL } from "@/utils/url";
import { xmlToJson } from "@/utils/xml-to-json";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const END_POINT = `${BASE_URL}/ws/station.wsdl`;
//const TOKEN_BK = useTokenStore.getState().token
let TOKEN_BK = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzZXJ2ZXIiLCJzdWIiOiJmYWtlQGVtYWlsLmZrIiwiZXhwIjoxNzE4MTA4Mzc0fQ.kNs3kfnkyCwoVXxHosVk0PBaJx5IuuTHIEb8Uqsj0-g"


export async function addStation(formData: FormData) {
    const { name, docks, docksDis, latitude, longitude, localName } = Object.fromEntries(formData)
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:stat="http://station.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<stat:AddStationRequest>
<stat:Header>
<stat:AuthToken></stat:AuthToken>
</stat:Header>
<stat:Body>
<stat:name>${name}</stat:name>
<stat:endpoint>${TOKEN_BK}</stat:endpoint>
<stat:docks>${docks}</stat:docks>
<stat:DocksDisp>${docksDis}</stat:DocksDisp><stat:localName>${localName}</stat:localName>
<stat:latitude>${latitude}</stat:latitude>
<stat:longitude>${longitude}</stat:longitude>
</stat:Body>
</stat:AddStationRequest>
</soapenv:Body>
</soapenv:Envelope>`

    try {
        const respXML = await axios.post(END_POINT, BODY_XML, {
            headers: {
                "Content-Type": "text/xml",
            },
            timeout: 50000
        });
        const dataXML = respXML.data
        const resJSON = xmlToJson(dataXML, "StationResponse")
        if (resJSON.estado === true) {
            revalidatePath("/dashboard/stations")
            redirect("/dashboard/stations")
        }
    } catch (error) {
        return {
            message: "Erro ao criar Estação!"
        }

    }

}

//----------------Cadastro de estacao------------------------
export async function cadastroEstacao(formData) {
    const urlEstacao = formData.get("email") 

   try {

       const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GestorCreat>
         <user:userCreat>
            <user:password>${password}</user:password>
            <user:nome>${nome}</user:nome>
            <user:sobrenome>${sobrenome}</user:sobrenome>
            <user:genero>${genero}</user:genero>
            <user:BI>${numBi}</user:BI>
            <user:email>${email}</user:email>
            <user:dataNascimento>${dataNascimento}</user:dataNascimento>
            <user:telefone>${telefone}</user:telefone>
            <user:foto></user:foto>
            <user:tipo>${tipo}</user:tipo>
         </user:userCreat>
         <user:idEstacao>${idEstacao}</user:idEstacao>
      </user:GestorCreat>
   </soapenv:Body>
</soapenv:Envelope>`
    
       const dataXML = await api.post(user, BODY_XML)
       console.log("xml:", dataXML)
           const resJSON = xmlToJson(dataXML.data, "UserGestorResponse")
           console.log('xml to json', resJSON)
           if (resJSON.erro==false) {
               console.log('ADD ADMIN FOI!',resJSON)
               return resJSON
           }

   } catch (error) {
       console.log("Error:", error)
       throw error
   }
}
