"use server"

import { allDoca } from '@/app/utils/local-response';
import { removeNs2 } from '@/app/utils/remove-ns2';
import { xmlToJson } from '@/app/utils/xml-to-json';

export async function  getDocas (id){
        const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetAllDocaRequest>
         <stat:idEstacao>${id}</stat:idEstacao>
      </stat:GetAllDocaRequest>
   </soapenv:Body>
</soapenv:Envelope>`
     console.log("", BODY_XML)
         try {
          
           
         //    const dataXML = await api.post("/baikeshared", BODY_XML)
         //   const resJSON = xmlToJson(dataXML.data, "AllDocasResponse")
         const resJSON = xmlToJson(allDoca, "AllDocasResponse")
         console.log(resJSON.TodasDocas)
     
         if(resJSON.erro===false){

             const result = removeNs2( resJSON.TodasDocas)
             console.log("result: ", result)
             return result
         }
             
        return null
     
         

       
     
         } catch (error) {
             throw new Error("Falha ao Carregar a Estação!")
     
         }

    }