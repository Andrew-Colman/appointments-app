import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@services/db/prisma';

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                };
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
});

/* 

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.MONGODB_URI,
    callbacks: {
        redirect(url, baseUrl) {
            if (url.startsWith(baseUrl)) return url;
            // Allows relative callback URLs
            else if (url.startsWith('/'))
                return new URL(url, baseUrl).toString();
            return baseUrl;
        },
    },
});

*/
