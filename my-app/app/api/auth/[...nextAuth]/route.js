import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
require("dotenv").config();
// const Handlers = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });

// export { Handlers as GET, Handlers as POST };
// Vous exportez Handlers comme GET et POST, ce qui signifie que la même configuration sera utilisée pour les requêtes GET et POST
// Route pour l'authentification avec next auth

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Ajoutez d'autres fournisseurs ici
  ],
  // Ajoutez d'autres options de configuration ici
};

export const GET = (req, res) => {
  return NextAuth(req, res, options);
};

export const POST = (req, res) => {
  return NextAuth(req, res, options);
};
