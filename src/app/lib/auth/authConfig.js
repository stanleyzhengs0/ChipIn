import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import PostgresAdapter from "@auth/pg-adapter"
// import { pool } from "../../lib/postgres"


/**
 * Auth Configuration using NextAuth/Authjs V5
 */
export const {handlers, auth} = NextAuth({
  // Uses NEXT_AUTH_URL in .env file 
  trustHost: true, 
  // adapter: PostgresAdapter(pool),
  // Secret key used to encrypt JWT's
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // uses JWT tokens to manage sessions
    strategy: "jwt",
    // Maximum session age set to 30 days (default val set by next)
    maxAge: 30 * 24 * 60 * 60,
  },
  pages:{
    signIn: "/auth/sign-in" //Redirects to a custom sign in page
  },
  // Authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        // Requesting sepcific scopes for Google API's
        params:{
          // response_type: "code",
          scope: 'openid https://www.googleapis.com/auth/drive.activity email profile',
          access_type: "offline",
          prompt: "consent"
          
        },
      },
    }),
  ],
  
  // Callback functions to handle token and session modification
  callbacks: {
    /**
     * Modifies the JWT token by adding the user's ID after authentication
     * @param {object} token - The current JWT token. 
     * @param {object} user - The authenticated users information
     * @returns {object} Updated token with the user's ID if available
     */
    async jwt({token, user, account, profile}){

      if (account){
        token.accessToken = account.access_token,
        token.refreshToken = account.refresh_token 
        token.idToken = account.id_token || null; // Handle missing id_token
        token.provider = account.provider
      }
      
      if (profile){
        token.profile = profile
      }


      return token
    },

    /**
     * Update the Sessions object to contain the users's ID from the JWT token
     * @param {*} Session - The current session object
     * @param {object} token - The JWT token containing the users data
     * @returns Updated Sessions object with the users ID included
     */
    async session({session, token}){
      console.log("session callback authconfig", {session, token})
      return {
        ...session, 
        user: {
          ...session.user, 
          id: token.id,
        },
        accessToken: token.accessToken,
        refreshToken: token.refreshToken
      }
    }
  }

})
