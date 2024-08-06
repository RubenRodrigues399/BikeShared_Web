import { getTodasEstacoes } from "@/app/actions/estacao/listarEstacoes";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export async function EstacoesTable() {
    const estacoes = await getTodasEstacoes()
    return (
        <table className="w-full text-sm rounded">
            <thead className="text-xs text-left uppercase bg-lilas">
                <tr>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        Id estação
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        Nome
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        N* de docas
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        N* de docas livres
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        Local
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        Estado
                    </th>
                    <th scope="col" className="px-3 py-3 text-white text-center">
                        <span className="sr-only">Acções</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {estacoes.map((item) => (
                    <tr
                        className="border-b border text-black hover:bg-roxo/5"
                        key={item.estacao["ns2:id"]}
                    >
                        <td className="py-3 px-4 text-center">{item.estacao['ns2:id']}</td>
                        <td className="py-3 px-4 text-center">{item.estacao['ns2:nome']}</td>
                        <td className="py-3 px-4 text-center">{item.estacao['ns2:qtdDocasTotais']}</td>
                        <td className="py-3 px-4 text-center">{item.estacao['ns2:qtdDocasLivres']}</td>
                        <td className="py-3 px-4 text-center">{item.estacao['ns2:local']}</td>
                        <td className="py-3 px-4 text-center">
                            {item.estacao['ns2:activeState'] ? (
                                <p className="bg-lilas/60 text-lilas rounded-2xl p-1">
                                    Activo
                                </p>
                            ) : (
                                <p className="bg-red-500/60 text-red-500 rounded-2xl p-1">
                                    Bloqueada
                                </p>
                            )}
                        </td>
                        <td className="px-4 py-3 flex items-center justify-end">
                            <Link href={`estacoes/${item.estacao["ns2:id"]}`}> <span className="flex text-white bg-lilas rounded-xl p-2">
                                <EyeIcon className="size-5" />Visualizar Estação
                            </span></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}