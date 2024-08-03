    "use client"
    import React, { useState, useEffect } from 'react';
    import Link from 'next/link';
    import NavBar from '../../../components/NavBar'
    import SuccessMensage from '../../../components/SuccesMessageComponent';
    import { FaHome, FaStickyNote, FaArrowRight } from 'react-icons/fa';
    import { cadastroEstacao } from '../../../../app/actions/estacao/addEstacao';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import adminSchema from '../../../auth/validationSchema';

    export default function Criar(onEstacaoRegistered) {
        const [message, setMessage] = useState(false);

        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: zodResolver(adminSchema),
        });

        const onSubmit = async (formData) => {
            try {
                const newEstacao = await cadastroEstacao(formData);
                setMessage(true);
                setRedirect(true);
                if (onEstacaoRegistered) {
                    onEstacaoRegistered(newEstacao);
                }
            } catch (error) {
                console.error("Failed to register station:", error);
            }
        };

        // const handleSubmit = (e) => {
        //     e.preventDefault();

        //     const formData = new FormData(e.target);

        //     // Enviar dados para o serviço SOAP
        //     enviarDadosParaSoap(formData);
        // };

        // const enviarDadosParaSoap = (formData) => {
        //     const soapRequest = `
        //     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example">
        //         <soapenv:Header/>
        //         <soapenv:Body>
        //             <urn:CriarEstacao>
        //                 <localizacao>${formData.get('localizacao')}</localizacao>
        //                 <docas>${formData.get('docas')}</docas>
        //                 <premio>${formData.get('premio')}</premio>
        //                 <foto>${formData.get('foto')}</foto>
        //             </urn:CriarEstacao>
        //         </soapenv:Body>
        //     </soapenv:Envelope>`;

        //     fetch('https://e1d7-105-172-70-75.ngrok-free.app/baikeshared/user.wsdl', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'text/xml',
        //         },
        //         body: soapRequest,
        //     })
        //         .then((response) => response.text())
        //         .then((data) => {
        //             console.log('Response:', data);
        //             setMessage(true);
        //             setTimeout(() => {
        //                 setMessage(false);
        //             }, 3300);
        //         })
        //         .catch((error) => {
        //             console.error('Error:', error);
        //         });
        // };

        return (
            <>
                <div className='w-screen h-screen'>
                    <NavBar />

                    <div className='w-full mt-8'>
                        <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke] rounded-md border-2 border-lilas">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <Link legacyBehavior href="/Home">
                                        <a className="inline-flex items-center text-sm font-medium">
                                            <span className="w-3 h-3 me-2.5"><FaHome /></span>
                                            <span className="text-lilas">Home</span>
                                        </a>
                                    </Link>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <FaArrowRight />
                                        <span className="ms-1 text-sm font-medium md:ms-2 text-lilas">Registrar Estação</span>
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
                                            <span className="text-white"><FaStickyNote /></span>
                                            <p className="leading-none">
                                                <strong className="block font-medium text-[white]"> Dados da Estação </strong>
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                                <section className='w-3/5 mt-[-55px] mx-auto flex justify-center'>
                                    <div className="w-full mx-auto max-w-screen-xl py-16">
                                        <section className="py-2">
                                            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                                                <fieldset className="gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 pt-8">
                                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label htmlFor="urlEstacao" className="text-lilas">URL da estação</label>
                                                            <input id="urlEstacao" name="urlEstacao" type="text" placeholder="DIgite a URL da estação" className="w-full placeholder:text-lilas my-2 shadow rounded focus:outline-none dark:text-lilas text-sm focus:dark:ring-lilas dark:border-lilas" required minLength={3} />
                                                            <small className="text-red-600">{/* Mensagem de erro aqui */}</small>
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

                    {
                        message &&
                        <SuccessMensage title="Estação Adicionada" text="Aceda a Listagem para ver o Estação adicionada" />
                    }
                </div>
            </>
        );
    }