"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import SuccessMensage from '../../../components/SuccesMessageComponent';
import LinhaTabelaAdmin from '../../../components/LinhaTabelaAdmin';
import { FaHome, FaStickyNote, FaSearch, FaFilter, FaArrowRight, FaPlus } from 'react-icons/fa';

export default function ListagemAdmin() {

    const [filter, setFilter] = useState(false)

    return (
        <>
            <div className='w-screen h-screen bg-[#CECECE]'>

                <NavBar />

                <div className='w-full mt-8'>
                    <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke] rounded-md border-2 border-lilas">
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
                                    <span className="ms-1 text-sm font-medium md:ms-2 dark:text-lilas">Lista de admins</span>
                                </div>
                            </li>
                        </ol>
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full justify-end">
                            <li className="inline-flex items-center">
                                <Link href="../../../auth/registro/" className="inline-flex items-center text-sm font-medium">
                                    <span className="w-20 h-8 flex items-center justify-center rounded bg-lilas text-white">Add&nbsp;<FaPlus /></span>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>

                <main className='w-full'>
                    <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                        <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
                            <div className="mx-auto max-w-screen-xl px-4">
                                <div className="relative">
                                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4">
                                        <div className="w-1/2">
                                            <form className="flex items-center">                                               
                                                <div className="relative w-full">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <FaSearch/>
                                                    </div>
                                                    <input type="text" id="pesquisarUser" className="bg-[whitesmoke] rounded-md text-sm block w-full pl-10 py-3 px-2 focus:dark:ring-lilas dark:border-lilas outline-none border-2 border-lilas" placeholder="Pesquisar admin" required="" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                            <div className="flex items-center space-x-3 w-full md:w-auto" onClick={() => { filter ? setFilter(false) : setFilter(true) }}>
                                                <button className="w-full text-black md:w-auto flex items-center justify-center rounded-md border-2 border-lilas py-2 px-4 text-sm font-medium focus:outline-none bg-[whitesmoke]" type="button">
                                                    <span className="w-3 h-3 me-2.5"><FaFilter /></span>
                                                    Filtrar
                                                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                    </svg>
                                                </button>
                                                <div className={`z-10 ${filter ? 'absolute' : 'hidden'} top-[70px] right-0 w-[200px] p-4 bg-white rounded-lg shadow-md border-2 border-solid border-gray-200`}>
                                                    <h6 className="mb-3 text-sm font-medium">Filtrar por: </h6>
                                                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                                        <li className="flex items-center">
                                                            <input id="nome" type="checkbox" value="" className="w-4 h-4 bg-gray-400 border-2 border-lilas rounded" />
                                                            <label htmlFor="nome" className="ml-2 text-sm font-medium">Nome</label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input id="genero" type="checkbox" value="" className="w-4 h-4 bg-gray-400 border-2 border-lilas rounded" />
                                                            <label htmlFor="genero" className="ml-2 text-sm font-medium">Gênero</label>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <input id="numTel" type="checkbox" value="" className="w-4 h-4 bg-gray-400 border-2 border-lilas rounded" />
                                                            <label htmlFor="numtel" className="ml-2 text-sm font-medium">Número de telefone</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto rounded">
                                        <table className="w-full text-sm rounded ">
                                            <thead className="text-xs text-left uppercase bg-lilas">
                                                <tr>
                                                    <th scope="col" className="px-3 py-3 text-white">Id user</th>
                                                    <th scope="col" className="px-3 py-3 text-white">nome</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Gênero</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Número do BI</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Data de nascimento</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Telefone</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Tipo</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Data de criação</th>
                                                    <th scope="col" className="px-3 py-3 text-white">Data de actualização</th>
                                                    <th scope="col" className="px-3 py-3 text-white">
                                                        <span className="sr-only">Acções</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <LinhaTabelaAdmin id="1" nome="Ruben Rodrigues" genero="Masculino" numbi="006754106LA044" dataNasci="03-03-1999" telefone="937869519" tipo="2"     dataCriacao="20-04-2024" dataActualizacao="04-07-2024"/>
                                                <LinhaTabelaAdmin id="2" nome="Silk Manuel"     genero="Masculino" numbi="004387254LA098" dataNasci="09-08-2001" telefone="946753908" tipo="2" dataCriacao="22-04-2024" dataActualizacao="15-07-2024"/>
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
        </>
    )
}