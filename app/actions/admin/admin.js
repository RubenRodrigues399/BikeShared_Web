"use server"

import useTokenStore from "@/store/tokenStore";
import { api } from "@/utils/api";
import { allUsersAdmins } from "@/utils/local-response";
import { BASE_URL } from "@/utils/url";
import { xmlToJson } from "@/utils/xml-to-json";
import { redirect } from "next/navigation";
import { z } from 'zod';


const END_POINT = `${BASE_URL}/ws/user.wsdl`;
const UserEND = "/ws/user.wsdl"
const TOKEN_BS = useTokenStore.getState().token


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
type CreateUserState = {
    errors?: {
        email?: string[]
        password?: string[]
        nome?: string[]
        sobrenome?: string[]
        genero?: string[],
        bi?: string[]
        telefone?: string[]

    }
}
const CreateUser = UserSchema.omit({ estado: true, mensagem: true, id: true, ciclistaId: true, token: true })

export async function createAdmin(state: CreateUserState, formData: FormData) {


    const validatedFields = CreateUser.safeParse({
        email: formData.get("email")?.toString(),
        password: formData.get("password")?.toString(),
        nome: formData.get("name")?.toString(),
        sobrenome: formData.get("lastName")?.toString(),
        telefone: formData.get("phone")?.toString(),
        bi: formData.get("bi")?.toString(),
        genero: formData.get("gender")?.toString(),
        foto: formData.get("photo")?.toString()
    })

    console.log("TRY", validatedFields.data)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Preencha todos os campos!"
        }
    }
    const { email, password, nome, sobrenome, genero, bi, telefone } = validatedFields.data
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:user="http://user.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<user:AddUserRequest>
<user:email>${email}</user:email>
<user:password>${password}</user:password>
<user:nome>${nome}</user:nome>
<user:sobrenome>${sobrenome}</user:sobrenome>
<user:genero>${genero}</user:genero>
<user:BI>${bi}</user:BI>
<user:telefone>${telefone}</user:telefone>
<user:foto></user:foto>
<user:tipo>1</user:tipo>
</user:AddUserRequest>
</soapenv:Body>
</soapenv:Envelope>`

    try {

        // const respXML = await axios.post(END_POINT, BODY_XML, {
        //     headers: {
        //         "Content-Type": "text/xml",
        //     },
        //     timeout: 50000
        // });

        const respXML = await api.post(UserEND, BODY_XML)
        console.log("RESPONSE:", respXML)
        const dataXML = respXML.data
        console.log(dataXML)
        const resJSON = xmlToJson(dataXML, "StationResponse")
        console.log(resJSON)
        if (resJSON.estado === true) {
            //           return resJSON
        }
    } catch (error) {
        // return { message: "Falha ao criar usuário" }
        console.log("Error:", error)
        // throw error

    }
    redirect("/login")

}




export async function getAllUsersAdmin() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:user="http://user.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<user:AllUsersRequest>
<user:Header>
<user:AuthToken>${TOKEN_BS}</user:AuthToken>
</user:Header>
</user:AllUsersRequest>
</soapenv:Body>
</soapenv:Envelope>`
    try {

        // const respXML = await axios.post(END_POINT, BODY_XML, {
        //     headers: {
        //         "Content-Type": "text/xml",
        //     },
        //     timeout: 50000
        // });
        // const dataXML = respXML.data

        //  const respXML = await api.post(END_POINT, BODY_XML)
        const dataXML = allUsersAdmins
        const resJSON = xmlToJson(dataXML, "UserListResponse")
        //  console.log("ADMINS: ", resJSON)
        return resJSON.user// retorna lista de user


    } catch (error) {
        console.log(error)
        //        throw new Error("Falha ao carregar todos os administradores!")

    }

}
export async function getUserAdmin() {
    const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:user="http://user.soap.xml">
<soapenv:Header/>
<soapenv:Body>
<user:AllUsersRequest>
<user:Header>
<user:AuthToken>${TOKEN_BS}</user:AuthToken>
</user:Header>
</user:AllUsersRequest>
</soapenv:Body>
</soapenv:Envelope>
                `
    try {

        // const respXML = await axios.post(END_POINT, BODY_XML, {
        //     headers: {
        //         "Content-Type": "text/xml",
        //     },
        //     timeout: 50000
        // });
        // const dataXML = respXML.data
        const respXML = api.post(END_POINT, BODY_XML)

        console.log("FROM API/UTIL", respXML)
        const dataXML = allUsersAdmins
        const resJSON = xmlToJson(dataXML, "UserListResponse")

        return resJSON


    } catch (error) {
        throw new Error("Falha ao carregar todos os administradores!")

    }

}
