import React from 'react';

export default function SuccessMensage({ message }) {
    return (
        <div className="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md absolute top-24 right-10" role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="green" className="w-10 h-10 mr-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold text-green-600">Sucesso</p>
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    );
}