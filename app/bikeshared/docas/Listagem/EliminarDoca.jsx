import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function EliminarDoca() {
    const { id } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        // Adicione a lógica de eliminação aqui
        history.push('/listagem-doca');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-1/2">
                <button className="absolute top-2 right-2 text-red-500" onClick={() => history.push('/listagem-doca')}>
                    <FaTimes />
                </button>
                <h2 className="text-2xl font-bold mb-4">Eliminar Doca</h2>
                <p>Tem certeza de que deseja eliminar a doca de ID {id}?</p>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white rounded px-4 py-2 mr-2"
                    >
                        Eliminar
                    </button>
                    <button
                        onClick={() => history.push('/listagem-doca')}
                        className="bg-gray-300 text-black rounded px-4 py-2"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}