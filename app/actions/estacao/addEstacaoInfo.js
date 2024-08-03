"use server"

import { station } from "@/app/utils/api"


// export async function addStation(formData: FormData) {
//     const { name, docks, docksDis, latitude, longitude, localName } = Object.fromEntries(formData)
//     const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
// xmlns:stat="http://station.soap.xml">
// <soapenv:Header/>
// <soapenv:Body>
// <stat:AddStationRequest>
// <stat:Header>
// <stat:AuthToken></stat:AuthToken>
// </stat:Header>
// <stat:Body>
// <stat:name>${name}</stat:name>
// <stat:endpoint>${TOKEN_BK}</stat:endpoint>
// <stat:docks>${docks}</stat:docks>
// <stat:DocksDisp>${docksDis}</stat:DocksDisp><stat:localName>${localName}</stat:localName>
// <stat:latitude>${latitude}</stat:latitude>
// <stat:longitude>${longitude}</stat:longitude>
// </stat:Body>
// </stat:AddStationRequest>
// </soapenv:Body>
// </soapenv:Envelope>`

//     try {
//         const respXML = await axios.post(END_POINT, BODY_XML, {
//             headers: {
//                 "Content-Type": "text/xml",
//             },
//             timeout: 50000
//         });
//         const dataXML = respXML.data
//         const resJSON = xmlToJson(dataXML, "StationResponse")
//         if (resJSON.estado === true) {
//             revalidatePath("/dashboard/stations")
//             redirect("/dashboard/stations")
//         }
//     } catch (error) {
//         return {
//             message: "Erro ao criar Estação!"
//         }

//     }

// }

//----------------Cadastro de estacao------------------------
export async function addEstacaoInfo(formData) {
    const urlEstacao = formData.get("urlEstacao") 

   try {

       const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:AddEstacaoBikeSharedRequest>
         <user:url>http://localhost:8083/wsStation/station1.wsdl</user:url>
      </user:AddEstacaoBikeSharedRequest>
   </soapenv:Body>
</soapenv:Envelope>`
    
       const dataXML = await api.post(station, BODY_XML)
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


