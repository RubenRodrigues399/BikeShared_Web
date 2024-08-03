import React, { useState } from 'react';
//import ModalListaDocas from './ModalListaDocas';

export default function ModalVisualizarCiclista({ show, onClose, ciclista, onUpdateEstacao }) {
    const [showDocasModal, setShowEstacaoModal] = useState(false);

    if (!show) return null;

    const handleOpenCiclistasModal = () => {
        setShowEstacaoModal(true);
    };

    const handleCloseCiclistasModal = () => {
        setShowEstacaoModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg relative">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Detalhes da Estação</h2>
                        <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
                    </div>
                    <div>
                        <p><strong>ID:</strong> {ciclista.id}</p>
                        <p><strong>Nome:</strong> {ciclista.nome}</p>
                        <p><strong>Sobrenome:</strong> {ciclista.sobrenome}</p>
                        <p><strong>Genero:</strong> {ciclista.genero}</p>
                        <p><strong>BI:</strong> {ciclista.BI}</p>
                        <p><strong>Email:</strong> {ciclista.email}</p>
                        <p><strong>Telefone:</strong> {ciclista.telefone}</p>
                    </div>
                      
                </div>
            </div>
        </>
    );
}
