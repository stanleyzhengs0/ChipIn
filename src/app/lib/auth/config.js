import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
// import PostgresAdapter from "@auth/pg-adapter";

export const { handlers, auth } = NextAuth({
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log("JWT Callback - Account:", account);
      console.log("JWT Callback - Profile:", profile);
      console.log("JWT Callback - User:", user);

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.provider = account.provider; // Example
      }

      if (profile) {
        token.profile = profile;
      }

      return token;
    },
    async session({ session, token }) {
      console.log("Session Callback - Token:", token);

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    },
  },
});
