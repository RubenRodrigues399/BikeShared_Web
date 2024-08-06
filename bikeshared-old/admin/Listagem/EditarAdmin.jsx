import React, { useState } from 'react';

export default function ModalEditarCiclista({ show, onClose, estacao, onSave }) {
    const [formData, setFormData] = useState({ ...estacao });

    if (!show) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Editar Estação</h2>
                    <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            value={formData.nome}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="qtdDocas" className="block text-sm font-medium text-gray-700">Quantidade de Docas</label>
                        <input
                            id="qtdDocas"
                            name="qtdDocas"
                            type="number"
                            value={formData.qtdDocas}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="premio" className="block text-sm font-medium text-gray-700">Prêmio</label>
                        <input
                            id="premio"
                            name="premio"
                            type="text"
                            value={formData.premio}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
                        <input
                            id="estado"
                            name="estado"
                            type="text"
                            value={formData.estado}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700">Localização</label>
                        <input
                            id="localizacao"
                            name="localizacao"
                            type="text"
                            value={formData.localizacao}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                        <button type="submit" className="bg-lilas text-white px-4 py-2 rounded">Salvar</button>
                        <button type="button" onClick={onClose} className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}