"use client"
import { AdicionarDocas } from "../../../actions/estacao/add-Docas.js"
type Props = {
    id: string
}
export function AddDoca({ id }: Props) {
    return (
        <form action={async () => {
            const result = await AdicionarDocas(id)

        }}>
            <button>Adicionar Doca</button>

        </form>


    )
}