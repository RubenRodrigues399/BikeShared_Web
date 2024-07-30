"use server"
import { api, user } from "../utils/api";
import { xmlToJson } from "../utils/xml-to-json";
import { redirect } from "next/navigation";
import {removeNs2} from "../utils/remove-ns2";
import { FormState } from "react-hook-form";
import { signIn, signOut } from "../auth/providers";
import { userLogin } from "../utils/local-response";
import {cleanNS2Obj} from '../utils/clean-ns2-objs'

//----------------------Estrutura do consumo do login--------------------------------
export async function login({email, password}:{email: string, password: string}) {
    console.log('login')

    try {

        const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
    <soapenv:Header/>
   <soapenv:Body>
      <user:GestorLoginRequest>
        <user:password>${password}</user:password>
        <user:email>${email}</user:email>
      </user:GestorLoginRequest>
   </soapenv:Body>
</soapenv:Envelope>`
     
//const dataXML = userLogin
         const dataXML = await api.post(user, BODY_XML)
         const resJSON = xmlToJson(dataXML.data, "UserClientResponse")
       

          const result =  cleanNS2Obj(resJSON.dadosUser)
          console.log('result', result)
    
        return result
        }
     catch (error) {
        console.log("Error:", error)
        throw error
    }
}

//----------------------Estrutura do consumo do cadastro admin--------------------------------
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
       //        await signIn("credentials", { email, password });

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




export async function authenticate(currentState: undefined, formData:FormData) {
    try {
      await signIn('credentials', formData)
    // const result =  await signIn('credentials', formData)
    //   if(result)
    //     redirect( '/bikeshared')
    } catch (error) {
      throw error
    }
  }




//----------------------Estrutura do consumo d--------------------------------
export async function logOut (){
  await signOut()
}