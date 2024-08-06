import React from 'react';

export default function ModalConfirmarEliminacao({ show, onClose, onConfirm }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg relative">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Confirmar Eliminação</h2>
                    <p className="mt-2">Tem certeza de que deseja eliminar esta estação?</p>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Confirmar</button>
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancelar</button>
                </div>
            </div>
        </div>
    );
}