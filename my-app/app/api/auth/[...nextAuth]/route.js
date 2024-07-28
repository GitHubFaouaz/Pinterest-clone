import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// };

// export default NextAuth(authOptions);

const Handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.ID,
      clientSecret: process.env.SECRET,
    }),
  ],
});

export { Handlers as GET, Handlers as POST };
// Vous exportez Handlers comme GET et POST, ce qui signifie que la même configuration sera utilisée pour les requêtes GET et POST
// Route pour l'authentification avec next auth
