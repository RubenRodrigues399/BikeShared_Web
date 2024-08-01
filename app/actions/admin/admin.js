"use server"
import { pegarTodosAdmins } from "../../utils/responses";
import { removeNs2 } from "../../utils/remove-ns2";
import { xmlToJson } from "../../utils/xml-to-json";
import { api, user } from "../../utils/api";
import {cleanNS2Obj} from '../../utils/clean-ns2-objs'
import { z } from 'zod';


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const UserSchema = z.object({
    estado: z.boolean(),
    mensagem: z.string(),
    id: z.number(),
    ciclistaId: z.number(),
    email: z.string({ required_error: "O email é obrigatório" }).email("Insira um e-mail válido"),
    password: z.string({ required_error: "A senha é obrigatório" }).
        min(6, "A Senha deve ter no mínimo 6 caracteres").
        max(12, "A senha deve ter no máximo 12 caracteres"),
    nome: z.string({ required_error: "O nome é obrigatório" })
        .min(3, "O nome deve conter no mínimo 3 caracteres"),
    sobrenome: z.string({ required_error: "O sobrenome é obrigatório" })
        .min(3, "O sobrenome deve conter no mínimo 3 caracteres"),
    genero: z.string(),
    telefone: z.string(),
    bi: z.string({ required_error: "O email é obrigatório" }).min(14, "O Bilhete deve ter 14 caracteres").max(14, "O Bilhete deve ter 14 caracteres"),
    foto: z?.string(),
    token: z.string(),

})

const createUserState = {
    errors: {
        email: [],
        password: [],
        nome: [],
        sobrenome: [],
        genero: [],
        bi: [],
        telefone: []
    }
};


export async function getTodosAdmins() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://user.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <user:GetAllAdmRequest>
      </user:GetAllAdmRequest>
   </soapenv:Body>
</soapenv:Envelope>`

    try {
        let list =[]
      
        const dataXML = await api.post(user, BODY_XML)
        //const dataXML = pegarTodosAdmins
        //console.log("HEYYY:", dataXML)

        const resJSON = xmlToJson(dataXML.data, "GetAllAdmResponse")
        //console.log("eeee:", resJSON.administradores)
            if (!Array.isArray( resJSON.administradores)) {
                list.push(cleanNS2Obj( resJSON.administradores))
        //console.log('listaaa',list)
                return list
            }
            const result = removeNs2( resJSON.administradores)
            console.log('from',result)
            return result



    } catch (error) {
        throw new Error("Falha ao Carregar a Estação!")

    }

}


