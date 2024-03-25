import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import { compare } from "bcrypt";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        )
          return null;

        const existingCustomer = await db.customer.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!existingCustomer) return null;

        const passwordMatch = credentials?.password
          ? await compare(credentials.password, existingCustomer.password)
          : false;

        if (!passwordMatch) return null;

        return {
          id: existingCustomer.id,
          username: existingCustomer.username,
          email: existingCustomer.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
          username: token.username,
        },
      };
    },
  },
};

export default authOptions;
