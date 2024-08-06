//"use client"
import {
    FaArtstation,
    FaPlaceOfWorship,
    FaUser
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
        <div className="flex flex-col items-center justify-center">
            <div className="w-full mt-8">
                <div className="w-5/6 mx-auto">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">
                        <Card title="estações" num={estacoes.length} icon={<FaArtstation className="text-4xl w-4/12 text-lilas" />} />
                        <Card title="docas" num={8} icon={<FaPlaceOfWorship className="text-4xl w-4/12 text-lilas" />} />
                    </div>
                </div>
            </div>

            <div className="w-full mt-8">
                <div className="w-5/6 mx-auto">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3 justify-between items-start py-8 pt-6">

                        <Card icon={<FaUser className="text-4xl w-4/12 text-lilas" />} title="utilizadores" num={ciclistas.length} />
                        <Card icon={<FaUser className="text-4xl w-4/12 text-lilas" />} title="administradores" num={admins.length} />

                    </div>
                </div>
            </div>
        </div>
    );
}
