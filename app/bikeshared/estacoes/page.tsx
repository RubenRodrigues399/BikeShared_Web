import { EstacoesTable } from "./estacoes-table";

export default function EstacoesPage() {
    return (
        <div className="w-full">
            <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
                    <div className="mx-auto max-w-screen-xl px-4">
                        <div className="relative">
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-bold">Estações do BikeShared</h2>

                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4">
                                <EstacoesTable />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}