import React, { useEffect, useState } from 'react';
import { getReservasEstacao } from '../../../actions/estacao/listarReservas';

export default function ModalListaReservas({ show, onClose, idEstacao, onToggleStatus }) {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    if (show) {
      const fetchReservas = async () => {
        const result = await getReservasEstacao(idEstacao);
        setReservas(result);
      };
      fetchReservas();
    }
  }, [show, idEstacao]);


  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Lista de Reservas</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
        </div>
        <div>
          {reservas.length > 0 ? (
            reservas.map((reserva, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <td className="py-3 px-4 text-center">{item.estacao.reserva['ns2:id']}</td>
                <td className="py-3 px-4 text-center">{item.estacao.rese['ns2:nome']}</td>
              </div>
            ))
          ) : (
            <p>Não há reservas disponíveis</p>
          )}
        </div>
      </div>
    </div>
  );
}
