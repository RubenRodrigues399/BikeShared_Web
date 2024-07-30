

import Link from 'next/link';
import NavBar from '../../../components/NavBar'
import LinhaTabelaEstacao from '../../../components/LinhaTabelaEstacao'
import { FaHome, FaArrowRight, FaPlus } from 'react-icons/fa'
import {getTodasEstacoes } from '../../../actions/estacao/estacao'

export default async function ListagemEstacao() {

    const estacoes = await getTodasEstacoes()
    return (
        <>
            <div className='w-screen h-screen'>
                <NavBar />
                <div className='w-full mt-8'>
                    <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke] rounded-md border-2 border-lilas">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/Home" className="inline-flex items-center text-sm font-medium">
                                    <span className="w-3 h-3 me-2.5"><FaHome /></span>
                                    <span className="text-lilas">Home</span>
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <FaArrowRight />
                                    <span className="ms-1 text-sm font-medium md:ms-2 text-lilas">Lista de estações</span>
                                </div>
                            </li>
                        </ol>
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full justify-end">
                            <li className="inline-flex items-center">
                                <Link href="/bikeshared/estacao/Registrar/" className="inline-flex items-center text-sm font-medium">
                                    <span className="w-20 h-8 flex items-center justify-center rounded bg-lilas text-white">Add&nbsp;<FaPlus /></span>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <main className='w-full'>
                    <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                        <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
                            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                                <div className="relative">
                                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4">
                                    </div>
                                    <div className="overflow-x-auto rounded">
                                        <table className="w-full text-sm rounded">
                                            <thead className="text-xs text-left uppercase bg-lilas">
                                                <tr>
                                                    <th scope="col" className="px-3 py-3 text-white">Id estação</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Nome</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Quantidade de docas</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Prémio</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Estado</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Localização</th>
                            
                                                    <th scope="col" className="px-3 py-3 text-white">
                                                        <span className="sr-only">Acções</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    estacoes.map((item)=>
                                                        (<tr className="border-b border hover:bg-roxo/5" key={item.id}>
                                                            <td  className="py-3 px-4 ">
                                                               { item.id}
                                                            </td >
                                                            <td  className="py-3 px-4 ">
                                                               { item.nome}
                                                            </td>
                                                            <td  className="py-3 px-4 ">
                                                               { item.qtdDocasTotais}
                                                            </td>
                                                            <td  className="py-3 px-4 ">
                                                               { item.premio}
                                                            </td>
                                                            <td  className="py-3 px-4 ">
                                                             {item.activeState ? (<p className='bg-green-400 text-green-500 rounded-2xl p-1'>Activo</p>):(<p className='bg-yellow-300 text-yellow-400 rounded-2xl p-1'>Bloqueada</p>)}
                                                            </td>
                                                            <td  className="py-3 px-4 ">
                                                               { item.localName}
                                                            </td>


                                                        </tr>)
                                                        
                                                    )
                                                }
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 mt-12">
                                    </nav>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}