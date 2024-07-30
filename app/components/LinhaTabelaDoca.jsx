import { useState } from "react"
import { FaEye } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

export default function LinhaTabelaDoca(props) {


    const [options, setOptions] = useState(false)


    return (
        <>
            <tr className="border-b text-left border-lilas">
                <td className="px-4 py-3 font-medium max-w-[200px] text-wrap">{props.id}</td>
                <td className="px-4 py-3">{props.descricao}</td>
                <td className="px-4 py-3">{props.estado}</td>
                <td className="px-4 py-3">{props.bicicleta}</td>
                <td className="px-4 py-3">{props.estacao}</td>
                <td className="px-4 py-3">{props.dataCriacao}</td>
                <td className="px-4 py-3">{props.dataActualizacao}</td>
               
                    <td className="px-4 py-3 flex items-center justify-end">
                     <div>
                                <ul className="py-1 text-sm flex gap-1">
                                    <li>
                                        <a href="">
                                        <FaEye/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <FaEdit/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <FaTrash/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                </td>
            </tr>
        </>
    )
}

