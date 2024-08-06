import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function EditarDoca() {
    const { id } = useParams();
    const history = useHistory();

    const [descricao, setDescricao] = useState("Descrição da Doca");
    const [estado, setEstado] = useState("Activa");
    const [bicicleta, setBicicleta] = useState("Bike1");
    const [estacao, setEstacao] = useState("Estação1");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de envio aqui
        history.push('/listagem-doca');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-1/2">
                <button className="absolute top-2 right-2 text-red-500" onClick={() => history.push('/listagem-doca')}>
                    <FaTimes />
                </button>
                <h2 className="text-2xl font-bold mb-4">Editar Doca</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descrição:</label>
                        <input
                            type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="w-full border rounded px-2 py-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Estado:</label>
                        <select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className="w-full border rounded px-2 py-1"
                        >
                            <option value="Activa">Activa</option>
                            <option value="Desactiva">Desactiva</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Bicicleta:</label>
                        <input
                            type="text"
                            value={bicicleta}
                            onChange={(e) => setBicicleta(e.target.value)}
                            className="w-full border rounded px-2 py-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Estação:</label>
                        <input
                            type="text"
                            value={estacao}
                            onChange={(e) => setEstacao(e.target.value)}
                            className="w-full border rounded px-2 py-1"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white rounded py-2">
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}