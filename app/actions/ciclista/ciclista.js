"use server"
//import { pegarTodasEstacoes } from "../../utils/responses";
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";
import { api, user } from "../../utils/api";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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
      

        const dataXML = await api.post(user, BODY_XML)
        //const dataXML = pegarTodasEstacoes
        console.log("HEYYY:", dataXML)

        const resJSON = xmlToJson(dataXML.data, "GetAllCiclistasResponse")
        console.log("eeee:", resJSON.ciclistas)
            if (!Array.isArray( resJSON.ciclistas)) {
                list.push(cleanNS2Obj( resJSON.ciclistas))
console.log('listaaa',lista)
                return list
            }
            const result = removeNs2(resJSON.ciclistas)
            console.log('from', result)
            return result



    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}
