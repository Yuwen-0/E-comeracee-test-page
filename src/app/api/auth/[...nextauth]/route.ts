import  authOptions  from "./options"
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { AuthOptions } from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }