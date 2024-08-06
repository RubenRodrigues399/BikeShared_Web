import { getEstacaoDetalhe } from "../../../actions/estacao/detalhesEstacao"
import { AddDoca } from "./add-docas"
import { DocaTable } from "./doca-table"

export default async function EstacaoDetail({ params }: { params: { id: string } }) {
    const detalhes = await getEstacaoDetalhe(params.id)

    return (
        <div className="w-full">
            <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
                    <div className="mx-auto max-w-screen-xl px-4">
                        <div className="relative">
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-bold">Administradores do BikeShared</h2>
                                <div className="bg-lilas rounded">


                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4">
                                Add Docas
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>{detalhes?.nome}</h2>
                                <p>Loca: <span>{detalhes.local}</span></p>
                                <p>Ponto: <span>{detalhes.premio}</span></p>
                                <p>Estado: {detalhes.activeState ? (<span>Ativada</span>) : (<span>Destativada</span>)}</p>
                                <p>Docas: <span>{detalhes.qtdDocasTotais}</span></p>
                            </div>
                            <div>
                                <AddDoca id={params.id} />
                            </div>
                            <DocaTable idEstacao={params.id} />

                        </div>
                    </div>
                </section>
            </div>
        </div>


    )

}