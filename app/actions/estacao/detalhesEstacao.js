"use server"
import { cleanNS2Obj } from '@/app/utils/clean-ns2-objs';
import { estacaoDetail } from '@/app/utils/local-response';
import { xmlToJson } from '@/app/utils/xml-to-json';

export async function  getEstacaoDetalhe (id){
        const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetStationDetailsRequest>
         <stat:Header>
            <stat:AuthToken></stat:AuthToken>
         </stat:Header>
         <stat:Body>
            <stat:id>${id}</stat:id>
         </stat:Body>
      </stat:GetStationDetailsRequest>
   </soapenv:Body>
</soapenv:Envelope>`
     console.log("", BODY_XML)
         try {
          
           
         //    const dataXML = await api.post("/baikeshared", BODY_XML)
         //   const resJSON = xmlToJson(dataXML.data, "GetStationDetailsResponse")
         const resJSON = xmlToJson(estacaoDetail, "GetStationDetailsResponse")
     
         if(!resJSON.estado===true)
             return null
     
         
         const result = cleanNS2Obj( resJSON.dadosEstacao)

         console.log("result: ", result)
         return result
     
         } catch (error) {
             throw new Error("Falha ao Carregar a Estação!")
     
         }

    }