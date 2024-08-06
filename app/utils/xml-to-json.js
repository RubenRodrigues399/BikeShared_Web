import { XMLParser } from "fast-xml-parser";

export function xmlToJson(xml, ns2Resp) {


    const parser = new XMLParser();
    const dataJSON = parser.parse(xml)
    const resJSON = dataJSON["SOAP-ENV:Envelope"]["SOAP-ENV:Body"][`ns2:${ns2Resp}`]
    
    const cleanedData = Object.keys(resJSON).reduce((acc, key) => {
        const newKey = key.replace('ns2:', '');
        acc[newKey] = resJSON[key];
        return acc;
    }, {});
    return cleanedData
}