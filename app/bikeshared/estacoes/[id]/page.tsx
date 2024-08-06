import { getEstacaoDetalhe } from "../../../actions/estacao/detalhesEstacao"
import { DocaTable } from "./doca-table"

export default async function EstacaoDetail({ params }: { params: { id: string } }) {
    const detalhes = await getEstacaoDetalhe(params.id)

    return (
        <div>
            <div>
                <h2>{detalhes?.nome}</h2>
                <p>Loca: <span>{detalhes.local}</span></p>
                <p>Ponto: <span>{detalhes.premio}</span></p>
                <p>Estado: {detalhes.activeState ? (<span>Ativada</span>) : (<span>Destativada</span>)}</p>
                <p>Docas: <span>{detalhes.qtdDocasTotais}</span></p>
            </div>
            <div>
                <DocaTable idEstacao={params.id} />

            </div>
        </div>

    )

}