import React, { useState } from 'react';
import ModalListaDocas from './ModalListaDocas';

export default function ModalVisualizarEstacao({ show, onClose, estacao, onUpdateEstacao }) {
    const [showDocasModal, setShowDocasModal] = useState(false);

    if (!show) return null;

    const handleOpenDocasModal = () => {
        setShowDocasModal(true);
    };

    const handleCloseDocasModal = () => {
        setShowDocasModal(false);
    };

    const handleToggleStatus = (docaToToggle) => {
        // Atualize o status da doca
        const updatedDocas = estacao.qtdDocas.map(doca =>
            doca.id === docaToToggle.id
                ? { ...doca, status: doca.status === 'Livre' ? 'Ocupada' : 'Livre' }
                : doca
        );

        // Atualize a estação com as docas modificadas
        onUpdateEstacao({ ...estacao, docas: updatedDocas });
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
                        <p><strong>ID:</strong> {estacao['ns2:id']}</p>
                        <p><strong>Nome:</strong> {estacao['ns2:nome']}</p>
                        <p><strong>Quantidade de Docas:</strong> {estacao['ns2:qtdDocasTotais']}</p>
                        <p><strong>Prêmio:</strong> {estacao['ns2:premio']}</p>
                        <p><strong>Estado:</strong> {estacao['ns2:activeState'] ? (
                                <span className="bg-lilas w-fit text-white rounded-2xl p-1">
                                  Activo
                                </span>
                              ) : (
                                <span className="bg-red-500 w-fit text-wite rounded-2xl p-1">
                                  Bloqueada
                                </span>
                              )}</p>
                    </div>
                                    
                    <div className="mt-4 flex justify-end">
                        <button onClick={handleOpenDocasModal} className="bg-lilas text-white px-4 py-2 rounded">Lista de docas</button>
                    </div>
                    {/* <div className="mt-4 flex justify-end">
                        <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded">Fechar</button>
                    </div> */}
                </div>
            </div>
            <ModalListaDocas
                show={showDocasModal}
                onClose={handleCloseDocasModal}
                docas={estacao.docas}
                onToggleStatus={handleToggleStatus}
            />
        </>
    );
}
