"use server"
import { api } from '@/app/utils/api';
import { cleanNS2Obj } from '../../utils/clean-ns2-objs';
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";



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
      
       const dataXML = await api.post("/baikeshared", BODY_XML)
      const resJSON = xmlToJson(dataXML.data, "AllDocasResponse")
  console.log("res: ", resJSON.estacoes)
    if(!resJSON.erro===false)
        return null

    if (!Array.isArray( resJSON.estacoes)) {
        list.push(cleanNS2Obj( resJSON.estacoes))
        return list
    }
    const result = removeNs2( resJSON.estacoes)
    console.log("result: ", result)
    return result

    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}
