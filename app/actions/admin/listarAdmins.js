"use server"
import { pegarTodosAdmins } from "../../utils/responses";
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";
import { api, user } from "../../utils/api";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'

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
      
        const dataXML = await api.post(user, BODY_XML)
        //const dataXML = pegarTodosAdmins
        //console.log("HEYYY:", dataXML)

        const resJSON = xmlToJson(dataXML.data, "GetAllAdmResponse")
        //console.log("eeee:", resJSON.administradores)
            if (!Array.isArray( resJSON.administradores)) {
                list.push(cleanNS2Obj( resJSON.administradores))
        //console.log('listaaa',list)
                return list
            }
            const result = removeNs2( resJSON.administradores)
            console.log('from',result)
            return result



    } catch (error) {
        throw new Error("Falha ao carregar admins!")

    }

}


