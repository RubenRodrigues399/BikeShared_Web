"use client"
import Image from "next/image";
//import styles from "../Login/login.module.css";
import {authenticate, login} from '../../actions/user';
import SuccessMensage from "../../components/SuccesMessageComponent";

import {useFormState} from "react-dom"
export default function Login() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)
    return (
        <div className='w-screen h-screen'>
            <header className="bg-gray-50 border-b-2 border-lilas fixed top-0 w-full flex p-2 text-lg items-center">
                <span className="text-lilas font-light text-xl">BikeShared&nbsp;</span>
                <Image src={"/bike1.png"} width={30} height={30} alt="BikeShared logo" />
            </header>
                <div className='w-full h-full flex mt-10 bg-[#CECECE]'>
                    <div className='w-1/2 h-full flex items-center justify-center'>
                        <Image src={"/bike1.png"} width={500} height={200} alt="BikeShared logo" />
                    </div>
                    <div className='w-[600px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center mt-16 border-2 border-lilas'>
                        <div className='w-2/3 text-left'>
                            <p className='font-extrabold text-2xl text-lilas tracking-wider mb-2 pl-2'>Bem vindo ao Bikeshared</p>
                        </div>
                        <form action={dispatch} className='w-2/3 flex flex-col items-center'>
                            <label htmlFor='email' className='w-72 md:w-96 text-left font-bold text-lilas text-2xl mt-6 mb-2'>
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="email"
                                id='email'
                                name="email"
                                className='w-72 md:w-96 h-10 text-gray-700 outline-none bg-gray-300 border-2 focus:ring-lilas border-lilas px-2 rounded'
                                placeholder='Digite o seu email'
                                required
                            />
                            
                            <label htmlFor='password' className='w-72 md:w-96 text-left font-bold text-2xl text-lilas mt-4 mb-3'>
                                Senha <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="password"
                                id='password'
                                name="password"
                                className='w-72 md:w-96 h-10 text-gray-700 outline-none bg-gray-300 border-2 focus:ring-lilas border-lilas px-2 rounded'
                                placeholder='***********'
                                required
                            />
                            
                            <button type="submit" className='w-72 md:w-96 h-10 flex mt-8 text-xl text-white items-center bg-lilas justify-center rounded'>
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>            
            <footer className="fixed bottom-0 w-full flex items-center justify-center bg-gray-50 text-lilas border-t-2 border-lilas">
                <h2 className="text-lg font-medium">BikeShared &copy;APRS Copyright 2024</h2>
            </footer>
        </div>
    );
}