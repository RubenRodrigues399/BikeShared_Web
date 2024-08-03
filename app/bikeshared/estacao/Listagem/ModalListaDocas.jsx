import React, { useEffect, useState } from 'react';
import { getDocasPorEstacao } from '../../../actions/docas/listarDocas';

export default function ModalListaDocas({ show, onClose, estacaoId, onToggleStatus }) {
  const [docas, setDocas] = useState([]);

  useEffect(() => {
    if (show) {
      const fetchDocas = async () => {
        const result = await getDocasPorEstacao(estacaoId);
        setDocas(result);
        console.log('jsjsj', result)
      };
      fetchDocas();
    }
  }, [show, estacaoId]);

  const handleToggleStatus = (doca) => {
    onToggleStatus(doca);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Lista de Docas</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
        </div>
        <div>
          {docas.length > 0 ? (
            docas.map((doca, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span><strong>{doca.reference}:</strong> {doca.aberta ? 'Livre' : 'Ocupada'}</span>
                <div>
                  <button
                    onClick={() => handleToggleStatus(doca)}
                    className={`px-4 py-2 rounded mr-2 ${
                      doca.aberta ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                    }`}
                  >
                    {doca.aberta ? 'Ocupar' : 'Liberar'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Não há docas disponíveis</p>
          )}
        </div>
      </div>
    </div>
  );
}
