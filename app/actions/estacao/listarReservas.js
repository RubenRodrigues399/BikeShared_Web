"use server"
import { api, user } from "../../utils/api";
import { cleanNS2Obj } from '../../utils/clean-ns2-objs';
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";



export async function getTodasReservas(idEstacao) {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetAllReservaRequest>
         <stat:idEstacao>${idEstacao}</stat:idEstacao>
      </stat:GetAllReservaRequest>
   </soapenv:Body>
</soapenv:Envelope>`

    try {
        let list =[]
      

        const dataXML = await api.post(user, BODY_XML)
        //const dataXML = pegarTodasEstacoes
        console.log("HEYYY:", dataXML)

        const resJSON = xmlToJson(dataXML.data, "AllDocasResponse")
        console.log("eeee:", resJSON.estacoes)
            if (!Array.isArray( resJSON.estacoes)) {
                list.push(cleanNS2Obj( resJSON.estacoes))
console.log('listaaa',lista)
                return list
            }
            const result = removeNs2( resJSON.estacoes)
            console.log('from',result)
            return result



    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}
