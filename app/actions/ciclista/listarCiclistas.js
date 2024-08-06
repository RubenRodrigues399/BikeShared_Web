"use server"
import { allCiclistas } from "@/app/utils/local-response";
import { cleanNS2Obj } from '../../utils/clean-ns2-objs';
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";



export async function getTodosCiclistas() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GetAllCiclistasRequest>
      </user:GetAllCiclistasRequest>
   </soapenv:Body>
</soapenv:Envelope>`

    try {
        let list =[]
      

        //const dataXML = await api.post(user, BODY_XML)
      //  const resJSON = xmlToJson(dataXML.data, "GetAllCiclistasResponse")
        const dataXML = allCiclistas 
        const resJSON = xmlToJson(dataXML, "GetAllCiclistasResponse")
        if(!resJSON.erro===false)
            return null
        if (!Array.isArray( resJSON.ciclistas)) {
                list.push(cleanNS2Obj( resJSON.ciclistas))
                console.log("List: ", list)
                return list
            }
        const result = removeNs2(resJSON.ciclistas)
        console.log("RESULT: ", result)
        return result
    } catch (error) {
        throw new Error("Falha ao carregar os ciclistas!")

    }

}
