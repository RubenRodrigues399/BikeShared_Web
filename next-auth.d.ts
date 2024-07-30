import "next-auth";
import { DefaultSession } from 'next-auth';
declare module "next-auth" {
    interface User {
        id: string,
        nome: string,
        sobrenome: string,
        genero: string,
        BI: string,
        tipo: number,
        email: string,
        telefone: number,      
    }
}
interface Session {
    user: {
        role: string
    } & DefaultSession["user"]
}

declare module "@auth/core/jwt" {
    interface JWT {
        role: string
    }
}