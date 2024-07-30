"use client"
import NavBar from '../components/NavBar'
import { FaArtstation } from 'react-icons/fa'
import { FaPlaceOfWorship } from 'react-icons/fa'
import { FaBicycle } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
//import {getTodasEstacoes } from '../actions/estacao/cadastrar'

export default function Servico() {
    return (
        <>
            <div className='w-screen h-screen bg-[#CECECE]'>

                <NavBar />

                <div className='w-full mt-8'>

                    <div className="w-5/6 mx-auto">
                        <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">
                            <div className="relative p-6 rounded-md bg-white flex items-center shadow border-2 border-lilas">
                                <div className="space-y-2 w-11/12">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-400">
                                        <span className='text-lilas'>Total de estaçoes</span>
                                    </div>

                                    <div className="text-3xl text-lilas">
                                        4
                                    </div>

                                    {/* <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
                                        <span className=' text-green-600'>2 Incluídas recentemente</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div> */}
                                </div>
                                <FaArtstation className='text-4xl w-4/12 text-lilas' />
                            </div>

                            <div className="relative p-6 rounded-md bg-white flex items-center shadow border-2 border-lilas">
                                <div className="space-y-2 w-11/12">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-400">
                                        <span className='text-lilas'>Total de docas livres</span>
                                    </div>

                                    <div className="text-3xl text-lilas">
                                        8
                                    </div>

                                    {/* <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
                                        <span className=' text-green-600'>2 Liberadas recentemente</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div> */}
                                </div>
                                <FaPlaceOfWorship className='text-4xl w-4/12 text-lilas'/>
                            </div>

                            <div className="relative p-6 rounded-md bg-white flex items-center shadow border-2 border-lilas">
                                <div className="space-y-2 w-11/12">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-400">
                                        <span className='text-lilas'>Total de docas ocupadas</span>
                                    </div>

                                    <div className="text-3xl text-lilas">
                                        4
                                    </div>

                                    {/* <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
                                        <span className=' text-red-600'>2  Em desuso</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                                                clipRule="evenodd"></path>
                                        </svg>                                       
                                    </div> */}
                                </div>
                                <FaPlaceOfWorship className='text-4xl w-4/12 text-lilas'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-8'>

                    <div className="w-5/6 mx-auto">
                        <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">
                            <div className="relative p-6 rounded-md bg-white flex items-center shadow border-2 border-lilas">
                                <div className="space-y-2 w-11/12">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-400">
                                        <span className='text-lilas'>Total de bicicletas</span>
                                    </div>

                                    <div className="text-3xl text-lilas">
                                        12
                                    </div>

                                    {/* <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
                                        <span className=' text-green-600'>4 Incluídas recentemente</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div> */}
                                </div>
                                <FaBicycle className='text-4xl w-4/12 text-lilas' />
                            </div>

                            <div className="relative p-6 rounded-md bg-white flex items-center shadow border-2 border-lilas">
                                <div className="space-y-2 w-11/12">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-400">
                                        <span className='text-lilas'>Total de utilizadores</span>
                                    </div>

                                    <div className="text-3xl text-lilas">
                                        9
                                    </div>

                                    {/* <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium">
                                        <span className=' text-green-600'>2 Incluídos recentemente</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green"
                                            aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div> */}
                                </div>
                                <FaUser className='text-4xl w-4/12 text-lilas' />
                            </div>

                            <div className="px-1 w-auto mx-auto flex">
                                <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-1">
                                    <div>
                                        <div className="py-2 px-8 w-[400px] rounded-md bg-white b-black h-[238px] overflow-x-hidden border-2 border-lilas">
                                            <div className="mt-3">
                                            </div>
                                            <tr className='w-full flex justify-between'>
                                                <td className="text-lilas">Estaçoes</td>
                                                <td className="text-lilas">4</td>
                                            </tr>
                                            <div className="w-full rounded-full">
                                                <div className="barraProgressoEstacao w-[45%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 45% em uso</div>
                                            </div>
                                            <tr className='w-full flex justify-between'>
                                                <td className="text-lilas">Docas</td>
                                                <td className="text-lilas">8</td>
                                            </tr>
                                            <div className="w-full bg-gray-200 rounded-full">
                                                <div className="barraProgressoEstacao w-[45%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 45% em uso</div>
                                            </div>
                                            <tr className='w-full flex justify-between'>
                                                <td className="text-lilas">Bicicleta</td>
                                                <td className="text-lilas">12</td>
                                            </tr>
                                            <div className="w-full bg-gray-200 rounded-full">
                                                <div className="barraProgressoEstacao w-[80%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 80% em uso</div>
                                            </div>
                                            <tr className='w-full flex justify-between mt-2'>
                                                <td className="text-lilas">Usuarios</td>
                                                <td className="text-lilas">9</td>
                                            </tr>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}