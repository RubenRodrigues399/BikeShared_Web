"use server"
import { api, user } from "../utils/api";
import { xmlToJson } from "../utils/xml-to-json";
import { signIn, signOut } from "../auth/providers";
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