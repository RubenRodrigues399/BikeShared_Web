
type Admin = {
    id: number,
    nome: string,
    sobrenome: string,
    genero: string,
    bi: string,
    email: string,
    isDevdor?: boolean
    saldo?: number
    tel: string

}

export function UserCard({ id, nome, bi, email, genero, sobrenome, isDevdor, saldo, tel }: Admin) {
    return (
        <div>
            <h2>
                Nome: <span className="font-bold"> {`${nome} ${sobrenome}`}</span>
            </h2>
            <p>ID: <span className="font-bold">{id}</span></p>
            {saldo && <p>Saldo: <span>{saldo}</span> pontos</p>}
            {saldo && <p>Estado: {
                isDevdor ? (<span>Sem Bike</span>) : (<span>Com Bike</span>)
            }
            </p>}
            <p>Bilhete: <span className="font-bold">{bi}</span></p>
            <p>Email: <span className="font-bold">{email}</span></p>
            <p>Telefone: <span className="font-bold">{tel}</span></p>
            <p>Gênero: <span className="font-bold">{genero}</span></p>
        </div>
    )
}