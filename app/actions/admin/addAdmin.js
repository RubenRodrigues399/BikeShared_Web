"use server"
import { api, user } from "../../utils/api";
import { xmlToJson } from "../../utils/xml-to-json";
import {removeNs2} from "../../utils/remove-ns2";
import { signIn, signOut } from "../../auth/providers";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'

export async function cadastroadmin(formData) {
    const email = formData.get("email") 
    const password = formData.get("password") 
    const nome = formData.get("nome") 
    const sobrenome = formData.get("sobrenome") 
    const genero = formData.get("genero") 
    const numBi = formData.get("numBi") 
    const dataNascimento = formData.get("dataNascimento") 
    const telefone = formData.get("telefone") 
    const tipo = formData.get("tipo") 
    const idEstacao = 1

   try {


       const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GestorCreat>
         <user:userCreat>
            <user:password>${password}</user:password>
            <user:nome>${nome}</user:nome>
            <user:sobrenome>${sobrenome}</user:sobrenome>
            <user:genero>${genero}</user:genero>
            <user:BI>${numBi}</user:BI>
            <user:email>${email}</user:email>
            <user:dataNascimento>${dataNascimento}</user:dataNascimento>
            <user:telefone>${telefone}</user:telefone>
            <user:foto></user:foto>
            <user:tipo>${tipo}</user:tipo>
         </user:userCreat>
         <user:idEstacao>${idEstacao}</user:idEstacao>
      </user:GestorCreat>
   </soapenv:Body>
</soapenv:Envelope>`
    
       const dataXML = await api.post(user, BODY_XML)
       console.log("xml:", dataXML)
           const resJSON = xmlToJson(dataXML.data, "UserGestorResponse")
           console.log('xml to json', resJSON)
           if (resJSON.erro==false) {
               console.log('ADD ADMIN FOI!',resJSON)
               return resJSON
           }

   } catch (error) {
       console.log("Error:", error)
       throw error
   }
}



