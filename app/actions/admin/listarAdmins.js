"use server"
import { allAdmin } from '@/app/utils/local-response';
import { cleanNS2Obj } from '../../utils/clean-ns2-objs';
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";

export async function getTodosAdmins() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GetAllAdmRequest>
      </user:GetAllAdmRequest>
   </soapenv:Body>
</soapenv:Envelope>`

    try {
        let list =[]
      
       // const dataXML = await api.post(user, BODY_XML)
       //const resJSON = xmlToJson(dataXML.data, "GetAllAdmResponse")
        const dataXML = allAdmin
        const resJSON = xmlToJson(dataXML, "GetAllAdmResponse")
         if(!resJSON.erro===false)
            return null

        //console.log("eeee:", resJSON.administradores)
        if (!Array.isArray( resJSON.administradores)) {
            list.push(cleanNS2Obj( resJSON.administradores))
            return list
            }
            const result = removeNs2( resJSON.administradores)
            return result
    } catch (error) {
        throw new Error("Falha ao carregar admins!")

    }

}


