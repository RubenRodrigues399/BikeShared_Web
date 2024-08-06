import { getTodosAdmins } from "@/app/actions/admin/listarAdmins"
import { ModalButton } from "@/app/components/modal-button"
import { EyeIcon } from "@heroicons/react/24/outline"
import { AdminCard } from "./admin-card"

export async function AdminTable() {

    const admins = await getTodosAdmins()
    return (
        <table className="w-full">
            <thead className="text-xs text-left uppercase bg-lilas">
                <tr>
                    <th scope="col" className="px-3 py-3 text-white">Id Admin</th>
                    <th scope="col" className="px-3 py-3 text-white">Nome</th>
                    <th scope="col" className="px-3 py-3 text-white">Sobrenome</th>
                    <th scope="col" className="px-3 py-3 text-white">Gênero</th>
                    <th scope="col" className="px-3 py-3 text-white">Número do BI</th>
                    <th scope="col" className="px-3 py-3 text-white">Email</th>
                    <th scope="col" className="px-3 py-3 text-white">Telefone</th>
                    <th scope="col" className="px-3 py-3 text-white">Acção</th>

                </tr>
            </thead>
            <tbody>
                {admins?.map((item) => (
                    <tr
                        className="border-b border hover:bg-roxo/5"
                        key={item.dadosUser["ns2:id"]}
                    >
                        <td className="py-3 px-4">{item.dadosUser['ns2:id']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:nome']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:sobrenome']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:genero']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:BI']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:email']}</td>
                        <td className="py-3 px-4">{item.dadosUser['ns2:telefone']}</td>
                        {/* <td className="py-3 px-4">{item.dadosUser['ns2:tipo']}</td> */}
                        <td className="px-4 py-3 flex items-center justify-end">
                            <div className="bg-lilas rounded-xl">
                                <ModalButton buttonText="Visualizar " icon={<EyeIcon className="size-5" />}  >
                                    <AdminCard
                                        bi={item.dadosUser['ns2:bi']}
                                        email={item.dadosUser['ns2:email']}
                                        genero={item.dadosUser['ns2:genero']}
                                        id={item.dadosUser['ns2:id']}
                                        nome={item.dadosUser['ns2:nome']}
                                        sobrenome={item.dadosUser['ns2:sobrenome']}
                                        tel={item.dadosUser['ns2:telefone']}
                                    />
                                </ModalButton>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>

            </tfoot>
        </table>

    )
}