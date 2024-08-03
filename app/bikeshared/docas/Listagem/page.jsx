"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import LinhaTabelaDoca from '../../../components/LinhaTabelaDoca'
import { FaHome, FaArrowRight, FaPlus, FaEye,
    FaEdit,
    FaTrash } from 'react-icons/fa'
import { getTodasDocas }   from "../../../actions/docas/listarDocas";
import { useEffect } from "react";

export default function ListagemDoca() {
    const [docas, setDocas] = useState([]);

    useEffect(() => {
        async function fetchData() {
          //const result = await pegarTodosAdmins();
          const result = await getTodasDocas();
          setDocas(result);
        }
        fetchData();
      }, []);

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
                                <span className="ms-1 text-sm font-medium md:ms-2 dark:text-lilas">Lista de docas</span>
                                </div>
                            </li>
                        </ol>
                        
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full justify-end">
                            <li className="inline-flex items-center">
                                <Link href="/bikeshared/docas/Registrar/" className="inline-flex items-center text-sm font-medium">
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
                                            <thead className="w-full text-xs text-left uppercase bg-lilas">
                                            <tr>
                                              <th scope="col" className="px-3 py-3 text-white">Id doca</th>
                                              <th scope="col" className="px-3 py-3 text-white">Referência</th>
                                              <th scope="col" className="px-3 py-3 text-white">Estado</th>
                                              <th scope="col" className="px-3 py-3 text-white">
                                                <span className="sr-only">Acções</span>
                                              </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {docas.map((item, index) => (
                          <tr
                            className="border-b border hover:bg-lilas"
                            key={index}
                          >
                            <td className="py-3 px-4">{item.TodasDocas['ns2:id']}</td>
                            <td className="py-3 px-4">{item.TodasDocas['ns2:reference']}</td>
                            <td className="py-3 px-4">{item.TodasDocas['ns2:aberta']}</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                              <div>
                                <ul className="py-1 text-sm flex gap-1">
                                  <li>
                                    <button
                                      onClick={() => handleViewClick(item)}
                                    >
                                      <FaEye />
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => handleEditClick(item)}
                                    >
                                      <FaEdit />
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => handleDeleteClick(item)}
                                    >
                                      <FaTrash />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
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