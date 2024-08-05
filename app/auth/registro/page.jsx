"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import SuccessMensage from '../../components/SuccesMessageComponent';
import { FaHome, FaStickyNote, FaArrowRight } from 'react-icons/fa';
import { cadastroadmin } from '../../actions/admin/addAdmin';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import adminSchema from '../validationSchema';

export default function RegistrarUsers({ onAdminRegistered }) {
    const [section, setSection] = useState(true);
    const [message, setMessage] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: zodResolver(adminSchema),
    // });

    // const onSubmit = async (formData) => {
    //     try {
    //         const newAdmin = await cadastroadmin(formData);
    //         setMessage(true);
    //         setRedirect(true);
    //         if (onAdminRegistered) {
    //             onAdminRegistered(newAdmin);
    //         }
    //     } catch (error) {
    //         console.error("Failed to register admin:", error);
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const newAdmin = await cadastroadmin(formData);
            setMessage(true);
            setRedirect(true);
            if (onAdminRegistered) {
                onAdminRegistered(newAdmin);
            }
        } catch (error) {
            console.error("Failed to register admin:", error);
        }
    };

    useEffect(() => {
        if (redirect) {
            const timer = setTimeout(() => {
                router.push('../../bikeshared/admin/Listagem/');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [redirect, router]);

    return (
        <>
            <div className='w-screen h-screen bg-[#CECECE]'>
                <NavBar />
                <div className='w-full mt-8'>
                    <nav className="flex px-8 py-3 w-5/6 mx-auto text rounded-lg bg-gray-100 border-2 border-lilas">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/Home" className="inline-flex items-center text-sm font-medium">
                                    <FaHome className="w-3 h-3 me-2.5" />
                                    <span className="text-lilas">Home</span>
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <FaArrowRight />
                                    <span className="ms-1 text-sm font-medium md:ms-2 text-lilas">Cadastro de Admins</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <main className='w-full'>
                    <div className='w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3'>
                        <div className='w-full h-16'>
                            <div className='w-3/5 mx-auto'>
                                <ol className="w-full flex divide-x-3 divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
                                    <li className="w-full flex items-center justify-center bg-lilas rounded-md border-2 border-lilas gap-2 p-4">
                                        <FaStickyNote />
                                        <p className="leading-none">
                                            <strong className="block font-medium text-white"> Dados do cadastro </strong>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <section className='w-3/5 mt-[-55px] mx-auto flex justify-center'>
                                <div className="w-full mx-auto max-w-screen-xl py-16">
                                    <section className="py-2">
                                        {section && (
                                            <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
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
                                        )}
                                    </section>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>

            {message && <SuccessMensage message="Administrador re registrado com sucesso!" />}
        </>
    );
}
