import { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isPrivateRoutes = nextUrl.pathname.startsWith("/bikeshared")
            const isAuthRoutes = nextUrl.pathname === "/" || nextUrl.pathname === "/auth/login"
            if (!isLoggedIn && isPrivateRoutes)
                return false
            if (isLoggedIn && isAuthRoutes)
                return Response.redirect(new URL("/bikeshared", nextUrl))
            return true
        },
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.nome;
                token.lastName = user.sobrenome;
                token.email = user.email;
                token.tel = user.telefone;
                token.bi=user.BI;
                token.genero=user.genero;
                token.tipo=user.tipo;

            }
            return token

        },
        session({ session, token }) {
           
            if (session.user) {
                session.user.id = token.id as string;
                session.user.nome = token.name as string;
                session.user.sobrenome = token.lastName as string;
                session.user.email = token.email as string;
                session.user.telefone = token.tel as number;
                session.user.BI=token.bi as string;
                session.user.tipo=token.tipo as number
                session.user.genero=token.genero as string

            }
            return session
        },
    },
    providers: []
} as NextAuthConfig