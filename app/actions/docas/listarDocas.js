// import axios from 'axios';
// import { station } from "@/app/utils/api"

// // Função para fazer a chamada SOAP e obter as docas de uma estação
// export async function getDocasPorEstacao(idEstacao) {
//   const soapRequest = `
//     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
//        <soapenv:Header/>
//        <soapenv:Body>
//           <stat:GetAllDocaRequest>
//              <stat:idEstacao>${idEstacao}</stat:idEstacao>
//           </stat:GetAllDocaRequest>
//        </soapenv:Body>
//     </soapenv:Envelope>`;

//   try {
//     const { data } = await axios.post('https://4a4c-105-172-74-158.ngrok-free.app/baikeshared/station.wsdl', soapRequest, {
//       headers: {
//         'Content-Type': 'text/xml',
//       },
//     });

//     console.log("jdjdj", data)

//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(data, 'text/xml');
//     const docas = Array.from(xmlDoc.getElementsByTagName('ns2:TodasDocas')).map(doca => ({
//       id: doca.getElementsByTagName('ns2:id')[0].textContent,
//       reference: doca.getElementsByTagName('ns2:reference')[0].textContent,
//       aberta: doca.getElementsByTagName('ns2:aberta')[0].textContent === 'true',
//     }));

//     return docas;
//   } catch (error) {
//     console.error('Erro ao obter as docas:', error);
//     return [];
//   }
// }

"use server"
//import { pegarTodasEstacoes } from "../../utils/responses";
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";
import { api, user } from "../../utils/api";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'

export async function getDocasPorEstacao(idEstacao) {
    const BODY_XML = ` <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
//        <soapenv:Header/>
//        <soapenv:Body>
//           <stat:GetAllDocaRequest>
//              <stat:idEstacao>${idEstacao}</stat:idEstacao>
//           </stat:GetAllDocaRequest>
//        </soapenv:Body>
//     </soapenv:Envelope>`

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
        throw new Error("Falha ao carregar as docas!")

    }

}

