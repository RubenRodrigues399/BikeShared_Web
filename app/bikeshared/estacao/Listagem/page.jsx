"use client";
import Link from "next/link";
import NavBar from "../../../components/NavBar";
import LinhaTabelaEstacao from "../../../components/LinhaTabelaEstacao";
import {
  FaHome,
  FaArrowRight,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { getTodasEstacoes } from "../../../actions/estacao/listarEstacoes";
import { useState, useEffect } from "react";
import ModalVisualizarEstacao from '../../../bikeshared/estacao/Listagem/VisualizarEstacao'
import ModalEditarEstacao from '../../../bikeshared/estacao/Listagem/EditarEstacao' 
import ModalEliminarEstacao from '../../../bikeshared/estacao/Listagem/EliminarEstacao' 

export default function ListagemEstacao() {
  const [estacoes, setEstacoes] = useState([]);
  const [selectedEstacao, setSelectedEstacao] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleViewClick = (estacao) => {
    setSelectedEstacao(estacao);
    setShowViewModal(true);
  };

  const handleEditClick = (estacao) => {
    setSelectedEstacao(estacao);
    setShowEditModal(true);
  };

  const handleDeleteClick = (estacao) => {
    setSelectedEstacao(estacao);
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
    console.log("Dados atualizados:", updatedData);
    handleCloseEditModal();
  };

  const handleConfirmDelete = () => {
    // Implementar a lógica para eliminar a estação
    console.log("Estação eliminada:", selectedEstacao.id);
    handleCloseDeleteModal();
  };

  useEffect(() => {
    async function fetchData() {
      const result = await getTodasEstacoes();
      setEstacoes(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-[#CECECE]">
        <NavBar />
        <div className="w-full mt-8">
          <nav className="flex px-8 py-3 w-5/6 mx-auto text bg-[whitesmoke] rounded-md border-2 border-lilas">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/Home"
                  className="inline-flex items-center text-sm font-medium"
                >
                  <span className="w-3 h-3 me-2.5">
                    <FaHome />
                  </span>
                  <span className="text-lilas">Home</span>
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <FaArrowRight />
                  <span className="ms-1 text-sm font-medium md:ms-2 text-lilas">
                    Lista de estações
                  </span>
                </div>
              </li>
            </ol>
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full justify-end">
              <li className="inline-flex items-center">
                <Link
                  href="/bikeshared/estacao/Registrar/"
                  className="inline-flex items-center text-sm font-medium"
                >
                  <span className="w-20 h-8 flex items-center justify-center rounded bg-lilas text-white">
                    Add&nbsp;
                    <FaPlus />
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <main className="w-full">
          <div className="w-5/6 h-auto mx-auto flex justify-center mt-5 mb-3">
            <section className="bg-[whitesmoke] rounded-md w-full p-3 sm:p-0 overflow-hidden">
              <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-3 py-4"></div>
                  <div className="overflow-x-auto rounded">
                    <table className="w-full text-sm rounded">
                      <thead className="text-xs text-left uppercase bg-lilas">
                        <tr>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            Id estação
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            Nome
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            N* de docas
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            N* de docas livres
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            Local
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            Estado
                          </th>
                          <th scope="col" className="px-3 py-3 text-white text-center">
                            <span className="sr-only">Acções</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {estacoes.map((item, index) => (
                          <tr
                            className="border-b border hover:bg-roxo/5"
                            key={index}
                          >
                            <td className="py-3 px-4 text-center">{item.estacao['ns2:id']}</td>
                            <td className="py-3 px-4 text-center">{item.estacao['ns2:nome']}</td>
                            <td className="py-3 px-4 text-center">{item.estacao['ns2:qtdDocasTotais']}</td>
                            <td className="py-3 px-4 text-center">{item.estacao['ns2:qtdDocasLivres']}</td>
                            <td className="py-3 px-4 text-center">{item.estacao['ns2:local']}</td>
                            <td className="py-3 px-4 text-center">
                              {item.estacao['ns2:activeState'] ? (
                                <p className="bg-lilas text-white rounded-2xl p-1">
                                  Activo
                                </p>
                              ) : (
                                <p className="bg-red-500 text-wite rounded-2xl p-1">
                                  Bloqueada
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-3 flex items-center justify-end">
                              <div>
                                <ul className="py-1 text-sm flex gap-1">
                                  <li>
                                    <button onClick={() => handleViewClick(item.estacao)}>
                                      <FaEye />
                                    </button>
                                  </li>
                                  <li>
                                    <button onClick={() => handleEditClick(item.estacao)}>
                                      <FaEdit />
                                    </button>
                                  </li>
                                  <li>
                                    <button onClick={() => handleDeleteClick(item.estacao)}>
                                      <FaTrash />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 mt-12"></nav>
                </div>
              </div>
            </section>
          </div>
        </main>

        <ModalVisualizarEstacao
          show={showViewModal}
          onClose={handleCloseViewModal}
          estacao={selectedEstacao}
        />

        <ModalEditarEstacao
          show={showEditModal}
          onClose={handleCloseEditModal}
          estacao={selectedEstacao}
          onSave={handleSave}
        />

        <ModalEliminarEstacao
          show={showDeleteModal}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </>
  );
}
