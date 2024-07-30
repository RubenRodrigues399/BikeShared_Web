import { useState } from "react"
import { FaEye } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

export default function LinhaTabelaUsers(props) {

    return (
        <>
            <tr className="border-b text-left border-lilas">
                <td className="px-3 py-3 font-medium ">{props.id}</td>
                <td className="px-3 py-3 max-w-[200px] text-wrap">{props.nome}</td>
                <td className="px-3 py-3">{props.genero}</td>
                <td className="px-3 py-3">{props.numbi}</td>
                <td className="px-3 py-3">{props.dataNasci}</td>
                <td className="px-3 py-3">{props.telefone}</td>
                <td className="px-3 py-3">{props.tipo}</td>
                <td className="px-3 py-3">{props.dataCriacao}</td>
                <td className="px-3 py-3">{props.dataActualizacao}</td>
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
