
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from "./auth.config";
import { login } from "../actions/user";

const providers = {
    ...authConfig,
    providers: [
        Credentials({
            // credentials: {
            //     email: {},
            //     password: {},
            // },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                const parsedCredentials = z.object({
                    email: z.string().
                        email("Insira um e-mail"),
                    password: z.string().
                        min(5, "A senha deve conter no mínimo 6 caracteres!").
                        max(32, "A senha deve conter no máximo 32 caracteres")
                }).safeParse(credentials)

                if (!parsedCredentials.success) {
                    return null
                }
                const { email, password } = parsedCredentials.data
                const user = await login({ email, password });
                if (user) {
                    return user
                }
                return null
            }
        })
    ]
}

export const { auth, signIn, signOut } = NextAuth(providers)