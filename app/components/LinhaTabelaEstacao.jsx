"use client"

import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import ModalVisualizarEstacao from '../bikeshared/estacao/Listagem/VisualizarEstacao'
import ModalEditarEstacao from '../bikeshared/estacao/Listagem/EditarEstacao' 
import ModalEliminarEstacao from '../bikeshared/estacao/Listagem/EliminarEstacao' 

export default function LinhaTabelaEstacao(props) {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleViewClick = () => {
        setShowViewModal(true);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleCloseViewModal = () => {
        setShowViewModal(false);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleSave = (updatedData) => {
        // Implementar a lógica para atualizar os dados da estação
        console.log('Dados atualizados:', updatedData);
        handleCloseEditModal();
    };

    const handleConfirmDelete = () => {
        // Implementar a lógica para eliminar a estação
        console.log('Estação eliminada:', props.id);
        handleCloseDeleteModal();
    };

    return (
        <>
            <tr className="border-b text-left border-lilas">
                <td className="px-4 py-3 font-medium max-w-[200px] text-wrap">{props.id}</td>
                <td className="px-4 py-3">{props.nome}</td>
                <td className="px-4 py-3">{props.qtdDocas}</td>
                <td className="px-4 py-3">{props.premio}</td>
                <td className="px-4 py-3">{props.estado}</td>
                <td className="px-4 py-3">{props.localizacao}</td>
                <td className="px-4 py-3">{props.dataCriacao}</td>
                <td className="px-4 py-3">{props.dataActualizacao}</td>
                <td className="px-4 py-3">{props.foto}</td>
                <td className="px-4 py-3 flex items-center justify-end">
                    <div>
                        <ul className="py-1 text-sm flex gap-1">
                            <li>
                                <button onClick={handleViewClick}>
                                    <FaEye />
                                </button>
                            </li>
                            <li>
                                <button onClick={handleEditClick}>
                                    <FaEdit />
                                </button>
                            </li>
                            <li>
                                <button onClick={handleDeleteClick}>
                                    <FaTrash />
                                </button>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>

            <ModalVisualizarEstacao 
                show={showViewModal} 
                onClose={handleCloseViewModal} 
                estacao={props} 
            />

            <ModalEditarEstacao 
                show={showEditModal} 
                onClose={handleCloseEditModal} 
                estacao={props} 
                onSave={handleSave} 
            />

            <ModalEliminarEstacao 
                show={showDeleteModal} 
                onClose={handleCloseDeleteModal} 
                onConfirm={handleConfirmDelete} 
            />
        </>
    );
}