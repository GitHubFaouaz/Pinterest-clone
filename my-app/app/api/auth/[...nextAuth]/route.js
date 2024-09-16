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
