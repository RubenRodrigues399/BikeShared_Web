"use server"
import { removeNs2 } from "@/app/utils/remove-ns2";
import { api, user } from "../../utils/api";
import { xmlToJson } from "../../utils/xml-to-json";


// const END_POINT = `${BASE_URL}/ws/user.wsdl`;

// const token = ""
// export async function getRiders(filter?: string) {

const BODY_XML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:stat="http://station.soap.xml">
   <soapenv:Header/>
   <soapenv:Body>
      <stat:GetAllReservaRequest>
         <stat:idEstacao>2</stat:idEstacao>
      </stat:GetAllReservaRequest>
   </soapenv:Body>
</soapenv:Envelope>`

try {

   // console.log("TOKEN", TOKEN_BS)
   // const respXML = await axios.post(END_POINT, BODY_XML, {
   //     headers: {
   //         "Content-Type": "text/xml",
   //     },
   //     timeout: 50000
   // });
   // const dataXML = respXML.data
   // console.log(dataXML)

   const dataXML = await api.post(user, BODY_XML)

   //const dataXML = todosCiclistas
   const resJSON = xmlToJson(dataXML, "GetAllCiclistasResponse")

   const result = resJSON.todosCiclistas ? removeNs2(resJSON.todosCiclistas) : null;
   console.log('hdhd', resJSON)

   //implementer filtro caso venha e retornar o valor
   // let riders = resJSON.user;
   // if (filter) {
   //     riders = riders.filter((rider: any) => {
   //         const searchableFields = ['ns2:nome', 'ns2:sobrenome', 'ns2:email', 'ns2:telefone'];
   //         return searchableFields.some(field =>
   //             rider[field] && rider[field].toString().toLowerCase().includes(filter.toLowerCase())
   //         );
   //     });
   // }
   // console.log("RIDERS: ", riders)
   // return riders

} catch (error) {
   console.log("Falha ao todos os ciclistas!", error)

}
