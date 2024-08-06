import { getDocas } from "../../../actions/estacao/get-Docas.js"

type Props = {
    idEstacao: string
}

export async function DocaTable({ idEstacao }: Props) {
    const docas = await getDocas(idEstacao)
    return (
        <table className="w-full text-sm rounded">
            <thead className="text-xs text-left uppercase bg-lilas">
                <tr>
                    <th scope="col" className="px-3 py-3 text-white">
                        Id
                    </th>
                    <th scope="col" className="px-3 py-3 text-white">
                        Referência
                    </th>
                    <th scope="col" className="px-3 py-3 text-white">
                        Estado
                    </th>
                    <th scope="col" className="px-3 py-3 text-white">
                        Sinal
                    </th>

                </tr>
            </thead>
            <tbody>
                {docas.map((item) => (
                    <tr
                        className="border-b border hover:bg-roxo/5"
                        key={item}
                    >
                        <td className="py-3 px-4">{item.id}</td>
                        <td className="py-3 px-4">{item.reference}</td>
                        <td className="py-3 px-4">{item.aberta ? (<span>Fechada</span>) : (<span>Fechada</span>)}</td>
                        <td className="py-3 px-4">{item.sinal}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    )
}