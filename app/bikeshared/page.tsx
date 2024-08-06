//"use client"
import {
    FaArtstation,
    FaBicycle,
    FaPlaceOfWorship,
    FaUser,
} from "react-icons/fa";
import { getTodosAdmins } from "../actions/admin/listarAdmins";
import { getTodosCiclistas } from "../actions/ciclista/listarCiclistas";
import { getTodasEstacoes } from "../actions/estacao/listarEstacoes";
import { Card } from "../components/card";

export default async function Home() {
    const estacoes = await getTodasEstacoes();
    const ciclistas = await getTodosCiclistas();
    const admins = await getTodosAdmins();
    return (
        <div>
            <div className="w-full mt-8">
                <div className="w-5/6 mx-auto">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">
                        <Card title="estações" num={estacoes.length} icon={<FaArtstation className="text-4xl w-4/12 text-lilas" />} />
                        <Card title="docas livres" num={4} icon={<FaPlaceOfWorship className="text-4xl w-4/12 text-lilas" />} />
                        <Card title="docas" num={8} icon={<FaPlaceOfWorship className="text-4xl w-4/12 text-lilas" />} />
                    </div>
                </div>
            </div>

            <div className="w-full mt-8">
                <div className="w-5/6 mx-auto">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">
                        <Card icon={<FaBicycle className="text-4xl w-4/12 text-lilas" />} title="bicicletas" num={12} />
                        <Card icon={<FaUser className="text-4xl w-4/12 text-lilas" />} title="utilizadores" num={ciclistas.length} />
                        <Card icon={<FaUser className="text-4xl w-4/12 text-lilas" />} title="administradores" num={admins.length} />


                        <div className="px-1 w-auto mx-auto flex">
                            <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-1">
                                <div>
                                    <div className="py-2 px-8 w-[400px] rounded-md bg-white b-black h-[238px] overflow-x-hidden border-2 border-lilas">
                                        <div className="mt-3"></div>
                                        <tr className="w-full flex justify-between">
                                            <td className="text-lilas">Estaçoes</td>
                                            <td className="text-lilas">{estacoes.length}</td>
                                        </tr>
                                        <div className="w-full rounded-full">
                                            <div className="barraProgressoEstacao w-[45%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                                                {" "}
                                                45% em uso
                                            </div>
                                        </div>
                                        <tr className="w-full flex justify-between">
                                            <td className="text-lilas">Docas</td>
                                            <td className="text-lilas">8</td>
                                        </tr>
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div className="barraProgressoEstacao w-[45%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                                                {" "}
                                                45% em uso
                                            </div>
                                        </div>
                                        <tr className="w-full flex justify-between">
                                            <td className="text-lilas">Bicicleta</td>
                                            <td className="text-lilas">12</td>
                                        </tr>
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div className="barraProgressoEstacao w-[80%] my-[5px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                                                {" "}
                                                80% em uso
                                            </div>
                                        </div>
                                        <tr className="w-full flex justify-between mt-2">
                                            <td className="text-lilas">Usuarios</td>
                                            <td className="text-lilas">9</td>
                                        </tr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
