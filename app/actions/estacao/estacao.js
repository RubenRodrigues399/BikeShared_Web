"use server"

//import useTokenStore from "@/store/tokenStore";
import { allStations } from "../../utils/local-response";
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";
import { api, user } from "../../utils/api";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function getTodasEstacoes() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:AllEstacoesRequest>
      </user:AllEstacoesRequest>
   </soapenv:Body>
</soapenv:Envelope>`

    try {
     let list =[]
        const dataXML = await api.post(user, BODY_XML)
       
        
         const resJSON = xmlToJson(dataXML.data, "AllDocasResponse")
         
         const result =  cleanNS2Obj(resJSON.todasEstacoes)
        //  console.log('xxxxx', typeof result )

      list.push(result)
      console.log('lista:', list)
         
       // const result = removeNs2(data)

        //    console.log("Station JSON:", resJSON)
        return list

    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}
