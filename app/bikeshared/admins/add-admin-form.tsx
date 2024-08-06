"use client"

import { cadastroadmin } from "@/app/actions/admin/addAdmin";
import { redirect } from "next/navigation";

import toast from "react-hot-toast";

export function AddAdminForm() {

    return (
        <section className='w-3/5 mt-[-55px] mx-auto flex justify-center'>
            <div className="w-full mx-auto max-w-screen-xl py-16">
                <section className="py-2">

                    <form action={async (formData: FormData) => {
                        const result = await cadastroadmin(formData);

                        if (!result?.erro === false)
                            toast.error(`${result?.mensagem}`)

                        toast.success(result?.mensagem)

                        //  revalidatePath("/bikeshared/admins")
                        redirect("/bikeshared/admins")
                    }

                    } className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="gap-6 p-6 bg-gray-50 rounded-md shadow-sm dark:bg-gray-50 pt-8">
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="nome" className="text-lilas">Nome</label>
                                    <input id="nome" name="nome" type="text" placeholder="Seu nome" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="sobrenome" className="text-lilas">Sobrenome</label>
                                    <input id="sobrenome" name="sobrenome" type="text" placeholder="Seu sobrenome" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="genero" className="text-lilas">Gênero</label>
                                    <select id="genero" name="genero" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required>
                                        <option className="text-lilas" value="">----</option>
                                        <option className="text-lilas" value="Masculino">Masculino</option>
                                        <option className="text-lilas" value="Feminino">Feminino</option>
                                    </select>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="numBi" className="text-lilas">Número do BI</label>
                                    <input id="numBi" name="numBi" type="text" placeholder="Digite o número do seu BI" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="dataNascimento" className="text-lilas">Data de nascimento</label>
                                    <input id="dataNascimento" name="dataNascimento" type="date" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-lilas">Email</label>
                                    <input id="email" name="email" type="email" placeholder="Digite o seu email" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="telefone" className="text-lilas">Telefone</label>
                                    <input id="telefone" name="telefone" type="tel" placeholder="Digite o seu telefone" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                                {/* <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="tipo" className="text-lilas">Tipo de Admin</label>
                                    <select id="tipo" name="tipo" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required>
                                        <option className="text-lilas" value=""></option>
                                        <option className="text-lilas" value="2">Admin</option>
                                        <option className="text-lilas" value="3">Super Admin</option>
                                    </select>
                                </div>  */}
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="password" className="text-lilas">Senha</label>
                                    <input id="password" name="password" type="text" placeholder="Digite a senha" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                </div>
                            </div>
                            <div className="col-span-full my-3">
                                <button type="submit" className="p-2 w-full bg-lilas rounded text-gray-50">
                                    Registrar
                                </button>
                            </div>
                        </fieldset>
                    </form>

                </section>
            </div>
        </section>
    )
}