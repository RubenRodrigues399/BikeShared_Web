"use client"
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaHome, FaPlus } from 'react-icons/fa';
import LinhaTabelaBike from '../../../app/components/LinhaTabelaBike';
import NavBar from '../../../app/components/NavBar';

export default function ListagemBike() {

    return (
     
            <div className='w-screen h-screen bg-[#CECECE]'>

                <NavBar />

                <div className='w-full mt-8'>
                    <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke]  TEXrounded-md border-2 border-lilas">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/Home" className="inline-flex items-center text-sm font-medium">
                                <span className="w-3 h-3 me-2.5"><FaHome/></span> 
                                    <span className="text-lilas">Home</span>   
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                <FaArrowRight />
                                <span className="ms-1 text-sm font-medium md:ms-2 dark:text-lilas">Lista de bicicletas</span>
                                </div>
                            </li>
                        </ol>
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full justify-end">
                            <li className="inline-flex items-center">
                                <Link href="/bikeshared/bikes/Registrar/" className="inline-flex items-center text-sm font-medium">
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
                                                    <th scope="col" className="px-3 py-3 text-white">Id bicicleta</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Cor</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Doca</th>                                               
                                                    <th scope="col" className="px-3 py-3 text-white">Data de criação</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Data de actualização</th>
                                                    <th scope="col" className="px-3 py-3 text-white">
                                                        <span className="sr-only">Acções</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <LinhaTabelaBike id="1" cor="Branca" estado="Activa"    doca="Doca3" dataCriacao="04-01-2023" dataActualizacao="19-03-2024" />
                                                <LinhaTabelaBike id="2" cor="Preta"  estado="Desactiva" doca="Doca1" dataCriacao="04-01-2023" dataActualizacao="19-03-2024" />
                                                <LinhaTabelaBike id="3" cor="Lilás"  estado="Desactiva" doca="Doca2" dataCriacao="04-01-2023" dataActualizacao="19-03-2024" />                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 mt-12" >
                                    </nav>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
    
    )
}