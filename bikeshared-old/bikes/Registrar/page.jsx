"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import SuccessMensage from '../../../components/SuccesMessageComponent';
import { FaHome, FaStickyNote, FaArrowRight } from 'react-icons/fa';

export default function Criar() {

    return (
        <>
            <div className='w-screen h-screen bg-[#CECECE]'>

                <NavBar />

                <div className='w-full mt-8'>
                    <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke] rounded-md border-2 border-lilas">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/Home" className="inline-flex items-center text-sm font-medium">
                                    <FaHome className="w-3 h-3 me-2.5"/>
                                    <span className="text-lilas">Home</span>
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <FaArrowRight />
                                    <span className="ms-1 text-sm font-medium  md:ms-2 text-lilas">Registrar Bicicleta</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>


                <main className='w-full'>
                    <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                        <div className='w-full h-16'>
                            <div className='w-3/5 mx-auto'>
                                <ol
                                    className="w-full flex divide-x-3 divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                                >
                                    <li className="w-full flex items-center justify-center bg-lilas rounded-md border-2 border-lilas gap-2 p-4">
                                        <span className="text-white"><FaStickyNote /></span>

                                        <p className="leading-none">
                                            <strong className="block font-medium text-[white]"> Dados da bicicleta </strong>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <section className='w-3/5 mt-[-55px] mx-auto flex justify-center'>
                                <div className="w-full mx-auto max-w-screen-xl py-16">
                                    <section className="py-2">
                                        <form action="" className="container flex flex-col mx-auto space-y-12">
                                           
                                                    <fieldset className="gap-6 p-6 bg-gray-50 rounded-md shadow-sm dark:bg-gray-50 pt-8">
                                                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                                            <div className="col-span-full sm:col-span-3">
                                                                <label htmlFor="cor" className="text-lilas">Cor</label>
                                                                <input id="cor" type="text" placeholder="Cor da bicicleta" className="w-full  placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required />
                                                            </div> 
                                                            <div className="col-span-full sm:col-span-3">
                                                                <label htmlFor="idEstacao" className="text-lilas">Doca</label>
                                                                <select id="idEstacao" className="w-full  placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas">
                                                                    <option className="text-lilas" value="0">Selecione a doca</option>
                                                                    <option className="text-lilas" value="1">Doca1</option>
                                                                    <option className="text-lilas" value="2">Doca2</option>
                                                                    <option className="text-lilas" value="1">Doca3</option>                                                                    
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className='col-span-full my-3'>
                                                            <button className='p-2 w-full bg-lilas rounded text-gray-50' type='submit'>Cadastrar</button>
                                                        </div>
                                                    </fieldset>

                                                   
                                        </form>
                                    </section>
                                </div>
                            </section>

                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}