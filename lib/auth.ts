import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                return credentials;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
              session.user.id = token.userId;
            }
            return session;
        },
    },
    pages: {
        signIn: "/signin",
    },
}