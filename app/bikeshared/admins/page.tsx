import { ModalButton } from "@/app/components/modal-button";
import { AddAdminForm } from "./add-admin-form";
import { AdminTable } from "./admin-table";

export default function Administradores() {
    return (

        <div className="w-full">
            <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
                    <div className="mx-auto max-w-screen-xl px-4">
                        <div className="relative">
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-bold">Administradores do BikeShared</h2>
                                <div className="bg-lilas rounded">
                                    <ModalButton buttonText="Cadastrar Novo Utilizador"> <AddAdminForm /></ModalButton>

                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4">
                                <AdminTable />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}