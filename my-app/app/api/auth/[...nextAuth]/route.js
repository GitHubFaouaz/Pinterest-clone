import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // Vérifiez si l'utilisateur existe déjà dans la base de données
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      // Si l'utilisateur n'existe pas, enregistrez-le dans la base de données
      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
          },
        });
      }

      return true; // Return `true` to sign in the user
    },

    // async session({ session, token, user }) {
    //   // Ajoutez les informations utilisateur à la session
    //   const dbUser = await prisma.user.findUnique({
    //     where: { email: session.user.email },
    //   });

    //   session.user.id = dbUser.id;
    //   return session;
    // },
  },
});

export { Handlers as GET, Handlers as POST };
// Vous exportez Handlers comme GET et POST, ce qui signifie que la même configuration sera utilisée pour les requêtes GET et POST
// Route pour l'authentification avec next auth

// const options = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // Ajoutez d'autres fournisseurs ici
//   ],
//   // Ajoutez d'autres options de configuration ici
// };

// export const GET = (req, res) => {
//   return NextAuth(req, res, options);
// };

// export const POST = (req, res) => {
//   return NextAuth(req, res, options);
// };
